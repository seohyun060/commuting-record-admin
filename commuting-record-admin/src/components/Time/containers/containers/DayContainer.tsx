import React from 'react';
import Day from '../components/Day';
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
  let dayColor;
  let timeColor;
  let timeBorder;
  let boxBorderWidth;
  let workTime;
  let height = index < 7 ? '104.5px' : '133.3px';
  if (currentMonthDay.time === 8) {
    timeBorder = 'solid 1px #60bceb';
    timeColor = '#018ad0';
    workTime = '예정시간 08:00';
  } else if (currentMonthDay.time === 4) {
    timeBorder = 'solid 1px #eb5351';
    timeColor = '#eb5351';
    workTime = '예정시간 04:00';
  } else {
    timeBorder = 'none';
    workTime = '';
  }
  if (currentMonthDay.now === true) {
    if (index % 7 === 0) {
      dayColor = '#eb5351';
      boxBorderWidth = '0px 1px 1px 1px';
    } else if (index % 7 === 6) {
      dayColor = '#515deb';
      boxBorderWidth = '0px 1px 1px 0px';
    } else {
      dayColor = '#111';
      boxBorderWidth = '0px 1px 1px 0px';
    }
  } else {
    if (index % 7 === 0) {
      dayColor = '#f5a9a8';
      boxBorderWidth = '0px 1px 1px 1px';
    } else if (index % 7 === 6) {
      dayColor = '#a8aef5';
      boxBorderWidth = '0px 1px 1px 0px';
    } else {
      dayColor = '#999';
      boxBorderWidth = '0px 1px 1px 0px';
    }
  }
  return (
    <div>
      <Day
        dayColor={dayColor}
        timeColor={timeColor}
        boxBorderWidth={boxBorderWidth}
        timeBorder={timeBorder}
        height={height}
        currentMonthDay={currentMonthDay}
        workTime={workTime}
      />
    </div>
  );
};

export default DayContainer;
