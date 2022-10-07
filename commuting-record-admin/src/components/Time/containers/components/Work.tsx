import React from 'react';
import '../../styles/work.style.css';

type Props = {
  weekWork: number;
  index: number;
};

const Work = ({ weekWork, index }: Props) => {
  return (
    <div className='work'>
      {index === 0 ? (
        <div className='work-header'>주차별 총 예정시간</div>
      ) : (
        <div className='work-header' />
      )}
      <div className='work-remain'>{weekWork}시간 00분</div>
      <div className='work-total'>/ 40시간 00분</div>
    </div>
  );
};

export default Work;
