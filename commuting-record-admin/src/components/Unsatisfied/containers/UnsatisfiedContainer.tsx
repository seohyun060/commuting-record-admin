import React, { useMemo } from 'react';
import Unsatisfied from '../Unsatisfied';
import { useState, useEffect, useCallback } from 'react';
import type { EChange } from '../../../typedef/common/common.types';
import type { UnsatisfiedData } from '../../../typedef/components/Unsatisfied/unsatisfied.types';
const unsatisfiedList: UnsatisfiedData[] = [];
for (let i = 0; i < 240; i++) {
  unsatisfiedList.push({
    name: '이제성',
    nickname: 'Jax',
    worktime: '36시간 20분 / 38시간 30분',
    lefttime: '2시간 10분',
  });
}

const UnsatisfiedContainer = () => {
  const [search, setsearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = useMemo(() => currentPage * 13, [currentPage]);
  const firstIndex = useMemo(() => lastIndex - 13, [currentPage]);
  const filteredPosts = useMemo(
    () =>
      unsatisfiedList.filter(
        (unsatified) =>
          (unsatified.name.indexOf(search) &&
            unsatified.nickname.indexOf(search)) !== -1,
      ),
    [search],
  );
  const unsatisfiedItems = useMemo(
    () => filteredPosts.slice(firstIndex, lastIndex),
    [search],
  );
  const totalPosts = useMemo(() => filteredPosts.length, [search]);

  const onSearch = useCallback(
    (e: EChange) => {
      console.log(e);
      setsearch(e.target.value);
    },
    [search],
  );

  return (
    <Unsatisfied
      search={search}
      onSearch={onSearch}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      unsatisfiedItems={unsatisfiedItems}
      totalPosts={totalPosts}
    />
  );
};

export default UnsatisfiedContainer;
