import React, { useState, useReducer } from 'react';

import { connect } from 'react-redux';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  return (
    <div>
      <h1>{props.appName}</h1>
      {
        !props.editing ? 
          <TitleDisplay />:
          <TitleForm />
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return({
    appName:state.title.appName,
    editing: state.title.editing
  });
}


// export default Title;
export default connect(mapStateToProps)(Title);

// const connect = (mapStateToProps)=> {
//   const newProps = mapStateToProps(state);
//   return (Component) => {
//     return <Component {...newProps}/>
//   }
// }

// mapStateToProps : a function that gets the current state and injects into the props of our component anything returned.
// mapActionsToProps : an object that contains action creator functions and injects those functions into props. Any function executed here is AUTOMATICALLY DISPATCHED.
// component : the component we are injecting props into.
