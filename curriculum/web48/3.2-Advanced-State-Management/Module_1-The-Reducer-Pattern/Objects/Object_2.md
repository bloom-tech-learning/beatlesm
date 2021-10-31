#   Objective 2 - Describe Reducer Functions

##  Overview

Reducer functions take two arguments – the current state and action – and return a new, updated state object based on both arguments.

In pseudocode, this idea looks like:
```
(state, action) => newState
```

More specifically, consider a function in JavaScript that, when passed to an integer, would return that value + 1, without mutating the original integer's value. Notice we could pass our initialState value - 0 - and then return a new value - 1 - without overriding the initialState.

```
const initialState = 0
const reducer = (state) => {
  const newState = state + 1
  return newState;
}

const newStateValue = reducer(initialState);
console.log(initialState, newStateValue); // 0, 1
```

Often, returning something such as an integer or a string is not the best choice, especially as data grows more complex than previous examples.

Consider the previous example, where component's state utilizes an object as its data structure of choice:

```
const initialState = { count: 0 }
const reducer = (state) => {
  return { count: state.count + 1 }
}
```

Again, we are returning a new object and are not directly mutating or overriding the initialState object.

This reducer function is a pure function without any side effects. Therefore, reducer functions are the perfect fit for managing changes in state while maintaining the immutability we want in our components.

We've discussed the nature of the incoming state value, but what about the action?

The action, represented by an object, contains properties related to some action that happens in our apps. Every action object is required to have a ```type``` property, which will "inform" the reducer actions happening in the app. The type allows the reducer to know what part of the state needs to change.

Let's look at how we can use this to manage state in our apps.

## Follow Along

Looking again at reducer above, let's show it that we want to increment our count state by passing in an ```action``` with ```'increment'``` as the type.

```
const initialState = { count: 0 }
const reducer = (state, action) => {
  if (action.type === 'increment') {
    return { count: state.count + 1 }
  }
}

reducer(initialState, { type: 'increment' })
```

This strategy is especially powerful when we want our reducer to be able to reduce the state. Take a look at our reducer now:

```
const initialState = { count: 0 }
const reducer = (state, action) => {
  if (action.type === 'increment') {
    return { count: state.count + 1 }
  } else if (action.type === 'decrement') {
    return { count: state.count - 1 }
  }
}

reducer(initialState, { type: 'increment' });
reducer(initialState, { type: 'decrement' });
```

Now our state management is very predictable. Our current state passes into the reducer, and action follows to tell how to update the state.

We can also add a ```payload``` property to our action objects (sometimes called ```data```). Our reducer needs to have some data passed into it through the action to be able to update the state correctly, and this is where that data would live.

```
const initialState = { name: 'Donald Duck' }
const reducer = (state, action) => {
  if (action.type === 'changeName') {
    // how do we know what to change the name to? The action payload!
    return { name: action.payload }
  }
}

reducer(initialState, { type: 'changeName', payload: 'Mickey Mouse' });
```

As you will see in the follow along, the action, and its associated property ```type```, allow us to use the reducer to perform conditional state transformations.

There's one last edit we need to make to get to production quality. As you can imagine, or ```if```, ```if else```, ```if else``` … etc, statements are going to get very complex and long. We'll use JavaScript's ```switch``` statement to make that part of our reducer a lot more readable:

Back to the count example, look at the change here:

```
const initialState = { count: 0 }
const reducer = (state, action) => {
  // if (action.type === 'increment') {
  //   return { count: state.count + 1 }
  // } else if (action.type === 'decrement') {
  //   return { count: state.count - 1 }
  // }
  // we pass in the value we want to look at (action.type):
  switch(action.type) {
    // then we make a "case" for each possible value we expect:
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 }
    // finally, we give a "catch-all" which is just to return state untouched. Never leave this out. There should always be a default:
    default:
      return state;
  }
}

reducer(initialState, { type: 'increment' });
reducer(initialState, { type: 'decrement' });
```

Cleaned up, the reducer now looks like this:

```
const initialState = { count: 0 }
const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state;
  }
}

reducer(initialState, { type: 'increment' });
reducer(initialState, { type: 'decrement' });
```

(Read more about ```switch``` statements [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch))

## Challenge

Create a reducer function that can do the following:

1.  Take in an ```initialState``` value of an array of objects. Each object should represent a to-do item, and should contain only one property, description, which should be a string, a short ```description``` of the to-do item.

2.  Take in an action object with a ```type``` property and a ```payload``` property. The ```payload``` property should have a description key and a value equal to a new description entered by a user. (Don't worry about making inputs now, just write the reducer.)

3.  If the type is equal to 'ADD,' then return a new array with a shallow copy of the previous state, and spread in a new object that contains the new description key and its corresponding value.

4.  Return the previous state as a default case.

For additional practice and challenge, how might you implement logic that would contain a type of 'DELETE' or 'EDIT'?








[Previous](./Object_1.md) | [Next](./Object_3.md)