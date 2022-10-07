import React from 'react';
import '../../styles/rejectpop.style.scss';
import ic_close from '../../../../assets/images/ic_close.png';
import { useState } from 'react';

import { text } from 'stream/consumers';
import type { VoidFunction } from '@typedef/components/Request/request.types';

type Props = {
  onRejectToggle: VoidFunction;
  onToggle: VoidFunction;
};

const RejectPop = ({ onRejectToggle, onToggle }: Props) => {
  const [value, setValue] = useState('');
  const onChangeValue = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div className='reject-background'>
      <div className='reject-container'>
        <div className='reject-container-header'>
          <span>반려사유</span>
          <img src={ic_close} onClick={onRejectToggle}></img>
        </div>
        <div className='reject-container-main'>
          <div className='title'>사유</div>
          <div className='content'>
            <textarea
              value={value}
              placeholder='반려 사유 기입'
              onChange={onChangeValue}></textarea>
          </div>
        </div>
        <div className='reject-container-button'>
          <button className='reject' onClick={onToggle}>
            취소
          </button>
          <button className='confirm'>적용</button>
        </div>
      </div>
    </div>
  );
};

export default RejectPop;