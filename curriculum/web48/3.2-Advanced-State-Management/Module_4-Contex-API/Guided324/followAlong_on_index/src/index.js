import React, { useState } from "react";
import ReactDOM from "react-dom";

import FamilyContext from './contexts/FamilyContext';

import App from "./App";

import { data } from "./data";

const Application = () => {
    const [families] = useState(data);
    const [activeFamily, setActiveFamily] = useState(families[0]);
    return(<FamilyContext.Provider value={{families, activeFamily, setActiveFamily}}><App/></FamilyContext.Provider>)
}


const rootElement = document.getElementById("root");
ReactDOM.render(<Application />, rootElement);
