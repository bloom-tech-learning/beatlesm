import React from "react"
import Todo from "./Todo";

const TodoList = (props) => {
        
    return (
        <div className= "tasks-list">
            {props.todos.map(todo => {
                return (
                    <Todo key = {todo.id} todo = {todo} handleToggleItem = { props.handleToggleItem } />
                )
            })}
         </div>
    )    
}

export default TodoList;
