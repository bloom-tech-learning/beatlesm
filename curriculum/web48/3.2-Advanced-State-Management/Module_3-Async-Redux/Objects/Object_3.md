# Objective 3 - Effectively Use Redux-Thunk and Asynchronous Action Creators to Consume Data From External API's

##  Overview

Redux Thunk is a separate node package called ```redux-thunk```. Since the Redux action -> reducer flow is synchronous, we will use Redux Thunk to make the flow asynchronous and make API calls from our action creators.

Yep. You read that correctly. We are changing up the action creators to perform asynchronous API calls. We can do this because Redux Middleware intercepts the normal Redux flow and can make a call before actions make it to the reducer. To make this work, we need to understand ```thunks```.

```thunk``` is another word for a function. But it's not just any old function. It's a special (and uncommon) name for a function that's returned by another function. Like this:

```
function not_a_thunk() {
  // this one is a "thunk" because it defers work for later:
  return function() {
    console.log('do stuff now');
  };
}
```

So how does this apply to Redux? Well, when we start using the ```redux-thunk``` middleware, it does an interesting thing with our redux flow. When an action creator is called ```redux-thunk``` intercepts and acts on returned data. If the thing returned is an action, it forwards the action through to the reducer. But, if the thing returned is a function, aka a thunk (a function returned from a function), then it invokes the thunk and passes the ```dispatch``` function as an argument to it.

This is where ```redux-thunk``` becomes very powerful. The action-creator returned thunk has access to the dispatch function. So we can run an async function, like an API call, and inside the .```then()``` we can dispatch an action!

Let's look at a simple example of an action creator that does this when a user logs in:

```
function logInUser(creds) {
  // this returned function is the thunk, and gets dispatch passed in
  return function(dispatch) {
    return axios.post('/login', creds).then(res => {
      const loggedInAction = { type: USER_LOGGED_IN, payload: res.data.user }
      dispatch(loggedInAction);
    });
  };
}
```
Really cool, right? The thunk has access to dispatch, and can dispatch a new action based on the result of the API call! Let's clean this up a little with arrow function syntax. The following code snippet is essentially the exact same as the above snippet:

```
const logInUser = creds => dispatch => {
  return axios.post('/login', creds).then(res => {
    const loggedInAction = { type: USER_LOGGED_IN, payload: res.data.user }
    dispatch(loggedInAction);
  });
}
```

Much better! Let's go try it out!

## Follow Along

We have an app [here](https://codesandbox.io/s/xo8mkrk49w) ready to make an API call to the Pokemon API. The first step to accomplishing this is to add ```redux-thunk``` as a dependency, then go to the main ```index.js``` page and import it like this:

```
import thunk from 'redux-thunk';
```

Next, we need to tell the ```applyMiddleware``` function about this piece of middleware.

```
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
```

Now we're ready to make our action creators asynchronous!

Go into the ```action/index.js``` file. You should see an action creator that is returning an action. That action adds an error to state. If you push the "Fetch Pokémon" button, you will see the error rendered on the screen right after it is added to state.

Now, go ahead and remove the entire return statement from the action creator. Then let's build the thunk function.

```
export const getPokemon = () => dispatch => {

};
```

Now, inside the action creator, we have access to dispatch. So, what is this action creator going to do? It is going to fetch Pokemon data from the API. So, before we fetch data, let's remember the finite state machine and dispatch an action that can tell the reducer that we are starting the fetch. (And let's change the action type to 'FETCH_POKEMON_START').

```
export const FETCH_POKEMON_START = 'FETCH_POKEMON_START';

export const getPokemon = () => dispatch => {
  dispatch({ type: FETCH_POKEMON_START });
};
```
Now we'll go to the reducer and build a case for that action. Import the correct action type, and add an ```isFetching``` property to the ```initialState``` object. In this case, we will set ```isFetching``` to true, and reset the ```error``` back to an empty string, just in case it has an error in it.

```
import { FETCH_POKEMON_START } from '../actions';

const initialState = {
  pokemon: [],
  error: '',
  isFetching: false
};

function reducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case FETCH_POKEMON_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };

    default:
      return state;
  }
}

export default reducer;
```

Now, back to the action creator to make our API call. To continue, we need to add ```axios``` as a dependency and import it into the action creator file. Then, make a ```GET``` request to ['https://pokeapi.co/api/v2/pokemon/'](https://pokeapi.co/api/v2/pokemon/).

In the ```.then()``` and ```.catch()```, we need to dispatch more actions. Inside the ```.then()```, we will dispatch the ```FETCH_POKEMON_SUCCESS``` action, and pass with it the data we get back from the API. If there is an error, we need to dispatch the ```FETCH_POKEMON_FAIL``` action and pass with it the error. Make two new action types for both cases, then build out the ```.then()``` and ```.catch()```.

```
import axios from 'axios';

export const FETCH_POKEMON_START = 'FETCH_POKEMON_START';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAIL = 'FETCH_POKEMON_FAIL';

export const getPokemon = () => dispatch => {
  dispatch({ type: FETCH_POKEMON_START });
  axios
    .get('https://pokeapi.co/api/v2/pokemon/')
    .then(res =>
      dispatch({ type: FETCH_POKEMON_SUCCESS, payload: res.data.results })
    )
    .catch(err => dispatch({ type: FETCH_POKEMON_FAIL, payload: err }));
};
```

Finally, we will build the cases for our two new actions. In the reducer file, import our new action types. Then build a case for each inside the reducer function. Before looking at the code below, think through what change each action represents on the state tree. Think about finite state machines. Now go ahead and build both cases, then compare how you did with the code below.

```
import {
  FETCH_POKEMON_START,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAIL
} from '../actions';

const initialState = {
  pokemon: [],
  error: '',
  isFetching: false
};

function reducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case FETCH_POKEMON_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: action.payload,
        isFetching: false,
        error: ''
      };
    case FETCH_POKEMON_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
```

Now push the button again, and there are your Pokémon! Here is the final [CodeSandbox](https://codesandbox.io/s/vy6148rx97) for reference.

## Challenge

Build out a simple React/Redux app that displays dog images from the dogs API.



[Previous](./Object_2.md) | [Next](./Understanding.md)


