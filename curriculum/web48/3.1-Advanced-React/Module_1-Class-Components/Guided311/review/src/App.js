import React, {useState} from "react";

const Person = (props) => {
  console.log('props:', props);
  return (
    <div>
      <h1>Hello {props.name}, you are age of {props.age}.</h1>
      <p>Hey {props.name}! {props.name} is a great name, don't change it!</p>
    </div>
  );
}

const App = () => {

  const [state, setState] = useState({
    name: "Alison",
    age: 34
  });

  const handleClick = () => {
    setState({
      ...state,
      name: "someone"});
  }

  return (
    <div>
      <Person name = {state.name} age= {state.age}/>      
      <button onClick = { handleClick}>Change Name</button>
    </div>
  );
};

export default App;