import GnbContainer from '@components/Gnb/containers/GnbContainer';
import Header from '@components/Header/Header';
import React from 'react';
import './styles/request.style.scss';
import ic_search from '../../assets/images/ic_search.png';
import { useState } from 'react';
import RequestPopContainer from './containers/containers/RequestPopContainer';
import RequestItemContainer from './containers/containers/RequestItemContainer';
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
}: Props) => {
  const [clickeditem, setclickeditem] = useState({
    name: '',
    nickName: '',
    rType: '',
    rTime: '',
    rdate: '',
    rState: '',
  });

  const onRequestItemClick = (requestItem: RequestData) => {
    setclickeditem(requestItem);
  };

  return (
    <div className='Entire'>
      {toggle && (
        <RequestPopContainer settoggle={settoggle} clickeditem={clickeditem} />
      )}

      <Header title='요청 관리' />
      <div className='Request'>
        <GnbContainer tab='RequestManagement' />

        <div className='rqitem-container'>
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
          <div className='rqitem-list'>
            <div className='rqitem-list-header'>
              <div className='Name'>근로자명</div>
              <div className='NickName'>닉네임</div>
              <div className='RType'>요청 종류</div>
              <div className='RTime'>조정 시간</div>
              <div className='RDate'>적용 날짜</div>
              <div className='RState'>상태</div>
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
          <div className='Pagination'>
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
