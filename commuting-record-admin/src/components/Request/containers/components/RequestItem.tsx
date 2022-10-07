import React, { useState, useCallback, useEffect } from 'react';
import '../../styles/requestitem.style.css';

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
      <div className='request-item' onClick={onToggle}>
        <div className='request-item-name'>{requestItem.name}</div>
        <div className='request-item-nickname'>{requestItem.nickName}</div>
        <div className='request-item-type'>{requestItem.rType}</div>
        <div className='request-item-time'>{requestItem.rTime}</div>
        <div className='request-item-date'>{requestItem.rdate}</div>
        <div
          className='request-item-state'
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
