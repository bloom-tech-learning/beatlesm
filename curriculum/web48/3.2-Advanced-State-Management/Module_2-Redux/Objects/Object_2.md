# Objective 2 - Create a Redux Store and Connect it to a React Application

## Overview

In this section, we will learn how to create the Redux store and use a library called React-Redux to connect our React application to the store. Because Redux is a standalone library, meaning it can be used on its own or with another library or framework for state management and data flow. We have to use a second helper package that will enable us to string together Redux within a React application. That package is called [React-Redux](https://github.com/reduxjs/react-redux) Some more documentation and information lives [here](https://redux.js.org/tutorials/fundamentals/part-5-ui-react) The packages React and Redux are entirely separate, as quoted in the Redux documentation.

> From the very beginning, we need to stress that Redux has no relation to React. You can write Redux apps with React, Angular, Ember, jQuery, or vanilla JavaScript.

## Follow Along

The first step we will take to enable Redux within a React application is to install it. This process assumes you've used Create React App to boilerplate out a React application.

```
npm install react-redux redux
```

Now that we have ```redux``` and ```react-redux``` installed, let's learn how to set it up within our application. We will use the ```createStore``` function from ```redux```, so let's import that first.

```
import { createStore } from 'redux';
```

```createStore``` will take in a single reducer that represents the state (data) of our application globally. We need to create a ```store``` variable, and use ```createStore``` to create the Redux store.

```
const store = createStore(reducer);
```

You'll notice that we passed a reducer into ```createStore```, but we don't have a reducer yet. We'll learn a lot more about reducers soon. For now, let's create a function called ```reducer``` that returns an object representing our state.

```
function reducer() {
  return {
    title: 'Hello world! I\'m in the Redux store!',
  }
}

const store = createStore(reducer);
```

Now that we have a store, we want to make our application aware of it. The way this works is that react-redux gives us a ```<Provider></Provider>``` component that wraps around our entire application. We will pass our newly created store to that component as a prop.

Within our Root Component (usually ```Index.js```), go ahead and import ```Provider ``` from ```react-redux```.

```
import { Provider } from 'react-redux';
```

Then, all we need to do is wrap our ```<App/>``` with the ```<Provider>``` component and pass a ```store``` we created. Then, finally, use the connect function to connect React components to the Redux store.

```
<Provider store={store}>
  <App/>
</Provider>
```

## Overview

Now that we have built a store to manage our state, we need to connect our components to that store. We can do so using the connect function within the components themselves. We can also build a helper function within the component files to tell the connect function what pieces of state we want to access. This function is usually named mapStateToProps, and it will map pieces of our Redux state to the props of our component. Let's try it out.

## Follow Along

Using the app you created earlier that has the Redux store wired up, change the object you initially returned out of the reducer function to look like this:

```
{

  user: {

    name: 'Dustin'

  },

  movies: [

    'Star Wars',

    'Lord of the Rings',

    'Harry Potter'

  ],

  todoList: [

    { task: 'Learn Redux', id: 0, completed: false }

  ],

  moviesToWatch: 13

}
```

Now create a component called MovieList. Next, we'll look at the syntax we use to connect our React component to Redux, then we'll talk about it. To start, import the connect function into your component:

```
import { connect } from 'react-redux';
```

Next, we use the connect function to export the component at the bottom of the file. We invoke connect twice (function currying). 
- First, with two arguments - a function and an object. 
- Second, with just the component we are trying to connect. 
For now, we'll pass null and {} into the first invocation.

```
// export default MovieList; 
```

Not this way if we are connecting this component!

```
export default connect(null, {})(MovieList)
```

Now MovieList is connected to the store. Let's write our mapStateToProps function now to connect which pieces of our state we want to bring to this component. This function takes in state as a parameter, then returns an object where the properties can be passed to props, and the values are retrieved from the store for our component.

For a MovieList component, we probably only want to know about the movies array and the moviesToWatch number, maybe the user object. We'll not worry about the todoList, since our component doesn't need to know about that part of our state. Let's bring those three pieces of our state into the component.

```
const mapStateToProps = state => {

  return {

    movies: state.movies,

    moviesToWatch: state.moviesToWatch,

    user: state.user

  }

}
```

Let's pass this in as the first argument to the first connect invocation. Notice that state is being passed into this function. Under the hood, connect passes our entire state tree to mapStateToProps. That means that within that function, we have access to all our state via the state argument. But, the component only receives the pieces of state that we turn out of mapStateToProps.

```
export default connect(mapStateToProps, {})(MovieList)
```

If you look at the props in the React tools, you will see that all three pieces of our state have been passed to our component through the connect function! As a side note, other props we've passed to this component the traditional way will still be available.

By the way, did you notice that we are using a function that takes in a component, extends its functionality, and returns a component? Connect is a HOC!!!`

## Challenge

Create a new application. Add the Redux and React-Redux packages. Create a Redux store with some test data (have fun with this part!). Build a component and connect that component to the store using connect and a mapStateToProps function. Render the connected data from your connected component.

will look like this:

```
Create a new application. Add the Redux and React-Redux packages. Create a Redux store with some test data (have fun with this part!). Build a component and connect that component to the store using connect and a mapStateToProps function. Render the connected data from your connected component.

will look like this:

<Provider store={store}>

  <App/>

</Provider>
```
## Challenge

Let's go ahead and take a peek at our application using the React DevTools now that we've wrapped it up in a provider component.

Now, take the time to think about where and when you've done this before? Is there a package that we've used this same way? If so, which package is it? It is important to note that many packages that we use in React are implemented this way.

Write down a few thoughts on what you see, where you've seen similar patterns, etc., and send that to your PM.




[Previous](./Object_1.md) | [Next](./Object_3.md)