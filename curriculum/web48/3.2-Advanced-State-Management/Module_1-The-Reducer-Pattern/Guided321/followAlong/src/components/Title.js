import reducer, { initialState} from './../reducers';
import React, { useState, useReducer } from 'react';

import { toggleEditing, changeTitleInput, changeTitle } from './../actions';

const Title = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("current state: ", state);

  const handleChanges = e => {
    dispatch(changeTitleInput(e.target.value));
  };

  const handleEditing = () => {
    console.log("1. Button is clicked.");
    dispatch(toggleEditing());
  }

  const handleFormSubmit = () => {
    dispatch(changeTitle());
  }

  console.log('0/5. Render Application.');
  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{' '}
          <i onClick={handleEditing} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={state.newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={handleFormSubmit}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;