// src/helpers/Pagination.js
import React from 'react';

const Pagination = ({ currentPage, pageCount, onPageChange }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Oldingi
      </button>
      <span>Sahifa {currentPage} / {pageCount}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pageCount}
      >
        Keyingi
      </button>
    </div>
  );
};

export default Pagination;
