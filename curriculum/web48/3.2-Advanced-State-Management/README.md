# WEB - 3.2 - Advanced State Management

## The Reducer Pattern

The difficulties of storing and efficiently performing logic on data within components become more and more apparent as the number of data increases. Consequently, as components grow and deal with larger sets of data, the storing and transportation of state across the entire application increasingly becomes more cumbersome. Reducers offer one possible way to address this problem within the component. At the level of the application, an elegant combination of the Context API with reducers provides one possible way that React developers can manage global state.

## Redux

React is a very sophisticated UI-component library that can be used with a few other libraries to build large-scale single-page applications. But as our applications scale in size, so will the data we are concerned with within our applications. And you can only start to imagine how difficult it might be to manage all of that data inside React components. Redux is a library that can help solve this problem by providing a single source of truth for our data within our application. As your team grows and as your application scales, Redux can help offset the pains that can be brought on due to complexity.

## Async Redux

By nature Redux is synchronous. Because of this, we need to apply some middleware to extend the functionality of our Redux package to allow for things like promises (which are asynchronous). This module will teach you how to set up Redux-Thunk as a middleware for Redux. You will also learn how to use the Redux-Thunk package to extend your actions so that you can consume promises.

## Context API

In your typical React application, state is passed top-down (parent to child) via props, but this can become very cumbersome quickly, especially when many components across your application require those props. However, with the introduction of React’s context API, you no longer have to pass props down from component to component - what React devs call "prop drilling." Instead, we can now store data on a context object and retrieve that data in the necessary components from the context object, not props!