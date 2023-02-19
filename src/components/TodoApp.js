import { useState } from "react"
import Todo from "./Todo";
import '../styles/todoApp.css'

export default function TodoApp() {

    const [title, setTitle] = useState(''); 
    const [todos, setTodos] = useState([]);


    function handleChange(e) {
        e.preventDefault();
        const value = e.target.value;
        setTitle(value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newTodo = {
            id: Date.now(),
            title: title,
            completed: false
        }
        
        const temp = [...todos];
        temp.unshift(newTodo);
        setTodos(temp)
        
        setTitle('');
    }

    function handleUpdate(id, value){
        const temp = [...todos];
        const item = temp.find(item => item.id === id);
        item.title = value;
        setTodos(temp);
    }

    function handleDelete(id) {
        const temp = todos.filter(item => item.id !== id);
        setTodos(temp)

    }

    return (
        <div className="function-container">
            <div className="heading-container">
            <h1 className="todo-heading">Todo List</h1>
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input onChange={handleChange} className='todo-input' value={title} />
                <input onClick={handleSubmit} type='submit'  value="Create todo" className='todo-button' ></input>
            </form>
            </div>

            <div className="todosContainer">
                {
                    todos.map(item => (
                        <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                    ))
                }
            </div>
        </div>
    )
}