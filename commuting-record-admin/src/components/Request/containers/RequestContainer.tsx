import React from 'react';
import Request from '../Request';
import { useState, useEffect, useCallback } from 'react';
import type {
  EChange,
  RequestData,
} from '@typedef/components/Request/request.types';

const RequestContainer = () => {
  const [search, setsearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * 13;
  const indexOfFirst = indexOfLast - 13;
  const [toggle, settoggle] = useState(false);
  const rqList: RequestData[] = [];
  for (let i = 0; i < 240; i++) {
    rqList.push({
      name: '',
      nickName: '',
      rType: '',
      rTime: '',
      rdate: '',
      rState: '',
    });
  }
  const onSearch = useCallback(
    (e: EChange) => {
      console.log(e);
      setsearch(e.target.value);
    },
    [search],
  );
  for (let i = 0; i < 240; i++) {
    rqList[i].rdate = '2022년 8월 26일';
    rqList[i].rTime = '1시간 30분';
    if (i % 2 === 0) {
      rqList[i].name = '이제성';
      rqList[i].nickName = 'Jax';
    } else {
      rqList[i].name = '장도현';
      rqList[i].nickName = 'Seena';
    }
    if (i % 3 === 0) {
      rqList[i].rType = '예정시간 감소';
      rqList[i].rState = '대기중';
    } else if (i % 5 === 0) {
      rqList[i].rType = '근무시간 증가';
      rqList[i].rState = '대기중';
    } else if (i === 11) {
      rqList[i].rType = '휴가';
      rqList[i].rState = '대기중';
      rqList[i].rTime = '-';
    } else if (i % 7 === 0) {
      rqList[i].rType = '근무시간 감소';
      rqList[i].rState = '반려';
    } else {
      rqList[i].rType = '예정시간 증가';
      rqList[i].rState = '결제';
    }
  }

  let requestItems: RequestData[] = [];
  let filteredPosts = rqList.filter(
    (rq) => (rq.name.indexOf(search) && rq.nickName.indexOf(search)) !== -1,
  );

  requestItems = filteredPosts.slice(indexOfFirst, indexOfLast);

  let totalPosts = filteredPosts.length;

  return (
    <div>
      <Request
        toggle={toggle}
        settoggle={settoggle}
        search={search}
        onSearch={onSearch}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        requestItems={requestItems}
        totalPosts={totalPosts}
      />
    </div>
  );
};

export default RequestContainer;
