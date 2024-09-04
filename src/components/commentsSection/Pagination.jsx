import React from "react";
import "./styles.css";

const Pagination = ({ previous, next, onPrevious, onNext }) => {
  return (
    <div className="pagination-controls">
      {previous && (
        <button onClick={onPrevious} className="pagination-button">
          Avvalgi
        </button>
      )}
      {next && (
        <button onClick={onNext} className="pagination-button">
          Keyingi
        </button>
      )}
    </div>
  );
};

export default Pagination;
