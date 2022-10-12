import GnbContainer from '@components/Gnb/containers/GnbContainer';
import Header from '@components/Header/Header';
import React from 'react';
import './styles/request.style.css';
import ic_search from '../../assets/images/ic_search.png';
import { useState } from 'react';
import RequestPopContainer from './containers/RequestPopContainer';
import RequestItemContainer from './containers/RequestItemContainer';
import PaginationContainer from '../common/Pagination/container/PaginationContainer';

import type {
  RequestData,
  SetStateBoolean,
  SetStateNumber,
  EFunction,
} from '@typedef/components/Request/request.types';

type Props = {
  toggle: boolean;
  settoggle: SetStateBoolean;
  search: string;
  onSearch: EFunction;
  currentPage: number;
  setCurrentPage: SetStateNumber;
  requestItems: RequestData[];
  totalPosts: number;
  clickedItem: RequestData;
  onRequestItemClick: (requestItem: RequestData) => void;
};

const Request = ({
  toggle,
  settoggle,
  search,
  onSearch,
  currentPage,
  setCurrentPage,
  requestItems,
  totalPosts,
  clickedItem,
  onRequestItemClick,
}: Props) => {
  return (
    <div className='entire'>
      {toggle && (
        <RequestPopContainer settoggle={settoggle} clickeditem={clickedItem} />
      )}

      <Header title='요청 관리' />
      <div className='request'>
        <GnbContainer tab='RequestManagement' />

        <div className='request-item-container'>
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
              <span className='see-all'>전체보기</span>
              <span className='arrow'>˅</span>
            </div>
            <div className='date-box'>
              <span>2022.08.21(월)~2022.08.27(일)</span>
            </div>
          </div>
          <div className='request-item-list'>
            <div className='request-item-list-header'>
              <div className='name'>근로자명</div>
              <div className='nickname'>닉네임</div>
              <div className='type'>요청 종류</div>
              <div className='time'>조정 시간</div>
              <div className='date'>적용 날짜</div>
              <div className='state'>상태</div>
            </div>
            {requestItems
              .filter(
                (requestItem) =>
                  (requestItem.name.indexOf(search) &&
                    requestItem.nickName.indexOf(search)) !== -1,
              )
              .map((requestItem) => (
                <RequestItemContainer
                  requestItem={requestItem}
                  settoggle={settoggle}
                  onRequestItemClick={onRequestItemClick}
                />
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

export default Request;
