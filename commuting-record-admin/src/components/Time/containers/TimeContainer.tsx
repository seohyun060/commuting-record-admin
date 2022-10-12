import Time from '../Time';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
type Days = {
  day: number;
  now: boolean;
  time: number;
};
type Props = {};
const week = ['일', '월', '화', '수', '목', '금', '토']; //일주일
const today = {
  year: new Date().getFullYear(), //오늘 연도
  month: new Date().getMonth() + 1, //오늘 월
  date: new Date().getDate(), //오늘 날짜
  day: new Date().getDay(), //오늘 요일
};
const TimeContainer = (props: Props) => {
  const [selectedYear, setSelectedYear] = useState(today.year); //현재 선택된 연도
  const [selectedMonth, setSelectedMonth] = useState(today.month); //현재 선택된 달
  const [currentMonthDays, setCurrentMonthDays] = useState<Days[]>([]);

  const dateTotalCount = useMemo(
    () => new Date(selectedYear, selectedMonth, 0).getDate(),
    [selectedMonth, selectedYear],
  );
  const prevMonthEnd = useMemo(
    () => new Date(selectedYear, selectedMonth - 1, 0).getDate(),
    [selectedMonth, selectedYear],
  );
  const prevMonthStart = useMemo(
    () =>
      prevMonthEnd - new Date(selectedYear, selectedMonth - 1, 1).getDay() + 1,
    [selectedMonth, selectedYear],
  );
  const nextMonthDays = useMemo(
    () => 7 - new Date(selectedYear, selectedMonth, 0).getDay(),
    [selectedMonth, selectedYear],
  );
  const dayLength = useMemo(
    () => prevMonthEnd - prevMonthStart + dateTotalCount + nextMonthDays,
    [selectedMonth, selectedYear],
  );

  const weekWork = useMemo(() => {
    let weekWork = [];
    let workTime = 0;
    for (let i = 0; i < dayLength; i++) {
      if (currentMonthDays[i]) {
        workTime += currentMonthDays[i].time;
        if (i % 6 === 0 && i !== 0) {
          if (workTime === 0) {
            workTime = 40;
          }
          weekWork.push(workTime);
          console.log(i);
          workTime = 0;
        }
      }
    }
    return weekWork;
  }, [currentMonthDays]);

  const prevMonth = useCallback(() => {
    if (selectedMonth === 1) {
      setSelectedMonth(12);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  }, [selectedMonth, selectedYear]);

  const nextMonth = useCallback(() => {
    if (selectedMonth === 12) {
      setSelectedMonth(1);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  }, [selectedMonth, selectedYear]);

  const onSetCurrentMonthDays = useCallback(() => {
    setCurrentMonthDays([]);
    for (let i = prevMonthStart; i <= prevMonthEnd; i++) {
      let tempTime;
      if (i === prevMonthStart) {
        tempTime = 0;
      } else if (i < prevMonthEnd) {
        tempTime = 8;
      } else {
        tempTime = 4;
      }
      const prevDay: Days = {
        day: i,
        now: false,
        time: tempTime,
      };
      setCurrentMonthDays((currentMonthDays) =>
        currentMonthDays.concat(prevDay),
      );
    }
    for (let i = 1; i <= dateTotalCount; i++) {
      const nowDay: Days = {
        day: i,
        now: true,
        time: 0,
      };
      setCurrentMonthDays((currentMonthDays) =>
        currentMonthDays.concat(nowDay),
      );
    }
    for (let i = 1; i < nextMonthDays; i++) {
      const nextDay: Days = {
        day: i,
        now: false,
        time: 0,
      };
      setCurrentMonthDays((currentMonthDays) =>
        currentMonthDays.concat(nextDay),
      );
    }
  }, [selectedMonth]);

  const returnWeek = useCallback(() => {
    let weekArr: any[] = [];
    let dayv: string;
    week.forEach((v) => {
      if (v === '일') {
        dayv = 'sunday';
      } else if (v === '토') {
        dayv = 'saturday';
      } else {
        dayv = 'weekday';
      }
      weekArr.push(
        <div key={v} className={dayv}>
          <div>{v}</div>
        </div>,
      );
    });
    return weekArr;
  }, []);

  useEffect(() => {
    onSetCurrentMonthDays();
  }, [selectedMonth]);

  return (
    <Time
      prevMonth={prevMonth}
      nextMonth={nextMonth}
      returnWeek={returnWeek}
      selectedYear={selectedYear}
      selectedMonth={selectedMonth}
      currentMonthDays={currentMonthDays}
      weekWork={weekWork}
    />
  );
};

export default TimeContainer;
