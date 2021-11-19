import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import Classes from './Classes';


export default function CreateClass() {
    const { push } = useHistory();

    const [formValues, setFormValues] = useState({
        fitness_name: '',
        fitness_type:'',
        fitness_startTime: '',
        fitness_duration: '',
        fitness_location: '',
        fitness_intensity:'',
        fitness_currentClass:'',
        fitness_maxClass: '',
    });
    
    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    
    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth().post(`/Classes`, formValues)
        .then(res => {
            console.log(res)
            push('/Classes')
        })
        .catch(err => console.log({ err }))
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor= 'fitness_name'>Fitness Name</label>
             <input
                id='fitness_name'
                value={formValues.fitness_name}
                name='fitness_name'
                onChange={handleChange}
                />
            <label htmlFor= 'fitness_time'>Time</label>
            <label htmlFor= 'fitness_type'>Workout Type</label>
             <textarea
                id='fitness_type'
                value={formValues.fitness_type}
                name='fitness_type'
                type='text'
                onChange={handleChange}
                
             />
            <label htmlFor='fitness_startTime'>Start Time</label> 
             <input 
                id='fitness_startTime'
                value={formValues.fitness_startTime}
                name='fitness_startTime'
                type='time'
                onChange={handleChange}
                />
            <label htmlFor='fitness_duration'>Duration</label>
             <input 
                id='fitness_duration'
                value={formValues.fitness_duration}
                name='fitness_duration'
                type='text'
                onChange={handleChange}
             />
            <label htmlFor='fitness_location'>Location</label> 
             <input
                id='fitness_location'
                value={formValues.fitness_location}
                name='fitness_location'
                onChange={handleChange}
             />
              <label htmlFor='fitness_intensity'>Intensity</label> 
              <select
                    onChange = {handleChange}
                    value = {formValues.fitness_intensity}
                    name = 'role'
                    >
                        <option value =''>--select an option--</option>
                        <option value ='beginner'>Beginner</option>
                        <option value ='intermediate'>Intermediate</option>
                        <option value ='advanced'>Advanced</option>
                    </select>
            
              <label htmlFor='fitness_currentClass'>Current Class Size</label> 
             <input
                id='fitness_currentClass'
                value={formValues.fitness_currentClass}
                name='fitness_currentClass'
                onChange={handleChange}
             />
              <label htmlFor='fitness_maxClass'>Max Class Size</label> 
             <input
                id='fitness_maxClass'
                value={formValues.fitness_maxClass}
                name='fitness_maxClass'
                onChange={handleChange}
             />
             {<Classes handleSubmit={handleSubmit}/>}
            <button>Create Class</button>
        </form>
    )
}