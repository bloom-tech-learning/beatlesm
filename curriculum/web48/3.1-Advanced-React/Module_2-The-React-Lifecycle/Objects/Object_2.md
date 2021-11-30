# Objective 2 - Properly Explain What the Constructor and Render Methods Do and What Their Place is in the React Component Lifecycle

## Overview

### The Constructor Function

You already know all about the ```constructor``` function as it pertains to ```classes``` in JavaScript. It's not much different in React. The constructor's purpose in React is to create components with inciting state data for the initial render. Any other props that the component receives on state can be done through the constructor function. We also used to bind all of our event handlers to the component via the constructor, and now we don't have to because of some special ```ESNext``` syntax that allows us to use arrow functions on our ```class methods```. 

The following snippet is an example of this.

```
eventHandler = () => this.setState({ foo: 'bar' });
```
We will have ample time to practice application set up with state data via the constructor, so for now, soak in these examples.

Let's say we have some data from an external file living within our application. Let's say, too, that we want our component to render a list of that data out to the DOM. We would need to import the external data as an array (we don't care about the shape or type of data, just that it lives on an array) and use the constructor to set it up on state.

```
import React from 'react';
import { data } from './extraneousSource.js';

class MyComponent extends React.Component {
  constructor() { // if I wanted to receive some props here I could pass them in through the constructor! constructor(props)...
    super(); // if i receive props through the constructor I will need to pass them back through super(props);
    this.state = {
       arbitraryStateData: data,
    }
  }
}
```
This is how we use the constructor in the mounting phase of our component's lifecycle. Now that our data is set up on state, we can access it during our render portion of the mounting phase.

In conclusion, the constructor function on a React class' component's purpose is to serve up initial state data for when the time comes to mount up your DOM elements.

### The Render Method

The ```render()``` method is one of the React lifecycle methods that is used to tell React, to return some piece of DOM. The React virtual DOM will then handle the steps to mount those DOM pieces.

The ```render()``` method is required for a class component, and without it, the component won't work.

```render``` should be a pure function, meaning it should return the same thing each time you call it. Its concern is to look at ```this.props``` and ```this.state``` and return some DOM element, a boolean, an array of DOM elements, and a couple of other things that you may want to reference or look into later.

The function is there to return what your component should render to the screen. Though many developers ignore it, the component is an important lifecycle method and should be regarded as such.

Another essential item to remember about ```render``` is that it is called not only in the ```Mounting Phase``` of the component lifecycle but also during the ```Updating Phase```. This duality makes the ```render()``` method unique because it exists across multiple phases.

Now that we have our state data set up for us, we can use that state data to give a list of elements to React and let it do it's thing. Inside the render method of our component, let's return a list of items that the arbitraryStateData property (found on our state object) will generate.

```
render () {
  return (
    <div>
        // map returns an array remember? So lets give react an array of JSX elements and let it perform it's magic. For this example we'll assume this list is a string.
        {this.state.arbitraryStateData.map(data => <div>{data}</div>)}
    </div>
  );
}
```

One last thing to note is that any changes from ```setState``` invoke a call to our ```render``` method as well. We'll discuss more on this later, but it's important to remember that ```render()``` is called during mounting, and will be reinvoked if anything changes in our state object. You can think of the state object and render methods as existing together. The state object is like the bigger brother to the ```render``` function, it tells the ```render``` function what to do, and the render function obeys.

In conclusion, the ```render()``` method is how we tell React what data we want to turn into DOM elements. ```render()``` is necessary for every class component we create because we need it to return ```<JSX/>``` elements. It is involved in the ```Mounting Phase``` and the ```Updating Phase``` of our component's lifecycle.

Continue to think about these methods as the mounting methods in our component LifeCycle as you create more and more professional-looking code.

## Follow Along

Let's build out some friends together using [this code sandbox link](https://codesandbox.io/s/5v3pql3y8x)

Once there, you should see a page that renders out a ```<h1>``` and ```<p>``` tags. You should also notice a ```people.js``` file that contains an array of objects with this shape.

```
{
  "id": 1,
  "first_name": "Suzi",
  "last_name": "Claiden",
  "email": "sclaiden0@arizona.edu",
  "occupation": "Biostatistician II",
  "friends": [
      {
          "firstName": "Gabe",
          "lastName": "Lemery"
      }
  ]
}
```

This is the data that our application will consume. Using the React LifeCycle methods, we will discuss how to get this data from one place to another.

Let's start at the beginning with our constructor method. But, first, let's define a name for our state data. Our data object is all about people, so let's call our state object "persons" (intentionally not "people," so that we can tell the two apart.)

Let's import the people and set them up on our constructor's state object.

```
import { people } from "./people";

...
constructor() {
  super();
  this.state = {
    persons: people
  };
}
...

```

Now that we imported data, we can loop over that friend's array and generate a DOM element for each item in the array.

## Challenge

Now you're going to extend the Friends App that we built together [link]() by completing the following tasks.

- Notice that each person object has an array of friends assigned to it.
- The goal for the stretch problem will be to have a FriendsList drop-down built out that hides the friends for each person until it is clicked on.
- Once a user clicks on your FriendsList card, display that user's friends.



[Previous](./Object_1.md) | [Next](./Object_3.md)