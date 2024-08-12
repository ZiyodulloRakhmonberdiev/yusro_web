import React from 'react';
import './styles/Pagination.css';

const Pagination = ({ currentPage, pageCount, onPageChange }) => {

    const getDisplayedPages = () => {
    let pages = [];
    if (pageCount <= 5) {
      for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages = [1, 2, 3, '...', pageCount];
      } else if (currentPage >= pageCount - 2) {
        pages = [1, '...', pageCount - 2, pageCount - 1, pageCount];
      } else {
        pages = [currentPage - 1, currentPage, currentPage + 1, '...', pageCount];
      }
    }
    return pages;
  };

  const displayedPages = getDisplayedPages();

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        &laquo;
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {displayedPages.map((page, index) =>
        page === '...' ? (
          <span key={`ellipsis-${index}`} className="ellipsis">
            {page}
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={currentPage === page ? 'active' : ''}
          >
            {page}
          </button>
        )
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pageCount}
      >
        &gt;
      </button>
      <button
        onClick={() => onPageChange(pageCount)}
        disabled={currentPage === pageCount}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
