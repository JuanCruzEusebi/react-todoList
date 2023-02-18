import { useState } from "react"
import React from 'react';


export default function Todo({item, onUpdate, onDelete}) {

    const [isEdit, setIsEdit] = useState(false)
    const [newValue, setNewValue] = useState(item.title)
    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleChange(e) {
        const value = e.target.value;
        setNewValue(value)
    }

    function handleClickUpdateTodo(e) {
        onUpdate(item.id, newValue);
        setIsEdit(false);
    }

    function FormEdit() {
        return <form className="todoUpdateForm" onSubmit={handleSubmit}>
            <input type='text' className="todoInput" onChange={handleChange} value={newValue}></input>
            <button className="button" onClick={handleClickUpdateTodo}>Update</button>
        </form>
    }

    function TodoElement() {
        return <div className="">
        {item.title}
        <button onClick={() => setIsEdit(true)} className='hover:bg-sky-700'>Edit</button>
        <button onClick={(e) => onDelete(item.id)}>Delete</button>
    </div>
    }

    return (
        <div className="w-full">
            {isEdit ? <FormEdit/> : <TodoElement/>}
        </div>
    )
}