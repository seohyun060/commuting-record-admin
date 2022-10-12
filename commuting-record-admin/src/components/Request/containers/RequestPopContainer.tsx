import React, { useCallback } from 'react';
import RequestPop from './components/RequestPop';
import { useState } from 'react';
import type {
  SetStateBoolean,
  RequestData,
} from '@typedef/components/Request/request.types';
type Props = {
  settoggle: SetStateBoolean;
  clickeditem: RequestData;
};
let vacation = '휴가 보내주세용';
let timeCheck = '시간 안맞는데 조정해주세용';

const RequestPopContainer = ({ settoggle, clickeditem }: Props) => {
  const [rejectToggle, setRejectToggle] = useState(false);

  const onToggle = useCallback(() => {
    settoggle((prev) => !prev);
  }, []);
  const onRejectToggle = useCallback(() => {
    setRejectToggle((prev) => !prev);
  }, []);
  return (
    <RequestPop
      clickeditem={clickeditem}
      vacation={vacation}
      timeCheck={timeCheck}
      rejectToggle={rejectToggle}
      onToggle={onToggle}
      onRejectToggle={onRejectToggle}
    />
  );
};

export default RequestPopContainer;
