import './uiInput.css'

function UiTextarea({ placeholder, type, setState, state, hasError }) {
    return (
        <div className="ui-input">
            <textarea type={type}
                placeholder={placeholder}
                value={state}
                onChange={(e) => setState(e.target.value)}
                className={`input ${hasError && 'error-input'}`}
                >
            </textarea>
        </div>
    );
}

export default UiTextarea;
