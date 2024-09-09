import React from "react";
import "./styles.css";

const Pagination = ({ previous, next, onPrevious, onNext }) => {
  return (
    <div className="pagination-controls">
      {previous && (
        <button onClick={onPrevious} className="pagination-button">
         &laquo; Oldingi
        </button>
      )}
      {next && (
        <button onClick={onNext} className="pagination-button">
          Keyingi &raquo;
        </button>
      )}
    </div>
  );
};

export default Pagination;
