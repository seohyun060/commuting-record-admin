import GnbContainer from '@components/Gnb/containers/GnbContainer';
import Header from '@components/Header/Header';
import React from 'react';
import './styles/time.style.scss';
import { useState, useEffect, useCallback } from 'react';
import DayContainer from './containers/containers/DayContainer';
import WorkContainer from './containers/containers/WorkContainer';
import Work from './containers/components/Work';
type Days = {
  day: number;
  now: boolean;
  time: number;
};

type Props = {
  prevMonth: () => void;
  nextMonth: () => void;
  returnWeek: () => any[];
  selectedYear: number;
  selectedMonth: number;
  currentMonthDays: Days[];
  weekWork: number[];
};

const Time = ({
  prevMonth,
  nextMonth,
  returnWeek,
  selectedYear,
  selectedMonth,
  currentMonthDays,
  weekWork,
}: Props) => {
  let left = '<';
  let right = '>';

  return (
    <div className='entire'>
      <Header title='예정시간 조정' />
      <div className='time'>
        <GnbContainer tab='TimeReconciliation' />
        <div className='time-container'>
          <div className='month-container'>
            <button onClick={prevMonth}>{left}</button>
            {selectedYear}년 {selectedMonth}월
            <button onClick={nextMonth}>{right}</button>
          </div>
          <div className='calendar'>
            <div className='calendar-days'>
              <div className='week'>{returnWeek()}</div>
              <div className='days'>
                {currentMonthDays.map((currentMonthDay, index) => (
                  <DayContainer
                    currentMonthDay={currentMonthDay}
                    index={index}
                  />
                ))}
              </div>
            </div>
            <div className='calendar-work'>
              {weekWork.map((weekWork, index) => (
                <WorkContainer weekWork={weekWork} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
