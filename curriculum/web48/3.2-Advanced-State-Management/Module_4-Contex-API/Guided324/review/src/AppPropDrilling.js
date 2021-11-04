import React, { useState } from 'react';
import data from './data';

const App = ()=> {
    const [person, setPerson ] = useState(data);
    
    return(<div className="App component">
        <h1>Main App</h1>
        <SubComp1 person={person} setPerson={setPerson}/>
    </div>);
};

const SubComp1 = (props) => {
    const { person, setPerson } = props;
    
    return (<div className="component">
        <h1>SubComp1</h1>
        <p>{`${person.name.title} ${person.name.first} ${person.name.last}`}</p>
        <SubComp2 person={person} setPerson={setPerson}/>
    </div>)
}

const SubComp2 = (props) => {
    const { person, setPerson } = props;

    const handleClick = ()=> {
        setPerson({
            ...person,
            location: {
                street: "2222",
                city: "Philadelphia",
                state: "PA",
                postcode: "19191"
            }
        });
    }

    return (<div className="component">
        <h1>SubComp2</h1>
        <button onClick={handleClick}>Change Location</button>
        <SubComp3 person={person} setPerson={setPerson}/>
    </div>)
}

const SubComp3 = (props) => {
    const {person, setPerson} = props;
    
    const handleClick = ()=> {
        setPerson({
            ...person,
            name: {
                title: "Mx",
                first: "First",
                last: "Last"
            }
        });
    }

    return (<div className="component">
        <h1>SubComp3</h1>
        <p>{`${person.location.street} ${person.location.city}, ${person.location.state} ${person.location.postcode}`}</p>
        <button onClick={handleClick}>Change Name</button>
    </div>)
}

export default App;