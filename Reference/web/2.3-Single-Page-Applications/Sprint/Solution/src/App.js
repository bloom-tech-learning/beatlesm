import React, { useState, useEffect } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import axios from 'axios';
import './App.css';

// Components used for the different routes
import Home from './components/Home'
import OrderForm from './components/OrderForm'
import Order from './components/Order'
import Help from './components/Help'

const initialOrderDetails = [{
  size: '',
  sauce: '',
  topping: ['true'],
  glutenFreeCrust: false
}]

const initialFormValues = {
  ///// DROPDOWN /////
  size: '',
  ///// RADIO BUTTONS /////
  sauce: '',  
  ///// CHECKBOXES /////
  topping: [],
  glutenFreeCrust: false
}
const initialFormErrors = {
  size: '',
  sauce: '',
  topping: ['pepperoni', 'dicedtomatos', 'sausage', 'blackOlives', 'canadianBacon','roastedGarlic', 'spicyItalianSauage', 'artichokeHearts', 
  'grilledChicker', 'threeCheese', 'Onions', 'pineApple', 'greenPepper', 'extraChesse' ], 
  glutenFreeCrust: false 
}

const initialDisabled = true

const App = () => {
  const [orders, setOrders] = useState(initialOrderDetails)
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean

  const inputChange = (name, value) => {
    // validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

  const postNewOrder = newOrder => {
    
    axios.post('https://reqres.in/api/users', newOrder)
      .then(res => {
       
        console.log('res.data: ', res.data);
        setOrders([res.data, ...orders]);        
      }).catch(err => {
        console.error(err);
      }).finally(() => {
        setFormValues(initialFormValues);
      })
  }

  const formSubmit = () => {
    const newOrder = {
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      topping: ['pepperoni', 'dicedtomatos', 'sausage', 'blackOlives', 'canadianBacon','roastedGarlic', 'spicyItalianSauage', 'artichokeHearts', 
                'grilledChicker', 'threeCheese', 'Onions', 'pineApple', 'greenPepper', 'extraChesse' ].filter(hobby => !!formValues[hobby]),      
      glutenFreeCrust: formValues.glutenFreeCrust      
    }

    setOrders([newOrder, ...orders]);
    setFormValues(initialFormValues);
    console.log('newOrder: ', newOrder);
    postNewOrder(newOrder);    
  }

  return (
    <div>
      <nav >
        <h1 className='store-header'>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to="/">Home</Link>          
          <Link to="/help">Help</Link>          
        </div>
      </nav>
      <Switch>
        <Route path='/order'>
          <Order />
        </Route>
        <Route path='/help'>
          <Help />
        </Route>
        <Route path="/pizza">
          <OrderForm 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>        
      </Switch>
    </div>
  );
};
export default App;
