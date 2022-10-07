import GnbContainer from '@components/Gnb/containers/GnbContainer';
import Header from '@components/Header/Header';
import React from 'react';
import './styles/unsatisfied.style.scss';
import ic_search from '../../assets/images/ic_search.png';
import { useState } from 'react';

import UnsatisfiedItemContainer from './containers/containers/UnSatisfiedItemContainer';
import PaginationContainer from '../common/Pagination/container/PaginationContainer';

import type {
  SetStateNumber,
  EFunction,
} from '../../typedef/components/Request/request.types';
type UnsatisfiedData = {
  name: string;
  nickname: string;
  worktime: string;
  lefttime: string;
};
type Props = {
  search: string;
  onSearch: EFunction;
  currentPage: number;
  setCurrentPage: SetStateNumber;
  unsatisfiedItems: UnsatisfiedData[];
  totalPosts: number;
};

const Unsatisfied = ({
  search,
  onSearch,
  currentPage,
  setCurrentPage,
  unsatisfiedItems,
  totalPosts,
}: Props) => {
  return (
    <div className='entire'>
      <Header title='근로 미충족자 목록' />
      <div className='unsatisfied'>
        <GnbContainer tab='Unsatisfied' />

        <div className='unsatisfied-item-container'>
          <div className='search-container'>
            <div className='input-box'>
              <input
                value={search}
                placeholder='근로자명 또는 닉네임으로 검색'
                onChange={onSearch}
              />
              <img src={ic_search}></img>
            </div>
            <div className='select-box'>
              <span className='see-state'>상태</span>
              <span className='arrow'>˅</span>
            </div>
            <div className='date-box'>
              <span>2022.08.21(월)~2022.08.27(일)</span>
            </div>
          </div>
          <div className='unsatisfied-item-list'>
            <div className='unsatisfied-item-list-header'>
              <div className='name'>근로자명</div>
              <div className='nickname'>닉네임</div>
              <div className='worktime'>주간 근무시간</div>
              <div className='lefttime'>주간 미충족시간</div>
            </div>
            {unsatisfiedItems
              .filter(
                (unsatisfiedItem) =>
                  (unsatisfiedItem.name.indexOf(search) &&
                    unsatisfiedItem.nickname.indexOf(search)) !== -1,
              )
              .map((unsatisfiedItem) => (
                <UnsatisfiedItemContainer unsatisfiedItem={unsatisfiedItem} />
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

export default Unsatisfied;
