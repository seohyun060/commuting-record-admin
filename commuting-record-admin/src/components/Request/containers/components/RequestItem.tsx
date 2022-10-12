import React, { useState, useCallback, useEffect } from 'react';
import '../../styles/requestitem.style.css';

import type {
  RequestData,
  SetStateBoolean,
} from '@typedef/components/Request/request.types';
import type { VoidFunction } from '@typedef/common/common.types';
type Props = {
  requestItem: RequestData;
  stateName: string;
  onToggle: VoidFunction;
};

const RequestItem = ({ requestItem, stateName, onToggle }: Props) => {
  return (
    <div className='pop-and-rqitem'>
      <div className='request-item' onClick={onToggle}>
        <div className='request-item-name'>{requestItem.name}</div>
        <div className='request-item-nickname'>{requestItem.nickName}</div>
        <div className='request-item-type'>{requestItem.rType}</div>
        <div className='request-item-time'>{requestItem.rTime}</div>
        <div className='request-item-date'>{requestItem.rdate}</div>
        <div className={`request-item-${stateName}`}>{requestItem.rState}</div>
      </div>
    </div>
  );
};
export default RequestItem;
