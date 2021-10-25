import logo from './logo.svg';
import './App.css';
import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
    // Change code above this line
  }
};


function App() {
  return (
    <div className="App">
      
     { MyComponent}

    </div>
  );
}

export default App;
