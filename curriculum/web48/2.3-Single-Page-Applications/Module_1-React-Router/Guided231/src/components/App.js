import React, { useState, useEffect } from 'react'
// 👉 STEP 2 - React Router imports (Route, Link and Switch)
import { Link, Route, Switch } from 'react-router-dom';

// Components used for the different routes
import Home from './Home'
import ItemsList from './ItemsList'
import Item from './Item'

// Dummy data
import data from '../data'

function fetchStock() {
  // fetchStock simulates getting data through axios.get(<URL>)
  return Promise.resolve({ success: true, data })
}

export default function App(props) {
  const [stock, setStock] = useState([])

  useEffect(() => {
    fetchStock().then(res => setStock(res.data))
  }, [])

  return (
    <div className='App'>
      <nav>
        <h1 className='store-header'>Emily&apos;s Trinkets</h1>
        <div className='nav-links'>
          <Link to="/">Home</Link>
          {/* <a href="/">Home</a> */}
          <Link to="/items-list">Shop</Link>
          {/* <a href="/items-list">Shop</a> */}
          {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`/items-list`) */}
        </div>
      </nav>
      {/* 👉 STEP 4 - Build a Switch with a Route for each of the components imported at the top */}
      <Switch>
        <Route path={'/items-list/:id'}>
          <Item items={stock} />
        </Route>
        <Route path="/items-list">
          <ItemsList items={stock} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        {/* OLD WAY */}
        {/* <Route path="lorem-ipsum" render={() => (
          <Blah />
        )} /> */}
      </Switch>
    </div>
  )
}

/**
 * Link sends the url somewhere...
 * Route listens to the url and renders something based on it
 * Switch only matches the first matching route it finds
 */


