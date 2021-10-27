// Importing React libs from node_modules folder
import React from 'react'
import { render } from 'react-dom'
import testData from './dummy-data/friends';

console.log('testData in index.js: ', testData);

// Importing the styles - the bundler does some magic!
import './styles.less'

// Importing a React component from another file
import App from './components/App'

render(
  <App tData = {testData} />,
  document.querySelector('#root')
)
