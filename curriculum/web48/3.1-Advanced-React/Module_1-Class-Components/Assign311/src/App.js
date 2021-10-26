import React from 'react'

import './components/Todo.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const todoTasks = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: true
    }
  ];
 

class App extends React.Component {

  constructor () {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    super ();
    this.state = {
      todoTasks: todoTasks
    }
  }

  handleClear = ()=> {
    //1. Clear Completed
    // -  handle button click
    // -  setState of tasklist
    // -  take this.state.todotasks and return only task completed = true
    this.setState({
      ...this.state,
      todoTasks: this.state.todoTasks.filter(task=> !task.completed)
    });
  }

  handleAddTask = (task) => {
    //2. Add Task
    // - create a newTask
    // - setState and retain old state
    // - save all current todoTasks and add on newTask to the end
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todoTasks: [...this.state.todoTasks, newTask]
    });
  }

  handleToggleTask = (task) => {
    //3. Toggle Task
    // - setState and retain old state
    // - find the item that matches our clicked item id
    // - replace that item with same but completed flipped
    // - leave all other items alone

    this.setState({
      ...this.state,
      todoTasks: this.state.todoTasks.map(todoTask => {
        if (todoTask.id === task.id) {
          return {
            ...todoTask,
            completed: !todoTask.completed //(grocery.purchased)? false: true
          }
        }
        return todoTask;
      })
    });
  }
  
  
  render() {
    return (
      <div className = "App">
        <div className="header"> 
          <h2>Welcome to your Todo App!</h2>
          <TodoForm handleAddTask={this.handleAddTask}/>
        </div>
        <TodoList handleToggleTask={this.handleToggleTask} todoTasks={this.state.todoTasks}/>
        <button onClick={this.handleClear} className="clear-btn">Clear Complete</button>
      </div>
    );
  }
}

export default App;
