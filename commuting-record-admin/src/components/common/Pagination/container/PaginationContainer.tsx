import React from 'react';
import Pagination from '../Pagination';
import type { SetStateNumber } from '@typedef/components/Request/request.types';

type Props = {
  totalPosts: number;
  setCurrentPage: SetStateNumber;
  currentPage: number;
};

const PaginationContainer = ({
  totalPosts,
  setCurrentPage,
  currentPage,
}: Props) => {
  return (
    <div>
      <Pagination
        totalPosts={totalPosts}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default PaginationContainer;
