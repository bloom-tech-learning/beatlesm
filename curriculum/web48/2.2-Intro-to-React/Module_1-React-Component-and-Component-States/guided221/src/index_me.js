import React from 'react'
/* export default Bla; */
// Default import

import { render } from 'react-dom'
// Named import
/* 
const render = () => {}

module.exports = {render} 
*/
import Playground from './components/Playground';

/* 💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content */

/* 💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly */

  function App(props) {
    const {age, cohort, gender, name, allowLoggedIn } = props;

    console.log('props in APP: ', props);
    console.log('allowLoggedIn in APP: ', allowLoggedIn);
    
    console.log('age: ', name);
    console.log('gender: ', gender);  // undefined - NO ERROR !!!
    // console.log('sex: ', sex); //Uncaught ReferenceError: sex is not defined
    
  /*  document.createElement('div');
      elem.classList.add('container'); */   
       
  /* logout = () => {  } */

  /*
  if (allowLoggedIn) 
   return (   
    <div className='container'>
      <h1>Welcome to React, Web {props.cohort}</h1>
      <p>Hello, {props.name}, you are {props.age}, Your loggedIn Status: {props.allowLoggedIn} </p>
      <p>Hello, {name}, you are {age}, Your loggedIn Status: {allowLoggedIn}</p>
      <Playground loggedIn={true}  />
      
    </div>  )
  else return (
    <div className='container'>
      <h1>Welcome to React, Web {props.cohort}</h1>
      <p>Hello, {props.name}, you are Welcome to SigIn </p>
      <Playground loggedIn={false}  />
      
    </div> );
    */
  
  return (
    <div className='container'>
      {
        allowLoggedIn ? 
        <>
          <h1>Welcome to React, Web {props.cohort}</h1>
          <p> Hello, {props.name}, you are {props.age}, Your loggedIn Status: {props.allowLoggedIn ? 'allowed' : 'not allowed'} </p> 
          <p> {name}'s loggedIn Status: {allowLoggedIn ? 'allowed' : 'not allowed'}</p>
          <Playground name ={name} loggedIn={allowLoggedIn} sex = {props.sex} age = {age}/> 
        </>  :
        <>
          <h1>Welcome to React, Web {props.cohort}</h1>
          <p> Hello, {props.name}, you are {props.age}, Your loggedIn Status: {props.allowLoggedIn ? 'allowed' : 'not allowed'} </p> 
          <p> {name}, Please SigIn to Enter Playground! </p>
          <Playground name ={props.name} loggedIn={props.allowLoggedIn} sex = {props.sex} age = {props.age}/>
        </>
      }
    </div>
  )
}

render(
  <App cohort='48' name='Rongjun' age = '74' sex = 'M' allowLoggedIn = {false}  />,
  document.querySelector('#root')
)

  // props!!! -> data passed from one component to a child component
  // const myInfo = {
  //    cohort: '37',
  //    name: 'Casey',
  //    age: '74'
  // }
 