import React from 'react';
import RequestPop from '../components/RequestPop';
import { useState } from 'react';
import type {
  SetStateBoolean,
  RequestData,
} from '@typedef/components/Request/request.types';
type Props = {
  settoggle: SetStateBoolean;
  clickeditem: RequestData;
};

const RequestPopContainer = ({ settoggle, clickeditem }: Props) => {
  let vacation = '휴가 보내주세용';
  let timeCheck = '시간 안맞는데 조정해주세용';
  const [rejectToggle, setRejectToggle] = useState(false);
  return (
    <div>
      <RequestPop
        settoggle={settoggle}
        clickeditem={clickeditem}
        vacation={vacation}
        timeCheck={timeCheck}
      />
    </div>
  );
};

export default RequestPopContainer;
