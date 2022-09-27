import React, { useState, useCallback, useEffect } from 'react';
import '../../styles/requestitem.style.scss';

import type {
  RequestData,
  SetStateBoolean,
} from '@typedef/components/Request/request.types';

type Props = {
  requestItem: RequestData;
  settoggle: SetStateBoolean;
  color: string;
  backgroundColor: string;
  onRequestItemClick: any;
};

const RequestItem = ({
  requestItem,
  settoggle,
  color,
  backgroundColor,
  onRequestItemClick: onRequestItemClick,
}: Props) => {
  const onToggle = () => {
    onRequestItemClick(requestItem);
    if (requestItem.rState === '대기중') {
      settoggle((prev) => !prev);
    }
  };

  return (
    <div className='pop-and-rqitem'>
      <div className='Rqitem' onClick={onToggle}>
        <div className='RqitemName'>{requestItem.name}</div>
        <div className='RqitemNickName'>{requestItem.nickName}</div>
        <div className='RqitemRType'>{requestItem.rType}</div>
        <div className='RqitemRTime'>{requestItem.rTime}</div>
        <div className='RqitemRdate'>{requestItem.rdate}</div>
        <div
          className='RqitemRState'
          style={{
            color: color,
            backgroundColor: backgroundColor,
          }}>
          {requestItem.rState}
        </div>
      </div>
    </div>
  );
};
export default RequestItem;
