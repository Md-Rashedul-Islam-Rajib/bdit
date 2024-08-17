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
      className='px-4 py-2 bg-black text-white rounded-l-md'
      >
        Prev
      </button>

      {Array.from({length: totalPages}, (_,index) =>(
        <button
        key={index}
        onClick={()=> onPageChange(index+1)}
        className={`px-4 py-2`}
        >

        </button>
      ))}
    </div>
  )
}

export default Pagination
