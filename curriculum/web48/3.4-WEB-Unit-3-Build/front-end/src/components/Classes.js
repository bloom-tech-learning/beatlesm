import { useEffect, useState } from 'react';
import axios from 'axios';
import Class from './Class';

export default function Classes (props) {
    const [allClasses, setAllClasses] = useState([]);
    useEffect(() => {
        const getClasses = () => {
            axios
            .get('https://ft-anywherefitness-7.herokuapp.com/api/classes')
            .then(res => {
                console.log(res);
                setAllClasses(res.data);
            })
            .catch(err => {
                console.error(err);
            })
        }
        getClasses();
    }, [])
    return(
        <div>
            {allClasses.map(i => (
                <Class i={i}/>
            ))}
        </div>
    );
}