import React, { useEffect, useState } from 'react';
import Day from './components/Day';
type Days = {
  day: number;
  now: boolean;
  time: number;
};
type Props = {
  currentMonthDay: Days;
  index: number;
};
const DayContainer = ({ currentMonthDay, index }: Props) => {
  const [dayType, setDayType] = useState('');
  const [timeType, setTimeType] = useState('');
  const [height, setHeight] = useState('');
  const [workTime, setWorkTime] = useState('');

  useEffect(() => {
    if (currentMonthDay.time === 8) {
      setWorkTime('예정시간 08:00');
      setTimeType('8');
    } else if (currentMonthDay.time === 4) {
      setWorkTime('예정시간 04:00');
      setTimeType('4');
    } else {
      setWorkTime('');
      setTimeType('0');
    }

    if (currentMonthDay.now === true) {
      if (index % 7 === 0) {
        setDayType('now-sun');
      } else if (index % 7 === 6) {
        setDayType('now-sat');
      } else {
        setDayType('now-days');
      }
    } else {
      if (index % 7 === 0) {
        setDayType('not-sun');
      } else if (index % 7 === 6) {
        setDayType('not-sat');
      } else {
        setDayType('not-days');
      }
    }
    if (index < 7) {
      setHeight('104.5px');
    } else {
      setHeight('133.3px');
    }
  }, [currentMonthDay]);

  return (
    <Day
      height={height}
      currentMonthDay={currentMonthDay}
      workTime={workTime}
      dayType={dayType}
      timeType={timeType}
    />
  );
};

export default DayContainer;
