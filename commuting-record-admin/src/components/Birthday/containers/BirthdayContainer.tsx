import React from 'react';
import Birthday from '../Birthday';
import { useState, useEffect, useCallback } from 'react';
import type { BirthdayData } from '../../../typedef/components/Birthday/birthday.types';

const BirthdayContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * 13;
  const indexOfFirst = indexOfLast - 13;

  const birthdayList: BirthdayData[] = [];
  for (let i = 0; i < 240; i++) {
    birthdayList.push({
      name: '이제성',
      nickname: 'Jax',
      birthday: '08월05일',
    });
  }

  let birthdayItems: BirthdayData[] = [];

  birthdayItems = birthdayList.slice(indexOfFirst, indexOfLast);

  let totalPosts = birthdayList.length;

  return (
    <div>
      <Birthday
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        birthdayItems={birthdayItems}
        totalPosts={totalPosts}
      />
    </div>
  );
};

export default BirthdayContainer;
