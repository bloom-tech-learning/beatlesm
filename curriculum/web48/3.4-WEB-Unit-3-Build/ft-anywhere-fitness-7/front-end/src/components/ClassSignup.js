import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import axiosWithAuth from '../utils/axiosWithAuth'

const ClassSignup = (props) => {
       
    console.log('props in Class: ', props); 

    const [signup, setSignUp] = useState('');

    const { class_id, class_name, intensity_level,class_date, start_time, class_duration, instructor, class_location} = props;

    const { id } = useParams();
    const { push } = useHistory();

    console.log('id: ', id);

    const [newSignUP, setNewSignUP] = useState({
        user_id: props.users.user_id,
        class_id: props.classes.class_id        
    })

    useEffect(() => {
            axiosWithAuth()
            .get(`/classes/signup`)          
            .then (resp => {                
                console.log('resp in ClassSignup.js: ', resp);
                setSignUp(resp.data);
                push("/classsignup");
            })
            .catch(err => {
                console.log(err);
            })

    }, [id]);   

    return(
        <div className="class-wrapper">
            <div>
                <h1>{class_name}</h1>
            </div>
            <div className="intensity">
                <h5>
                    {intensity_level}
                </h5>
            </div>
            <div>
                <span className="date">Date: {class_date} Time: {start_time}</span>
                <span className="length">Length: {class_duration}</span>
            </div>
            <div>
                <span className="instructor">Date: {instructor}</span>
                <span className="location">Location: {class_location}</span>
            </div>
            <div>
                <Link className="join-class" to = '/login' > Join this class</Link>
                <Link className="join-class" to = {`/classes/`} >View class list</Link>
            </div>
        </div>
    );
}

export default ClassSignup;