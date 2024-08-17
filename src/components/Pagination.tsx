import React from 'react'

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({currentPage, totalPages,onPageChange}) => {
  return (
    <div className='flex justify-center'>
      
    </div>
  )
}

export default Pagination
