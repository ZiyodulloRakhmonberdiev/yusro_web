// import './uiInput.css'

// function UiInput({ placeholder, type, setState, state, hasError }) {
// 	return (
// 		<div className="ui-input">
// 			<input
// 				className={`input ${hasError && 'error-input'}`}
// 				type={type}
// 				placeholder={placeholder}
// 				value={state}
// 				onChange={(e) => setState(e.target.value)}
// 			/>
// 		</div>
// 	);
// }

// export default UiInput;


import React from 'react';
import PropTypes from 'prop-types';
import './uiInput.css';

function UiInput({ placeholder, type, setState, state, hasError }) {
  return (
    <div className="ui-input">
      <input
        className={`input ${hasError ? 'error-input' : ''}`}
        type={type}
        placeholder={placeholder}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
}

UiInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
  hasError: PropTypes.bool
};

export default UiInput;
