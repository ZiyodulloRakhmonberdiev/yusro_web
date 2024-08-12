import React from 'react'

function Form({ formFileds, handleSubmit }) {
    return (
        <div className='admin-form'>
            <form onSubmit={handleSubmit}>
                {formFileds.map((field) => {
                    <div key={field.name}>
                        <label>{field.label}</label>
                        <input
                            type={field.type}
                            name={field.name}
                            value={field.value}
                            onChange={field.onChange}
                        />
                    </div>
                })}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form