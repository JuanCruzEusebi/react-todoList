import { useState } from "react"
import Todo from "./Todo";

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
            id: 1,
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
        <div className="w-full">
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input onChange={handleChange} className='w-96' value={title} />
                <input onClick={handleSubmit} type='submit'  value="Create todo" className='hover:bg-sky-700' ></input>
            </form>

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