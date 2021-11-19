import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import '../CSS/Header.css';
import axiosWithAuth from '../utils/axiosWithAuth'

const Class = (props) => {      
    
    const [session, setSession] = useState('');

    const { class_id, class_name, intensity_level,class_date, start_time, class_duration, instructor, class_location} = session;

    const { id } = useParams();
    const { push } = useHistory();

    console.log('id: ', id);

    useEffect(() => {
            axiosWithAuth()
            .get(`/classes/${id}`)          
            .then (resp => {                
                setSession(resp.data);
            })
            .catch(err => {
                console.log(err);
            })
            
    }, [id]);
      
   
    return(<>  
       <nav className="nav-bar">
            <div className="left-links">
                <Link className="link" to='/'>Anywhere Fitness &nbsp; {props.message}  </Link>                                                  
            </div>
            <div className="right-links">                                                         
                {(props.role === 'instructor' && props.isLoggedIn) && <Link className="link"  to='/create'>Create a Class</Link>  }                 
                {(props.role === 'client' && props.isLoggedIn) && <Link className="link"  to='/create'>Jion a Class</Link> }             
                {props.isLoggedIn && <Link className="link" to='/logout'>Logout</Link>}                        
            </div>
        </nav>

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
                <Link className="join-class" to = '/signupclass' > Join this class</Link>
                <Link className="join-class" to = {`/classes/`} >View class list</Link>
            </div>
            
        </div>
    </>);
}

export default Class;