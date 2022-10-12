import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Pagination from '../Pagination';
import type { SetStateNumber } from '@typedef/components/Request/request.types';

type Props = {
  totalPosts: number;
  setCurrentPage: SetStateNumber;
  currentPage: number;
};
const pageCount = 5;
const PaginationContainer = ({
  totalPosts,
  setCurrentPage,
  currentPage,
}: Props) => {
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  const [pageGroup, setpageGroup] = useState(
    Math.ceil(currentPage / pageCount),
  );
  const totalPage = useMemo(() => pageNumbers.length, [pageNumbers]);
  const lastPageGroup = useMemo(
    () => Math.ceil(totalPage / pageCount),
    [totalPage],
  );
  const firstNumber = useMemo(() => pageGroup * pageCount - 4, [pageGroup]);
  const lastNumber = useMemo(
    () =>
      pageGroup * pageCount > totalPage ? totalPage : pageGroup * pageCount,
    [pageGroup, totalPage],
  );

  const onMoveLeft = useCallback(() => {
    if (pageGroup !== 1) {
      setpageGroup((prev) => prev - 1);
      if (currentPage < 6) {
        setCurrentPage(1);
      } else {
        setCurrentPage(currentPage - 5);
      }
    }
  }, [pageGroup, currentPage]);

  const onMoveRight = useCallback(() => {
    if (pageGroup !== lastPageGroup) {
      setpageGroup((prev) => prev + 1);
      if (currentPage > totalPage - 5) {
        setCurrentPage(totalPage);
      } else {
        setCurrentPage(currentPage + 5);
      }
    }
  }, [currentPage, totalPage]);

  const onButtonClick = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);

  useEffect(() => {
    setPageNumbers([]);
    for (let i = 1; i <= Math.ceil(totalPosts / 13); i++) {
      setPageNumbers((pageNumbers) => pageNumbers.concat(i));
    }
    setpageGroup(1);
  }, [totalPosts]);

  return (
    <Pagination
      currentPage={currentPage}
      firstNumber={firstNumber}
      lastNumber={lastNumber}
      pageNumbers={pageNumbers}
      pageGroup={pageGroup}
      setpageGroup={setpageGroup}
      lastPageGroup={lastPageGroup}
      totalPage={totalPage}
      onMoveLeft={onMoveLeft}
      onMoveRight={onMoveRight}
      onButtonClick={onButtonClick}
    />
  );
};

export default PaginationContainer;
