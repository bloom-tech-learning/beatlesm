import React from 'react';

const Todo = props => {
    const handleClick = ()=> {
        props.handleToggleTask(props.todoTask);
      }  

    return (
        <div onClick={handleClick} className={`task${props.todoTask.completed ? ' completed' : ''}`}>
            <p>{props.todoTask.task}</p>
        </div>
    );
};

export default Todo;