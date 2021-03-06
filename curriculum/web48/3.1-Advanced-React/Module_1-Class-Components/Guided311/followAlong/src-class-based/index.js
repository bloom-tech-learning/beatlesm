import React from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/GroceryList';
import ListForm from './components/ListForm';
import './styles.scss';

const groceries = [
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
    purchased: true
  },
  {
    name: 'Pizza Sauce',
    id: 1246,
    purchased: false
  },
  {
    name: 'Raw Honey',
    id: 1237,
    purchased: true
  },
  {
    name: 'Granola',
    id: 1248,
    purchased: false
  }
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      groceries: groceries
    }
  }


  handleClear = ()=> {
    //1. Clear Purchased
    // -  handle button click
    // -  setState of groceries
    // -  take this.state.groceries and return only grocery items where purchased = true
    this.setState({
      ...this.state,
      groceries: this.state.groceries.filter(item=> !item.purchased)
    });
  }


  handleAddItem = (name) => {
    //2. Add Item
    // - create a newItem
    // - setState and retain old state
    // - save all current groceries and add on newItem to the end
    const newItem = {
      name: name,
      id: Date.now(),
      purchased: false
    };

    this.setState({
      ...this.state,
      groceries: [...this.state.groceries, newItem]
    });
  }
  
  handleToggleItem = (item) => {
    //3. Toggle Item
    // - setState and retain old state
    // - find the item that matches our clicked item id
    // - replace that item with same but purchased flipped
    // - leave all other items alone

    this.setState({
      ...this.state,
      groceries: this.state.groceries.map(grocery => {
        if (grocery.id === item.id) {
          return {
            ...grocery,
            purchased: !grocery.purchased //(grocery.purchased)? false: true
          }
        }
        return grocery;
      })
    });
  }
  

  // Class methods to update state
  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>Shopping List</h1>
           <ListForm handleAddItem={this.handleAddItem}/>
         </div>
        <GroceryList handleToggleItem={this.handleToggleItem} groceries={this.state.groceries} />
        <button onClick={this.handleClear} className="clear-btn">Clear Purchased</button>
       </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);