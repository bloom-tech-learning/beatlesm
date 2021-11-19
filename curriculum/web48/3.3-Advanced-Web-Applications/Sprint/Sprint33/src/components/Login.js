import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';


const Login = (props) => {
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState ("");

    const { push } = useHistory();

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();     
        if (login.username === "" || login.password === "" ) {
            //add in error action 
            setErrorMessage("No empty of username, and password.");            
            return;  
        }   
        axios.post('http://localhost:5000/api/login', login)  
            .then(resp => {                
                localStorage.setItem('token', resp.data.token);
                push ('/view');
            })
            .catch(err => {
                setErrorMessage(err.response.data.error);                
                console.log('err: ', err);
                return;
            })
    }
    
    return(<ComponentContainer>
        <ModalContainer>
            <h1>Welcome to Blogger Pro</h1>
            <h2>Please enter your account information.</h2>
            { errorMessage && <p style={{ color: 'red' }} id="error">Error: {errorMessage} </p> }
            <form 
                onSubmit={handleSubmit}
                >   
                <UserInputs> 
                <label> Username:
                    <input 
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        value={login.username}
                        onChange={handleChange}
                    />
                </label>
                {/* <UserInputs> 
                </UserInputs>  */}
                <label> Password:
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={login.password}
                        onChange={handleChange}
                    />
                </label>
                </UserInputs>
                <button id="submit">Log in</button>
            </form>
        </ModalContainer>
    </ComponentContainer>);
}

export default Login;

//Task List
//1. Build login form DOM from scratch, making use of styled components if needed. Make sure the username input has id="username" and the password input as id="password".
//2. Add in a p tag with the id="error" under the login form for use in error display.
//3. Add in necessary local state to support login form and error display.
//4. When login form is submitted, make an http call to the login route. Save the auth token on a successful response and redirect to view page.
//5. If the response is not successful, display an error statement. **a server provided error message can be found in ```err.response.data```**
//6. MAKE SURE TO ADD id="username", id="password", id="error" AND id="submit" TO THE APPROPRIATE DOM ELEMENTS. YOUR AUTOTESTS WILL FAIL WITHOUT THEM.

const ComponentContainer = styled.div`
    height: 70%;
    justify-content: center;
    align-items: center;
    display:flex;
`

const ModalContainer = styled.div`
    width: 500px;
    background: white;
    padding: 2rem;
    text-align: center;
`

const UserInputs = styled.div`    
    background: white;
    padding: 1%;
    text-align: center;
`

const Label = styled.label`
    display: block;
    text-align: left;
    font-size: 1.5rem;
`

const FormGroup = styled.form`
    padding:1rem;
`

const Input = styled.input`
    font-size: 1rem;
    padding: 1rem 0;
    width:100%;
`

const Button = styled.button`
    padding:1rem;
    width: 100%;
`
