import React from 'react'

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({currentPage, totalPages,onPageChange}) => {
  return (
    <div className='flex justify-center mt-4'>
      <button 
      onClick={()=> onPageChange(currentPage -1)}
      disabled={currentPage === 1}
      >

      </button>
    </div>
  )
}

export default Pagination
