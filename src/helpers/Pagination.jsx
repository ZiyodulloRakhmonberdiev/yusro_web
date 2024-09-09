import React from "react";
import "./styles/Pagination.css";

const Pagination = ({ previous, next, onPrevious, onNext }) => {
  return (
    <div className="pagination">
      <button 
        className="pagination-button" 
        onClick={onPrevious} 
        disabled={!previous}
      >
        &laquo; Oldingi
      </button>
      <button 
        className="pagination-button" 
        onClick={onNext} 
        disabled={!next}
      >
        Keyingi &raquo;
      </button>
    </div>
  );
};

export default Pagination;
