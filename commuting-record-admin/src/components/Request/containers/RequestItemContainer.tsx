import React, { useCallback, useEffect, useState } from 'react';
import RequestItem from './components/RequestItem';
import type {
  RequestData,
  SetStateBoolean,
} from '@typedef/components/Request/request.types';

type Props = {
  requestItem: RequestData;
  settoggle: SetStateBoolean;
  onRequestItemClick: any;
};

const RequestItemContainer = ({
  requestItem,
  settoggle,
  onRequestItemClick: onRequestItemClick,
}: Props) => {
  const [stateName, setStateName] = useState('');

  const onToggle = useCallback(() => {
    onRequestItemClick(requestItem);
    if (requestItem.rState === '대기중') {
      settoggle((prev) => !prev);
    }
  }, [requestItem]);

  useEffect(() => {
    if (requestItem.rState === '대기중') {
      setStateName('wait');
    } else if (requestItem.rState === '결제') {
      setStateName('confirm');
    } else {
      setStateName('deny');
    }
  }, [requestItem]);

  return (
    <RequestItem
      requestItem={requestItem}
      stateName={stateName}
      onToggle={onToggle}
    />
  );
};

export default RequestItemContainer;
