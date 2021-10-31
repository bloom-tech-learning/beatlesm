# Objective 3 - use the connect function to connect React components to the Redux store

##  Overview

Now that we have built a store to manage our state, we need to connect our components to that store. We can do so using the ```connect``` function, within the components themselves. We can also build a helper function within the component files to tell the ```connect``` function what pieces of state we want to access. This function is usually named ```mapStateToProps```, and it will map pieces of our Redux state to the props of our component. Let's try it out.

## Follow Along

Using the app you created earlier that has the redux store wired up, change the object you initially returned out of the reducer function to look like this:

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

Now create a component called ```MovieList```. Next, we'll take a look at the syntax we use to ```connect``` our React component to Redux, then we'll talk about it. To start, import the ```connect``` function into your component:

```
import { connect } from 'react-redux';
```

Next, we use the connect function, where we export the component at the bottom of the file. We invoke connect twice (function currying). First with two arguments - a function and an object. Second with just the component we are trying to connect. For now, we'll pass null and {} into the first invocation.

```
// export default MovieList; Not this way if we are connecting this component!
export default connect(null, {})(MovieList)
```

Now ```MovieList``` is connected to the store. Let's write our ```mapStateToProps``` function now, to tell ```connect``` which pieces of our state we want to bring in to this component. This function takes in ```state``` as a parameter, then returns an object where the properties can be passed to props, and the values are retrieved from the store for our component.

For a ```MovieList``` component, we probably only want to know about the ```movies``` array and the ```moviesToWatch``` number, maybe the ```user``` object. We'll not worry about the ```todoList```, since our component doesn't need to know about that part of our state. Let's bring those three pieces of our state into the component.

```
const mapStateToProps = state => {
  return {
    movies: state.movies,
    moviesToWatch: state.moviesToWatch,
    user: state.user
  }
}
```

Let's pass this in as the first argument to the first ```connect``` invocation. Notice that ```state``` is being passed into this function. Under the hood, connect passes our entire state tree to ```mapStateToProps```. That means that within that function, we have access to all our state via the ```state``` argument. But, the component only receives the pieces of state that we turn out of ```mapStateToProps```.

```
export default connect(mapStateToProps, {})(MovieList)
```

Now, if you look at the props in the React tools, you will see that all three pieces of our state have been passed to our component through the ```connect``` function! As a side note, other props we've passed to this component the traditional way are still going to be available.

By the way, did you notice that we are using a function that takes in a component, extends its functionality, and returns a component? ```connect``` is a HOC!!!`


## Challenge

Create a new application. Add the ```redux``` and ```react-redux``` packages. Create a redux store with some test data (have fun with this part!). Build a component and connect that component to the store using ```connect``` and a ```mapStateToProps``` function. Render the connected data from your connected component.





[Previous](./Object_2.md) | [Next](./Object_4.md)


