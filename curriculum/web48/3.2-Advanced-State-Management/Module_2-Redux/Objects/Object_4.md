# Objective 4 - Write Actions and Action Creators to Describe State Changes

##  Overview

In the world of Redux there's a whole new set of programmer jargon. The first we'll talk about here is ```actions```.

### Actions

Actions in Redux are packets of information that contain an action type and associated data.

In code, an action is simply an object with up to two properties - a ```type``` property and an optional ```payload``` property. Each action MUST have a ```type``` property. The ```type``` property is a string that explains what interaction just happened. By convention, we use all caps and underscores for types - ie ```'LOGIN_USER``` or ```TOGGLE_TODO```. The ```payload``` property is data that goes along with that interaction.

Actions are "dispatched" to our reducer - aka, passed into the reducer function as an argument. When our reducer receives an action, it will update the state according to the type and payload on the action.

Let's say we have a toggle handler function that switches a boolean field called 'show,' which is set on our state in our Redux store. An action for such an event would look like this:

```
{ type: "TOGGLE_SHOW", show: !state.show };
```

This allows us to keep things as simple as possible when responding to events and interactions!

Importantly in Redux, reducers are the only place we can update our state. Actions tell our reducers "how" to update the state, and perhaps with what data it should be updated, only a reducer can update the state. More to come on reducers later.

From what we've learned so far, we can start to see the flow of data in a React/Redux application:

```
Store sets the state ->
Event or user interaction happens ->
An action desctibing the event and possible changes is dispatched to reducer ->
The reducer handles the action and replaces the store accordingly.
```

### Action creators

Actions should not be confused with ```action creators``` (though admittedly, it's very easy to confuse them). An action creator is a function that creates an action. Or in other words, an action creator is a function that returns an action object.

Action creators are a middle step between events and interactions and the dispatch process. They make it possible to write reusable functions that can create actions on the fly, rather than hard-coding actions into our components. With action creators in mind, here is an updated look at our data flow:

```
Store sets the state ->
Event or user interaction happens ->
An action creator is called and dispatches an action ->
Actions tell us about the changes from the event ->
Reducers handle those actions and replace the store accordingly.
```

This flow is one of the reasons that Redux is so powerful. The two major principles here are ```Functional Programming``` and ```Immutability```. Dispatched actions are the trigger for reducers, and reducers are pure functions that never produce any side-effects. Everything you do in Redux is functional.

### Action types

The final term we want to cover here is ```action types```. We've talked about, and even demonstrated the ```type``` property of an action. We want to change that up right now, ever-so-slightly… Instead of passing a string to ```action.type``` we create a variable with the name of the string, and assign it the string we would have passed to an action. Then we give ```action.type``` the variable as it's value.

We do this because we deal with strings as we deal with ```types```.. Strings are used in multiple places like you'll see in reducers very soon, misspellings occur, and are very hard to debug. For example, if we misspell our action type in our reducer, our state won't be updated correctly, and we'll be left wondering what went wrong.

Instead, we'll create an action type and import it wherever we need it. That way, with a linter (a tool used to check the syntax of your code) IntelliSense in our code editor, we can spot errors a lot quicker. This is what action types look like:

```
export const TOGGLE_SHOW = 'TOGGLE_SHOW';

// then in our action:
{ type: TOGGLE_SHOW, payload: !state.show }
```

Now let's try all of this in code!

## Follow Along

Let's build our first action creator. We'll assume that we have a Redux store connected to our app and a component connected to the store. On the state object, we have a ```title``` property brought into the component via the ```mapStateToProps``` function. Our component has an input field and an "update title" button. When we type into the input and click the button, we want to update our state object with our new title. (You can start with [this CodeSandbox](https://codesandbox.io/s/rj862kxkkp)) 

First, we need to create a new folder in the src folder called ```actions```. Inside that folder, create an ```actions.js```  file. Inside that file, create a variable called ```UPDATE_TITLE``` with the value ```'UPDATE_TITLE'```' The variable is an action type. Next, let's create a function called ```updateTitle```  that takes in a new title. This will be our action creator, and it will simply return an action with the type ```UPDATE_TITLE```  and a payload of the new title we passed into it. Don't forget to export both the action type and the action creator function. (Note that these will be ```named exports``` so that they will be imported with curly bracket syntax ```import { namedExport } from './place';```)

```
export const UPDATE_TITLE = 'UPDATE_TITLE';

export function updateTitle(newTitle) {
  return {
    type: UPDATE_TITLE,
    payload: newTitle
  }
}
```

See how easy that was? It sounded pretty scary up above, but in practice, this is all very concise and intuitive. We have an action creator who can dispatch our action to the reducer and send the reducer the new title. So let's import our action creator into our component and talk about how to use it there.

When we use action creators in our connected components, we first import the action creator. Then, we pass the action creator into the ```connect``` function. Action creators are passed to the object that is the second argument in the first ```connect``` invocation.

```
export default connect(mapStateToProps, { actionCreator: actionCreator })(Component);
```

Then, just like the state pieces that we brought into our component via the ```mapStateToProps``` function, we have access to our action creator in props. This step is important because it is the ```connect``` function that works in the background to actually dispatch our actions to the reducer. We can't just import an action creator and use it in our component. It must go through ```connect``` and be used from the props object.

Let's see how we would do this in the app we have been building. Go to the ```Title``` component, import ```updateTitle```, and pass it into the connect function.

```
import React from 'react';
import { connect } from 'react-redux';

import { updateTitle } from '../actions/actions';

...

export default connect(
  mapStateToProps,
  { updateTitle }  // same as { updateTitle: updateTitle }
)(Title);
```

Now when the "Update title" button is pushed, invoke a function on the class that invokes ```this.props.updateTitle``` that gets ```this.state.newTitleText``` passed into it.

```
updateTitle = (e) => {
  e.preventDefault();
  this.props.updateTitle(this.state.newTitleText)
}

...

<button onClick={this.updateTitle}>Update title</button>
```

Yes, names will be the same all over the place with this stuff. Just note that ```props.updateTitle``` is the action creator.

Let's add a console.log in the action creator and log out the newTitle that is passed into it to ensure it is working. Since we don't have a reducer to handle this action yet, we won't see the state or title updated yet. So this is the best way we can make sure it's working.

```
export function updateTitle(newTitle) {
  console.log(newTitle);
  return {
    type: UPDATE_TITLE,
    payload: newTitle
  }
}
```

Here's what our [codesandbox](https://codesandbox.io/s/w2n0o4qwmw) should look like now.

## Challenge

In the application you created earlier, look at the state you are displaying. Find something easy, like a string or a number, to update. (Add a string to your state if you only have arrays or objects. This will keep things simple today while we learn this brand new state management flow). Next, build an action creator, pass it into your component, and call that action creator (from props) after some interaction like a button click. Make sure you have a console.log in the action creator, so you will know if it's working.





[Previous](./Object_3.md) | [Next](./Object_5.md)


