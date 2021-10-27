import React from 'react'
import { render } from 'react-dom'

// Importing the top-level component
import App from './components/App'

// Importing the styles
import './styles.less'

// 👉 STEP 1 - Import React Router's Router
import { BrowserRouter as Router } from 'react-router-dom';

render(
  // Wrap the <App /> in a provider
  <Router>
    <App />
  </Router>
  , document.querySelector('#root')
)

/**
 * match -> specific url query
 * location -> what is the url? Where are we?
 * history -> where have we been?
 * history => [google.com, google.com/?q=lorem+ipsum, loremipsum.com]
 */