import React from 'react';
import { useEffect } from 'react';
import '../../styles/day.style.css';
import type { Days } from '../../../../typedef/components/Time/time.types';

type Props = {
  height: string;
  currentMonthDay: Days;
  workTime: string;
  dayType: string;
  timeType: string;
};

const Day = ({
  height,
  currentMonthDay,
  workTime,
  dayType,
  timeType,
}: Props) => {
  return (
    <div className={`day-${dayType}`} style={{ height: height }}>
      <div className='day-number'>{currentMonthDay.day}</div>
      <div className={`day-time-${timeType}`}>{workTime}</div>
    </div>
  );
};

export default Day;
