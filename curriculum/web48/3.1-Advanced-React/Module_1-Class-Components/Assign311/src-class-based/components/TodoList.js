// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

const TodoList = props => {
    
    // for sorting the list based on whether an item has been purchased or not
    // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
    return (
      <div className="task-list">
        {props.todoTasks.map(task => (
          <Todo handleToggleTask={props.handleToggleTask} key={task.id} todoTask={task} />
        ))}
      </div>
    );
  };

export default TodoList;