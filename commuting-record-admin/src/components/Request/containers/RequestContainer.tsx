import React, { useMemo } from 'react';
import Request from '../Request';
import { useState, useEffect, useCallback } from 'react';
import type {
  EChange,
  RequestData,
} from '@typedef/components/Request/request.types';
const requestList: RequestData[] = [];
for (let i = 0; i < 240; i++) {
  requestList.push({
    name: '',
    nickName: '',
    rType: '',
    rTime: '',
    rdate: '',
    rState: '',
  });
}
for (let i = 0; i < 240; i++) {
  requestList[i].rdate = '2022년 8월 26일';
  requestList[i].rTime = '1시간 30분';
  if (i % 2 === 0) {
    requestList[i].name = '이제성';
    requestList[i].nickName = 'Jax';
  } else {
    requestList[i].name = '장도현';
    requestList[i].nickName = 'Seena';
  }
  if (i % 3 === 0) {
    requestList[i].rType = '예정시간 감소';
    requestList[i].rState = '대기중';
  } else if (i % 5 === 0) {
    requestList[i].rType = '근무시간 증가';
    requestList[i].rState = '대기중';
  } else if (i === 11) {
    requestList[i].rType = '휴가';
    requestList[i].rState = '대기중';
    requestList[i].rTime = '-';
  } else if (i % 7 === 0) {
    requestList[i].rType = '근무시간 감소';
    requestList[i].rState = '반려';
  } else {
    requestList[i].rType = '예정시간 증가';
    requestList[i].rState = '결제';
  }
}

const RequestContainer = () => {
  const [search, setsearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [toggle, settoggle] = useState(false);

  const [clickedItem, setClickedItem] = useState({
    name: '',
    nickName: '',
    rType: '',
    rTime: '',
    rdate: '',
    rState: '',
  });

  const lastIndex = useMemo(() => currentPage * 13, [currentPage]);
  const firstIndex = useMemo(() => lastIndex - 13, [currentPage]);

  const filteredPosts = useMemo(
    () =>
      requestList.filter(
        (rq) => (rq.name.indexOf(search) && rq.nickName.indexOf(search)) !== -1,
      ),
    [search, currentPage],
  );

  const requestItems = useMemo(
    () => filteredPosts.slice(firstIndex, lastIndex),
    [search, currentPage],
  );

  const totalPosts = useMemo(() => filteredPosts.length, [currentPage, search]);

  const onRequestItemClick = useCallback((requestItem: RequestData) => {
    setClickedItem(requestItem);
  }, []);

  const onSearch = useCallback(
    (e: EChange) => {
      console.log(e);
      setsearch(e.target.value);
    },
    [search],
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  return (
    <Request
      toggle={toggle}
      settoggle={settoggle}
      search={search}
      onSearch={onSearch}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      requestItems={requestItems}
      totalPosts={totalPosts}
      clickedItem={clickedItem}
      onRequestItemClick={onRequestItemClick}
    />
  );
};

export default RequestContainer;
