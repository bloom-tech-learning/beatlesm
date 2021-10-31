# Objective 2 - Implement Redux Middleware Libraries Into a Redux Store Using ApplyMiddleware

## Overview

Middleware is a standard tool used in programming. You will see Middleware used a lot when you start learning about NodeJS.

Middleware intercepts some process, runs a function at the intercept point, then (usually) continues the process. Or, sometimes, Middleware stops the process entirely.

When whatever "process" in question is kicked off, there is usually data flowing through different functions. So when we "intercept" the process with Middleware, we are generally trying to use that flowing data.

Middleware in Redux is very common and gives us a chance to do a few different things with the data passing from action creators to the reducers. This is what it looks like with Redux:

Middleware intercepts every action before it flows through to the reducers.

Middleware can:

- stop actions
- forward an action untouched
- dispatch a different action
- dispatch multiple actions

We can have multiple Middleware.

Middleware runs sequentially, in the order they are defined.

Middleware is added to the store when it is created.

A traditional Redux application flows like this:

```
graph LR A[Component] -- calls --> B[Action Creator] B -- returns an --> C[Action] C -- is dispatched to all --> D[Reducers] D -- updates --> E[State] E -- sends changes to --> A
```

When we add middleware the flow changes to this:

```
graph LR A[Component] -- calls --> B[Action Creator] B -- returns an --> C[Action] C -- flows through all --> D(Middleware) D -- _AND THEN_ dispatched to all --> E(Reducers) E -- updates --> F[State] F -- sends changes to --> A
```

## Follow Along

Let's add a logger Middleware library to any React/Redux app you have in CodeSandbox. It can be any sandbox you have with Redux implemented as long as the app is working.

Next, we want to add ```redux-logger``` as a dependency. In codesandbox, you add it from the dependency button. In a normal app, you would run ```npm install redux-logger```.

Next, we want to import it into our application.

```
import logger from 'redux-logger';
```

Finally, we need to import a helper function from redux. This function is the ```applyMiddleware``` function. You can probably guess that we will pass ```logger``` into this function. You would be correct! But the ```applyMiddleware``` function is going to be inside the createStore function. It looks like this:

```
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

const store = createStore(
  reducer,
  applyMiddleware(logger)
);
```

That's it! This basic middleware package will console.log your actions as they flow through the action creators before they hit the reducer.

Go ahead and try it out. First, open your console (it will look better if it is in its window and not in the CodeSandbox page), open the console, and then interact with your app. You will see the actions as they are logged, the state tree before the action passes to the reducer, and the resulting state tree after the action passes to the reducer!

Note: if you use Redux-logger with other Middleware packages, make sure the logger is passed to applyMiddleware last.

## Challenge

Look at this package - [https://github.com/elgerlambert/redux-localstorage](https://github.com/elgerlambert/redux-localstorage). Try to now implement this so that your store is saved to localStorage. The configuration is a little different than what we did above, so you will have to follow what the docs show.


[Previous](./Object_1.md) | [Next](./Object_3.md)