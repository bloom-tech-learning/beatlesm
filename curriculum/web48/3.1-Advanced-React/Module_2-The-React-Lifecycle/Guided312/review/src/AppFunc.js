import React, { useState, useEffect } from "react";

const AppFunc = () => {
  console.log("AppFunc: Setup State");
  const [name, setName] = useState("Warren");
  const [age, setAge] = useState(49);
  
  useEffect(()=> {
    console.log("AppFunc: Component Had Mounted");
    // setName();
  }, []);

  useEffect(()=> {
    console.log("AppFunc: Component Had Updated");
  }, [name]);

  const handleClick = () => {
    console.log("AppFunc: State Changes");
    setName("Allison");
  };

  console.log("AppFunc: Render DOM");
  return (
    
    <div>
      <h1>Hello {name}!</h1>
      
      <button onClick={handleClick}>MAKE IT ALLISON!</button>
      {console.log("AppFunc: Rendering DOM")}
    </div>
  );
};

export default AppFunc;