import React, { useState } from "react";

const Person = (props)=> {
  return(<div>
    <h1>Hello {props.name}.</h1>
    <p>Hey {props.name}! {props.name} is a great name, don't change it!</p>
  </div>)
}

const App = () => {
  const person = {
    name:"Allison",
    age: 22
  };
  
  const [state, setState] = useState();

  const handleClick = ()=> {
    setState({
      ...state,
      name:"Warren"
    });
  }
  
  return (
    <div>
      <Person name={state.name} age={state.age}/>
      
      <button onClick={handleClick}>Change The Name</button>
    </div>
  );
};

export default App;