import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/GroceryList';
import ListForm from './components/ListForm';
import './styles.scss';

const groceriesInitial = [
  {
    name: 'Bananas',
    id: 123,
    purchased: false
  },
  {
    name: 'Torillas',
    id: 124,
    purchased: false
  },
  {
    name: 'Milk',
    id: 1235,
    purchased: false
  },
  {
    name: 'Pizza Sauce',
    id: 1246,
    purchased: false
  },
  {
    name: 'Raw Honey',
    id: 1237,
    purchased: false
  },
  {
    name: 'Granola',
    id: 1248,
    purchased: true
  }
];
const App = () => {
  const [groceries, setGroceries] = useState(groceriesInitial);

  const handleClearItems = () => {    
    setGroceries(groceries.filter(grocery => !grocery.purchased));
  }

  const handleToggleItem = (grocery) => {    
    setGroceries(groceries.map(item => ((item.id === grocery.id) ?  { ...item, purchased: !item.purchased} : item)))
  }

  const handleAddItem = (item)=> {    

    const newItem = {
      name: item,
      id: Date.now(),
      purchased: false
    };

    setGroceries(
      [...groceries, newItem]
    );
  }
  
  return (
    <div className="App">
      <div className="header">
          <h1>Shopping List</h1>
          <ListForm handleAddItem={handleAddItem} />
      </div>
      <GroceryList groceries={groceries} handleToggleItem={handleToggleItem}  />
      <button onClick = {handleClearItems} className="clear-btn">Clear Purchased</button>
    </div>
  );
  
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);