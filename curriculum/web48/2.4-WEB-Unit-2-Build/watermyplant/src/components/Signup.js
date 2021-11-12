import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';


import axios from 'axios';

import '../CSS/user.css';

const Signup = () => {

    const { push } = useHistory();

    const [newUser, setNewUser] = useState({
        username: '',
        password: '',
        phone: ''
    })

    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://web46-watermyplants2.herokuapp.com/api/users/register', newUser)  
            .then(resp => {
                console.log(resp);
                alert(`Your User-ID is: ${resp.data.id}, you need your User-ID!`);
                push('/login');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return(
        <div className="user-container">
            <div className="user-card">
                <h2>Sign up!</h2>
                <form className="user-form" onSubmit={handleSubmit}>
                    <div className="user-inputs">
                        <label> Username:
                            <input 
                                type="text"
                                name="username"
                                placeholder="Enter your username"
                                value={newUser.username}
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
                                value={newUser.password}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="user-inputs">
                        <label> Phone:
                            <input 
                                type="text" 
                                name="phone" 
                                placeholder="Phone Number" 
                                onChange={handleChange} 
                                value={newUser.phone} 
                            /> 
                        </label>
                    </div>
                    <button className="home-btn">Sign up</button>
                </form>
                <p className="special-p">Already have an account?<Link className="link-1" to='/login'>Login</Link></p>
            </div>
        </div>
    )
}

export default Signup;