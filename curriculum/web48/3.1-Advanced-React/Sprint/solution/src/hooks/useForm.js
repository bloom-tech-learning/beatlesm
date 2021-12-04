import { useState } from "react"

const useForm = (initial) => {
    // write your custom hook here to control your checkout form
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initial);
  
    const handleChanges = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowSuccessMessage(true);
    };
  
    return [values, showSuccessMessage, handleChanges, handleSubmit]  
  }  
  

export default useForm;