import { useState } from "react"

export default function Todo({item}) {

    const [isEdit, setIsEdit] = useState(false)
    const [newValue, setNewValue] = useState(item.title)
    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleChange(e) {
        const value = e.target.value;
        setNewValue(value)
    }

    function FormEdit() {
        return <form className="todoUpdateForm" onSubmit={handleSubmit}>
            <input type='text' className="todoInput" onChange={handleChange} value={newValue}></input>
            <button>Update</button>
        </form>
    }

    function TodoElement() {
        return <div className="todoInfo">
        {item.title}
        <button onClick={() => setIsEdit(true)}>Edit</button>
        <button>Delete</button>
    </div>
    }

    return (
        <div className='todo'>
            {isEdit ? <FormEdit/> : <TodoElement/>}
        </div>
    )
}