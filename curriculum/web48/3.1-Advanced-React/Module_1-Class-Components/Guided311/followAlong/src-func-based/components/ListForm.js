import React, { useState  } from "react";

const ListForm = (props) => {
     
    const [input, setInput] = useState ("")

    const handleChanges = (e) => {
        console.log('e.target.value: ', e.target.value);
        setInput(e.target.value)
    }

    console.log('input: ', input);

    const handleClick = (e) => {
      e.preventDefault();
      props.handleAddItem(input);
    }    

    return (
      <form>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input onChange={handleChanges}  type="text" name="item" />
        <button onClick={handleClick}  >Add</button>
      </form>
    );
  
}

export default ListForm;