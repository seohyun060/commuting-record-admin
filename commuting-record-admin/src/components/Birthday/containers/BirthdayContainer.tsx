import React, { useMemo } from 'react';
import Birthday from '../Birthday';
import { useState, useEffect, useCallback } from 'react';
import type { BirthdayData } from '../../../typedef/components/Birthday/birthday.types';

const birthdayList: BirthdayData[] = [];
for (let i = 0; i < 240; i++) {
  birthdayList.push({
    name: '이제성',
    nickname: 'Jax',
    birthday: '08월05일',
  });
}

const BirthdayContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = useMemo(() => currentPage * 13, [currentPage]);
  const firstIndex = useMemo(() => lastIndex - 13, [currentPage]);
  const birthdayItems = useMemo(
    () => birthdayList.slice(firstIndex, lastIndex),
    [currentPage],
  );
  const totalPosts = useMemo(() => birthdayList.length, [currentPage]);

  return (
    <Birthday
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      birthdayItems={birthdayItems}
      totalPosts={totalPosts}
    />
  );
};

export default BirthdayContainer;
