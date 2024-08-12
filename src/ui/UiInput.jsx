import './uiInput.css'

function UiInput({ placeholder, type, setState, state, hasError }) {
	return (
		<div className="ui-input">
			<input
				className={`input ${hasError && 'error-input'}`}
				type={type}
				placeholder={placeholder}
				value={state}
				onChange={(e) => setState(e.target.value)}
			/>
		</div>
	);
}

export default UiInput;
