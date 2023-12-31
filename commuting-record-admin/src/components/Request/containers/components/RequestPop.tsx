import React, { useCallback, useEffect } from 'react';
import '../../styles/requestpop.style.css';
import ic_close from '../../../../assets/images/ic_close.png';
import RejectPop from './RejectPop';
import { useState } from 'react';
import type { RequestData } from '@typedef/components/Request/request.types';
import type {
  SetStateBoolean,
  VoidFunction,
} from '@typedef/common/common.types';
import RejectPopContainer from '../RejectPopContainer';
type Props = {
  clickeditem: RequestData;
  vacation: string;
  timeCheck: string;
  rejectToggle: boolean;
  onToggle: VoidFunction;
  onRejectToggle: VoidFunction;
};

const RequestPop = ({
  clickeditem,
  vacation,
  timeCheck,
  rejectToggle,
  onToggle,
  onRejectToggle,
}: Props) => {
  return (
    <div className='container-background'>
      <div className='pop-container'>
        <div className='pop-container-header'>
          <span>요청관리</span>
          <img src={ic_close} onClick={onToggle}></img>
        </div>
        <div className='pop-container-main'>
          <div className='title'>요청종류</div>
          <div className='content'>{clickeditem.rType}</div>
          <div className='title'>적용날짜</div>
          <div className='content'>2022년 34째 주</div>
          <div
            className='title'
            style={{ color: clickeditem.rType === '휴가' ? '#999' : '#111' }}>
            조정시간
          </div>
          <div
            className='content'
            style={{ color: clickeditem.rType === '휴가' ? '#999' : '#111' }}>
            {clickeditem.rType === '휴가' ? '-' : '1.5시간'}
          </div>
          <div className='title'>사유</div>
          <div className='reason'>
            {clickeditem.rType === '휴가' ? vacation : timeCheck}
          </div>
        </div>
        <div className='pop-container-button'>
          <button className='reject' onClick={onRejectToggle}>
            반려
          </button>
          <button className='confirm'>결제</button>
        </div>
      </div>
      {rejectToggle && (
        <RejectPopContainer
          onRejectToggle={onRejectToggle}
          onToggle={onToggle}
        />
      )}
    </div>
  );
};

export default RequestPop;
