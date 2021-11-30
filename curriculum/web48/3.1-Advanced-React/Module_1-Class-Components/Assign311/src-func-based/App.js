import React, { useState } from 'react'
import './style.css'

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import { todosInitial } from './components/data'

const App = () => {
  
  const [todos, setTodos] = useState(todosInitial);

  console.log('todos: ', todos);

  const handleClearTasks = () => {    
    setTodos(todos.filter(todo => !todo.completed));
  }

  const handleToggleItem = (todo) => {    
    setTodos(todos.map(item => ((item.id === todo.id) ?  { ...item, completed: !item.completed} : item)))
  }

  const handleAddItem = (item)=> {    

    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    };

    setTodos(
      [...todos, newItem]
    );
  }
  
    return (
      <div className = "App">
        <div className = "header"> 
        <h2>Welcome to My Todo App!</h2>
        <TodoForm handleAddItem={handleAddItem} />
        </div> 
        <TodoList todos = {todos} handleToggleItem={handleToggleItem} />
        <button onClick = {handleClearTasks} className = "clear-btn" > Clear completed Todos</button>
      </div>
    );
  
}

export default App;
