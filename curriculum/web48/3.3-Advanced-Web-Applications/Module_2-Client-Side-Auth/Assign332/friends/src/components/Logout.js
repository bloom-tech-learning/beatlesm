import React, { useEffect } from "react"
import { useHistory } from 'react-router-dom'
import axiosWithAuth from "../utils/axiosWithAuth";

const Logout = (props)=> {
    // console.log('props in Logout.js: ', props);
    // console.log('useHistory: ', useHistory());
    const { push } = useHistory();
    useEffect(() => {
    const token = localStorage.getItem('token');

    axiosWithAuth()
        .post ('/logout')        
        .then (resp => {
            console.log('resp in Logout.js: ', resp);
            // console.log('useHistory: ', useHistory()); 
            localStorage.removeItem("token")
            push ("/login");       
        })

        }, [])
        return(<div></div>);
}

export default Logout;