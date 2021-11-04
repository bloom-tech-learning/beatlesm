import React, { useState, useReducer, createContext, useContext } from 'react';
import data from './data';

import { reducer, initialState, setLocation, setName } from './reducer';

const PersonContext = createContext();
const DogContext = createContext();

const App = ()=> {
    // const [person, setPerson ] = useState(data);
    const [person, dispatch] = useReducer(reducer, initialState);
    
    return(
        <div className="App component">
            <h1>Main App</h1>
            <PersonContext.Provider value={{person, dispatch}}>
                <DogContext.Provider value={"fido"}>
                    <SubComp1 />
                </DogContext.Provider>
            </PersonContext.Provider>
        </div>);
};

const SubComp1 = () => {
    const { person } = useContext(PersonContext);
    
    return (<div className="component">
        <h1>SubComp1</h1>
        <p>{`${person.name.title} ${person.name.first} ${person.name.last}`}</p>
        <SubComp2 />
    </div>)
}

const SubComp2 = () => {
    const { person, dispatch } = useContext(PersonContext);
    const dogName = useContext(DogContext);

    const handleClick = ()=> {
        dispatch(setLocation({ street: "2222", city: "Philadelphia", state: "PA", postcode: "19191" } ));
    }

    return (<div className="component">
        <h1>SubComp2</h1>
        <p>Dog name: {dogName}</p>
        <button onClick={handleClick}>Change Location</button>
        <SubComp3 />
    </div>)
}

const SubComp3 = () => {
    const { person, dispatch } = useContext(PersonContext);

    const handleClick = ()=> {
        dispatch(setName({ title: "Mx", first: "First", last: "Last"}));
    }

    return (<div className="component">
        <h1>SubComp3</h1>
        <p>{`${person.location.street} ${person.location.city}, ${person.location.state} ${person.location.postcode}`}</p>
        <button onClick={handleClick}>Change Name</button>
    </div>)
}

export default App;