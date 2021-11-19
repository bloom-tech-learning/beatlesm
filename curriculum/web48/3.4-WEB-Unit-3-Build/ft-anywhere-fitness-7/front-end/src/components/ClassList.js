import { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import ClassListSession from './ClassListSession';
import { Link } from 'react-router-dom';

export default function ClassList (props) {
    // const { classes, setClasses } = props;
    const [classes, setClasses] = useState([])   
    useEffect(() => {

        axiosWithAuth()
            .get('/classes/')          
            .then (resp => {
                // debugger
                console.log('resp in UserList.js: ', resp);
                setClasses(resp.data);
            })
            .catch(err => {
                console.log(err);
            })

    }, []);

    return(
        <div>
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
            {
                classes.map(session=><ClassListSession key={session.id} session={session}/>)
            }
        </div>

        
    );
}