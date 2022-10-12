import React, { useState, useCallback, useEffect, useMemo } from 'react';
import './styles/Pagination.css';
import type {
  SetStateNumber,
  VoidFunction,
} from '@typedef/common/common.types';
type Props = {
  currentPage: number;
  firstNumber: number;
  lastNumber: number;
  pageNumbers: number[];
  pageGroup: number;
  setpageGroup: SetStateNumber;
  lastPageGroup: number;
  totalPage: number;
  onMoveLeft: VoidFunction;
  onMoveRight: VoidFunction;
  onButtonClick: (pageNumber: number) => void;
};

const Pagination = ({
  currentPage,
  firstNumber,
  lastNumber,
  pageNumbers,
  pageGroup,
  setpageGroup,
  lastPageGroup,
  totalPage,
  onMoveLeft,
  onMoveRight,
  onButtonClick,
}: Props) => {
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
          color: pageGroup !== 1 ? '#111' : '#efeff2',
        }}>
        {'<'}
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
          color: pageGroup !== lastPageGroup ? '#111' : '#efeff2',
        }}>
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
