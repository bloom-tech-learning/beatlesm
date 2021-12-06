# Objective 3 - employ the useReducer hook to manage state in a component

##  Overview

The ```useReducer``` hook is an alternative to ```useState``` (```useState``` actually uses ```useReducer``` hook under the hood). It is preferable when you have complex logic that you have to deal with in a component, or when you find yourself with a lot of state properties (more than 3) in a single component. ```useReducer```, takes in a ```reducer``` function (that we build), as well as a value for the ```initialState```. Then it returns both the current state and a dispatch method in an array, just like ```useState``` does.

```
const [state, dispatch] = useReducer(reducer, initialState);
```

The dispatch method is a significant addition to our arsenal here. It will "dispatch" an action to our reducer when specific events occur in our application. The dispatch allows us to powerfully combine the reducer function from our previous section to maintain our state at the level of the component.

The ```useReducer``` hook has all the functionality we love from the ```useState``` hook and combines it with the power of the reducers we are building ourselves. In doing so, it provides access to both the state and a function that dispatch actions to our reducer.

## Follow Along

Let's build out a component to go along with our counter reducer. Please pay attention to the comments in the code that will walk us through this process.

```
import React, { useReducer } from 'react'

const initialState = { count: 0 }
// Initial count is established

// We will use the same reducer we created in the previous section
function reducer(state, action) {
  switch (action.type) {
    case 'INCREASE':
      return { count: state.count + 1 }
    case 'DECREASE':
      return { count: state.count - 1 }
    default:
      return state
  }
}

// Create a functional component
function Counter() {
  // Use the useReducer hook by destructuring its two properties: state, and dispatch and pass in the reducer and the initialState to the useReducer function
  const [state, dispatch] = useReducer(reducer, initialState)

  // Return JSX that displays the count for the user
  // Note the two button elements which allow the user to increase and decrease the count.  Each of them contains an onClick event that dispatches the desired action object, with its given type.  Each action, when fired, is dispatched to the reducer and the appropriate logic is applied.
  return (
    <>
      {/* Note, we have access to the current state and the dispatch method from the useReducer hook, so we can utilize them to display the count as well as couple the dispatching of the actions from the appropriate buttons.*/}
      <div className="count">Count: {state.count}</div>
      <button onClick={() => dispatch({ type: 'INCREASE' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREASE' })}>-1</button>
    </>
  )
}
```
## Challenge

Create a component that demonstrates the following MVP expectations and uses a reducer function and the useReducer hook to implement the required logic and maintain the state of the component:

1.  The user should be able to input a string of text that represents a 'to-do item.'
2.  The user should be able to press a button to submit that 'to-do item.'
3.  The user should be able to submit a 'to-do item' and view it on the screen.

For fun, you could go as far as you would like for stretch, but the main goal of MVP here in this mini-exercise is to be able to locally maintain a list of strings entered by a user by using a reducer function.





[Previous](./Object_2.md) | [Next](./Project.md)


