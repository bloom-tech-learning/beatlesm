import React from "react";

const Todo = (props) => {

    const handleClick = () => {        
        props.handleToggleItem(props.todo);
    }

    return (
        <div onClick={handleClick}  className={`item${props.todo.completed ? ' completed' : ''}`}>
            <p>{props.todo.task}</p>
        </div>
    )
   
}

export default Todo;