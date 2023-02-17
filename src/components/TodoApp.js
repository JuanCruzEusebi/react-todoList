import { useState } from "react"

export default function TodoApp() {

    const [title, setTitle] = useState('hola'); 

    function handleClick(e) {
        e.preventDefault();
        setTitle('Juan')
    }

    return (
        <div className="todoContainer">
            <form className="todoCreateForm">
                <input className="todoInput" value={title} />
                <input onClick={handleClick} type='submit' value="Create todo" className="buttonCreate"></input>

            </form>
        </div>
    )
}