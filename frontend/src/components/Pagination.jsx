import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Limit the number of page buttons shown
  const maxPageButtons = 5; // Adjust as needed
  const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={handlePreviousClick}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        &laquo; 
      </button>
      
      {startPage > 1 && totalPages > maxPageButtons && (
        <>
          <button
            className="pagination-button"
            onClick={() => handlePageClick(1)}
          >
            1
          </button>
          {startPage > 2 && <span className="pagination-ellipsis">...</span>}
        </>
      )}
      
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
        <button
          key={startPage + index}
          className={`pagination-button ${currentPage === startPage + index ? 'active' : ''}`}
          onClick={() => handlePageClick(startPage + index)}
        >
          {startPage + index}
        </button>
      ))}
      
      {endPage < totalPages && totalPages > maxPageButtons && (
        <>
          {endPage < totalPages - 1 && <span className="pagination-ellipsis">...</span>}
          <button
            className="pagination-button"
            onClick={() => handlePageClick(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}
      
      <button
        className="pagination-button"
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
         &raquo;
      </button>
    </div>
  );
};

export default Pagination;



