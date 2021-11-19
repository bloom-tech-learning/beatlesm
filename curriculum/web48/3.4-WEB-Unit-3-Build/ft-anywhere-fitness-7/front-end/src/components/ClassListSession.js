import React from 'react';
import '../CSS/Class.css'
import { Link } from 'react-router-dom';

export default function ClassListSession (props) {
    const { class_id, class_name, intensity_level,class_date, start_time, class_duration, instructor, class_location} = props.session;

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
                <Link className="join-class" to = {'/signupclass'} >Join this class</Link>
                <Link className="join-class" to = {`/classes/${class_id}`} >View class detail</Link>
            </div>
        </div>
    )
}