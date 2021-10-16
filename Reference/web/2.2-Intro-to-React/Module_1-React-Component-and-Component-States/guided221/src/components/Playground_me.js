/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - A slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/

// First: Import React
import React, {useState} from "react";
/* export default React;
export const useState() => {} */

// Second: Define the component (ie function)
// function declaration ::: function name() {}
// function expression ::: const  name = () => {}

function Playground (props) {
  console.log('props in Playground: ', props);

  const {name, sex, age, loggedIn} = props;
  console.log('name in Playground: ', name);
  console.log('loggedIn in Playground: ', loggedIn);
  
  const [logIn, setLogIn] = useState(loggedIn);
  const [count, setCount] = useState(0);
  const [spinnerOn, setSpinnerOn] = useState(false);
  const [choice, setChoice] = useState('scissors');

  // return 2 things:
  //      first: state variable
  //      second: a way to update the state variable
  // Third: return ... something
  // Never, ever, under any circumstance, do this:
  // count++

  if (!logIn){
    return (
      <div className="container">
        <h1>{props.name}, you are more than welcome to Playground! </h1>
        <p> (Customer info - Name: {name}, Age: {age}, Gender: {sex} Login Status: {logIn ? 'logIn' : 'logOut'})</p>
        <p>Please LogIn here!</p>
        <button onClick= {() => setLogIn(true)}>Log In</button>
      </div>
    )
  }
  
  if (logIn && spinnerOn) {
    return (
      <div className="container">
        {/* <p> (Customer info - Name: {name}, Age: {age}, Gender: {sex} Login Status: {logIn ? 'logIn' : 'logOut'})</p> */}
        <p>{props.name} current points is:  {count}</p>
        <h3>The spinner is {spinnerOn ? 'ON' : 'OFF'}.</h3>
        <button onClick = {() => setCount(count + 1)}>Increase</button>
        <button onClick = {() => setCount(count - 1)}>Decrease</button>
        <button onClick= {() => setSpinnerOn(false)}>Turn off Spinnah</button>        
      </div>
    )
  }
  if (logIn)  {
    return (
      <div className="container">
        <h1>{props.name}, you are more than welcome to Playground! </h1>
        <p> (Customer info - Name: {name}, Age: {age}, Gender: {sex} Login Status: {logIn ? 'logIn' : 'logOut'})</p>
        
        {/* Ternary! */}
        {/* { props.loggedIn ? <button>Log out</button> : <button>Log in</button> } */}
        {/* Short circuit evaluation */}
        {/* {props.loggedIn ? <button>Log out</button> : null} */}
        {/* { logIn && <button onClick= {() => setLogIn(false)}>Log Out</button> } */}
        <p>{props.name}, If you feel tired, you can logOut here</p>
        <button onClick= {() => setLogIn(false)}>Log Out</button> 
        <p>{props.name}, Do you like to spin?</p>
        <button onClick = {() => setSpinnerOn(true)}>Turn on Spinnah</button>
        <h3>The current weapon is: {choice}</h3>
        <button onClick={() => setChoice('scissors')}>pick scissors</button>
        <button onClick={() => setChoice('rock')}>pick rock</button>
        <button onClick={() => setChoice('paper')}>pick paper</button>
        
      </div>    
  )
}
}

// Fourth: export (expose) our component to the outside world
export default Playground;