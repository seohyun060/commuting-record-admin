import React, { useState, useCallback, useEffect } from 'react';
import '../../styles/unsatisfieditem.style.css';
import type { UnsatisfiedData } from '../../../../typedef/components/Unsatisfied/unsatisfied.types';

type Props = {
  unsatisfiedItem: UnsatisfiedData;
};

const UnsatisfiedItem = ({ unsatisfiedItem }: Props) => {
  return (
    <div className='unsatisfied-item'>
      <div className='unsatisfied-item-name'>{unsatisfiedItem.name}</div>
      <div className='unsatisfied-item-nickname'>
        {unsatisfiedItem.nickname}
      </div>
      <div className='unsatisfied-item-worktime'>
        {unsatisfiedItem.worktime}
      </div>
      <div className='unsatisfied-item-lefttime'>
        {unsatisfiedItem.lefttime}
      </div>
    </div>
  );
};
export default UnsatisfiedItem;
