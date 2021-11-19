import React, { useState } from 'react';
import { Route, Redirect } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import styled from 'styled-components';

import Header from './Header';
import LambdaHeader from './LambdaHeader';
import View from './View';
import Login from './Login';
import Logout from './Logout';
import EditForm from './EditForm';

const App = () => {
  // const [articles, setArticles] = useState([]);
  // const [editing, setEditing] = useState(false);
  // const [editId, setEditId] = useState();

  return (
    <AppContainer>
      <LambdaHeader/>
      <Header/>
      <RouteContainer>
        <Route exact path="/login">
          <Login/>
        </Route>    
        <Route path="/">
              <Redirect to="/login"/>
        </Route>
         
        <Route path="/view">
              {/* <View articles = {articles} editing = {editing} editId = { editId} setArticles = { setArticles } setEditing = { setEditing } setEditId = {setEditId}  /> */}
              <View  />
        </Route>  

        <Route path="/logout">
              <Logout />
        </Route>  
      </RouteContainer>
    </AppContainer>
  )
}

export default App;

//Task List
//1. Create and import PrivateRoute component.
//2. Create a Route for Login pointing to '/login.'
//3. Create a PrivateRoute for View component point to '/view.'
//4. Create a PrivateRoute for Logout component pointing to '/logout.'


const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`
