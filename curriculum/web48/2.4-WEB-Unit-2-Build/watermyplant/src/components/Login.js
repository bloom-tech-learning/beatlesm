import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import axios from 'axios';

import '../CSS/user.css';

const Login = () => {

    const { push } = useHistory();

    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();        
        axios.post('https://web46-watermyplants2.herokuapp.com/api/users/login', login)  
            .then(resp => {
                localStorage.setItem('token', resp.data.token);
                push('/Plants');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return(
        <div className="user-container">
            <div className="user-card">
                <h2>Login to WaterMyPlants!</h2>
                <form className="user-form" onSubmit={handleSubmit}>
                    <div className="user-inputs">
                        <label> Username:
                            <input 
                                type="text"
                                name="username"
                                placeholder="Enter your username"
                                value={login.username}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="user-inputs">
                        <label> Password:
                            <input 
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={login.password}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <button className="home-btn">Login</button>
                </form>
                <p className="special-p">Need an account?<Link className="link-1" to='/signup'>Sign up</Link></p>
            </div>
        </div>
    )
}

export default Login;