import React from 'react';
import RequestItem from '../components/RequestItem';
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
  let color = '';
  let backgroundColor = '';

  if (requestItem.rState === '대기중') {
    color = '#50b096';
    backgroundColor = '#edf7f4';
  } else if (requestItem.rState === '결제') {
    color = '#515deb';
    backgroundColor = '#edeefd';
  } else {
    color = '#eb5351';
    backgroundColor = '#fdeded';
  }
  return (
    <div>
      <RequestItem
        requestItem={requestItem}
        settoggle={settoggle}
        color={color}
        backgroundColor={backgroundColor}
        onRequestItemClick={onRequestItemClick}
      />
    </div>
  );
};

export default RequestItemContainer;
