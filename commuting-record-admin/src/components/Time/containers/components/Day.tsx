import React from 'react';
import { useEffect } from 'react';
import '../../styles/day.style.scss';
type Days = {
  day: number;
  now: boolean;
  time: number;
};
type Props = {
  dayColor: string;
  timeColor?: string;
  boxBorderWidth: string;
  timeBorder: string;
  height: string;
  currentMonthDay: Days;
  workTime: string;
};

const Day = ({
  dayColor,
  timeColor,
  boxBorderWidth,
  timeBorder,
  height,
  currentMonthDay,
  workTime,
}: Props) => {
  return (
    <div
      className='day'
      style={{ color: dayColor, height: height, borderWidth: boxBorderWidth }}>
      <div className='day-number'>{currentMonthDay.day}</div>
      <div
        className='day-time'
        style={{ border: timeBorder, color: timeColor }}>
        {workTime}
      </div>
    </div>
  );
};

export default Day;
