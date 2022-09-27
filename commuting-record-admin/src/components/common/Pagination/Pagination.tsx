import React, { useState, useCallback, useEffect } from 'react';
import './styles/Pagination.scss';
import type { SetStateNumber } from '@typedef/components/Request/request.types';
type Props = {
  totalPosts: number;
  setCurrentPage: SetStateNumber;
  currentPage: number;
};
const Pagination = ({ totalPosts, setCurrentPage, currentPage }: Props) => {
  const pageNumbers: number[] = [];
  let left = '<';
  let right = '>';
  for (let i = 1; i <= Math.ceil(totalPosts / 13); i++) {
    pageNumbers.push(i);
  }
  const pageCount = 5;
  const totalPage = pageNumbers.length;
  let lastPageGroup = Math.ceil(totalPage / pageCount);

  const [pageGroup, setpageGroup] = useState(
    Math.ceil(currentPage / pageCount),
  );

  let lastNumber = pageGroup * pageCount;
  if (lastNumber > totalPage) {
    lastNumber = totalPage;
  }

  let firstNumber = pageGroup * pageCount - 4;

  const onMoveLeft = () => {
    if (pageGroup !== 1) {
      setpageGroup((prev) => prev - 1);
      if (currentPage < 6) {
        setCurrentPage(1);
      } else {
        setCurrentPage(currentPage - 5);
      }
    }
  };

  const onMoveRight = () => {
    if (pageGroup !== lastPageGroup) {
      setpageGroup((prev) => prev + 1);
      if (currentPage > totalPage - 5) {
        setCurrentPage(totalPage);
      } else {
        setCurrentPage(currentPage + 5);
      }
    }

    console.log(currentPage);
  };
  const onButtonClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    console.log(pageNumber, currentPage);
  };

  return (
    <div
      className='Paginate'
      style={{
        width:
          pageGroup !== 1 && pageGroup !== lastPageGroup ? '310px' : '289px',
      }}>
      <button
        className='Move'
        onClick={onMoveLeft}
        style={{
          backgroundColor: '#fff',
          color: pageGroup !== 1 ? '#111' : '#efeff2',
        }}>
        {left}
      </button>
      {pageGroup !== 1 ? (
        <div>
          <button
            className='Number'
            onClick={() => {
              setpageGroup(1);
              onButtonClick(1);
            }}>
            1
          </button>
          <span>...</span>
        </div>
      ) : (
        ''
      )}
      {pageNumbers.map((pageNumber) =>
        pageNumber >= firstNumber && pageNumber <= lastNumber ? (
          <button
            style={{
              backgroundColor:
                pageNumber === currentPage ? '#e5ecf2' : '#f8f8fa',
              color: pageNumber === currentPage ? '#018ad0' : '#111',
            }}
            className='Number'
            onClick={() => {
              // setCurrentPage(pageNumber);
              onButtonClick(pageNumber);
            }}>
            {pageNumber}
          </button>
        ) : (
          ''
        ),
      )}
      {pageGroup !== lastPageGroup ? (
        <div>
          <span>...</span>
          <button
            className='Number'
            onClick={() => {
              setpageGroup(lastPageGroup);
              onButtonClick(totalPage);
            }}>
            {totalPage}
          </button>
        </div>
      ) : (
        ''
      )}
      <button
        className='Move'
        onClick={onMoveRight}
        style={{
          backgroundColor: '#fff',
          color: pageGroup !== lastPageGroup ? '#111' : '#efeff2',
        }}>
        {right}
      </button>
    </div>
  );
};

export default Pagination;
