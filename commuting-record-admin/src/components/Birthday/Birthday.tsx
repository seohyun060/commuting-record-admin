import GnbContainer from '@components/Gnb/containers/GnbContainer';
import Header from '@components/Header/Header';
import React from 'react';
import './styles/birthday.style.css';
import ic_search from '../../assets/images/ic_search.png';
import { useState } from 'react';

import BirthdayItemContainer from './containers/BirthdayItemContainer';
import PaginationContainer from '../common/Pagination/container/PaginationContainer';

import type { SetStateNumber } from '../../typedef/common/common.types';
import type { BirthdayData } from '../../typedef/components/Birthday/birthday.types';

type Props = {
  currentPage: number;
  setCurrentPage: SetStateNumber;
  birthdayItems: BirthdayData[];
  totalPosts: number;
};

const Birthday = ({
  currentPage,
  setCurrentPage,
  birthdayItems,
  totalPosts,
}: Props) => {
  return (
    <div className='entire'>
      <Header title='생일 목록' />
      <div className='birthday'>
        <GnbContainer tab='BirthDay' />

        <div className='birthday-item-container'>
          <div className='birthday-item-list'>
            <div className='birthday-item-list-header'>
              <div className='name'>근로자명</div>
              <div className='nickname'>닉네임</div>
              <div className='birthday-date'>생일 날짜</div>
            </div>
            {birthdayItems.map((birthdayItem) => (
              <BirthdayItemContainer birthdayItem={birthdayItem} />
            ))}
          </div>
          <div className='pagination'>
            <PaginationContainer
              totalPosts={totalPosts}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}></PaginationContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Birthday;
