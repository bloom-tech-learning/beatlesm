import React, {useState} from "react";

const App = () => {
  const [name, setName] = useState("Petre");

  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick = { () => {
        setName("Soof");
      }}>Change Name</button>
    </div>
  );
};

export default App;