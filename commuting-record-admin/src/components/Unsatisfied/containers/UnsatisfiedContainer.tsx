import React from 'react';
import Unsatisfied from '../Unsatisfied';
import { useState, useEffect, useCallback } from 'react';
import type { EChange } from '../../../typedef/components/Request/request.types';
type UnsatisfiedData = {
  name: string;
  nickname: string;
  worktime: string;
  lefttime: string;
};
const UnsatisfiedContainer = () => {
  const [search, setsearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * 13;
  const indexOfFirst = indexOfLast - 13;

  const unsatisfiedList: UnsatisfiedData[] = [];
  for (let i = 0; i < 240; i++) {
    unsatisfiedList.push({
      name: '이제성',
      nickname: 'Jax',
      worktime: '36시간 20분 / 38시간 30분',
      lefttime: '2시간 10분',
    });
  }
  const onSearch = useCallback(
    (e: EChange) => {
      console.log(e);
      setsearch(e.target.value);
    },
    [search],
  );

  let unsatisfiedItems: UnsatisfiedData[] = [];
  let filteredPosts = unsatisfiedList.filter(
    (unsatified) =>
      (unsatified.name.indexOf(search) &&
        unsatified.nickname.indexOf(search)) !== -1,
  );

  unsatisfiedItems = filteredPosts.slice(indexOfFirst, indexOfLast);

  let totalPosts = filteredPosts.length;

  return (
    <div>
      <Unsatisfied
        search={search}
        onSearch={onSearch}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        unsatisfiedItems={unsatisfiedItems}
        totalPosts={totalPosts}
      />
    </div>
  );
};

export default UnsatisfiedContainer;
