import Footer from "./components/Footer";
import Home from "./components/Home";
import ClassList from "./components/ClassList";
import Class from "./components/Class"
import ClassSignup from "./components/ClassSignup";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import {Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import UserList from './components/UserList'
import User from './components/User'

function App() {

  // To carry the whole classes 
  const [classes, setClasses] = useState([]);
  const [users, setUsers] = useState([]);
  const [user_id, setUser_id] = useState(null);
  const [class_id, setClass_id] = useState(null);


  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token'));

  // const isLoggedIn = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const message = localStorage.getItem('message');

  const deleteUser = (id)=> {
    
  }

  const deleteClass = (id)=> {
    
  }

  return (
    <div className="App">
      <div className="content-wrap">
        <div className="header-section">
          
        </div>
        <div className='display'>
            <Switch>
              <Route exact path="/"> 
                <Home  />           
              </Route>        
              <Route path="/login">
                <Login setIsLoggedIn = { setIsLoggedIn } isLoggedIn = { isLoggedIn } role = {role} message = {message} setUser_id = {setUser_id} />
              </Route> 
              <Route path="/logout">
                <Logout setIsLoggedIn = { setIsLoggedIn } />
              </Route> 
              <Route path="/register">
                <Register />
              </Route> 

              <Route
              path="/user"
              render={props => <User {...props} deleteMovie={deleteUser} />}              
              />

              <Route path="/users">
              <UserList users = { users } setUsers = { setUsers } />
              </Route> 

              <Route path="/classes/:id">
              <Class classes = { classes } deleteClass={deleteClass} message = {message} isLoggedIn = {isLoggedIn} role = {role} setClass_id = {setClass_id} />  </Route>

              <Route path="/signupclass">
                <ClassSignup users ={users} class = {classes} />
              </Route> 

              <Route path="/classes">
                <ClassList classes = { classes } setClasses = { setClasses} message = {message} isLoggedIn = {isLoggedIn} role = {role} />
              </Route> 

              {/* <Route path='/create'>
                <CreateClass />
              </Route> */}              

            </Switch>
        </div>
        <div className="footer-page">
          <Footer/>
        </div>
      </div>
    </div>
    
  );
}

export default App;