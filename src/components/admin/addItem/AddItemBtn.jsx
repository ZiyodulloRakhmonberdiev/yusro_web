import './addItemBtn.css'

function AddItemBtn({ name, onClick }) {
    return (
        <div onClick={onClick} className='add-item-btn'>
            <i className="fa-solid fa-plus"></i>
            <span>{name}</span>
        </div>
    )
}

export default AddItemBtn