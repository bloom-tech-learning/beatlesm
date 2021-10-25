import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import Message from './components/MessageComponent';
import Name from './components/NameComponent';

class AppC extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello from App State!!",
      name: "Rongjun"
    };
  }

  handleChangeFunction = event => {
    this.setState ({message: event.target.value})
  }

  render() {
    return (<div>
      <Message propsMessage = {this.state.message}/>
      <Name propsName = {this.state.name}/>
      <input onChange={this.handleChangeFunction}/>
    </div>);
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppC />, rootElement);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
