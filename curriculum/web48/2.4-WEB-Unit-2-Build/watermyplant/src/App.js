import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';

import Signup from './components/Signup';
import Login from './components/Login';




function App() {

  <Header /> 
  
  return (
    <Router>
      <div className="App">

        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />

        {/* <LoginAPP 
           login = {login} 
           toggle={togglelogin}
          /> */}

        {/* <AddPlantForm

        <HeaderTwoStyle><h1>Welcome to WaterMyPlants</h1></HeaderTwoStyle>

        <AddPlantForm

          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}

        /> */}

      
      </div>
    </Router>
  );
}
export default App;