import { useState, useRef   } from "react"
import React from 'react';
import '../styles/todo.css'


export default function Todo({ item, onUpdate, onDelete }) {   

    const [isEdit, setIsEdit] = useState(false)

    const ref = useRef(null);

    function handleDelete(e) {
        const element = ref.current;
        element.className = 'move'
        setTimeout(() => {
        onDelete(item.id)
        }, 800)
    }


    function FormEdit() {
        
    const [newValue, setNewValue] = useState(item.title);

        function handleSubmit(e) {
            e.preventDefault();
        }

        function handleChange(e) {
            const value = e.target.value;
            setNewValue(value);
        }
        
        function handleClickUpdateTodo(e) {
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }



        return <form className="todoUpdateForm" onSubmit={handleSubmit}>
                    <input type='text' className='update-input' onChange={handleChange} value={newValue}></input>
                    <button className='edit-button update' onClick={handleClickUpdateTodo}>Update</button>
                </form>
    }

    function TodoElement() {
        return <div className="edit-buttons-container" ref={ref}>
                    <div className="title-container">
                        {item.title}            
                    </div>
                    <div>
                        <button onClick={() => setIsEdit(true)} className='edit-button'>Edit</button>
                        <button onClick={handleDelete} id='delete-button' className='delete-button'>Delete</button>
                    </div>
                </div>
    }

        return   <div> {isEdit ? <FormEdit/> : <TodoElement/>} </div>
    
}