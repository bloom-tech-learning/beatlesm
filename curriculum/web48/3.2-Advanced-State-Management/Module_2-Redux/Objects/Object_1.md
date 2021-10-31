#   Objective 1 - Explain What Redux is and the Problem it Solves

##  Overview

Redux is a predictable state management library for JavaScript applications and is the most popular state container for React applications. By now, we have discovered that building out applications using React requires a lot of forethought to give application scalability. Specifically, we have noticed some complications around the area of state management. You may have asked yourself a question like, "Which of my components should have state vs. which of my components should just be a way to present some DOM elements?"

Luckily you're not alone in this dilemma. The Facebook team who built React first noticed that managing state could become a nightmare at scale if they only used component state. So, they built a pattern and said, "everyone here at Facebook is going to write code after this pattern." This way, they could eliminate many of the problems that unwieldy state-full components could surface. That pattern was called Flux [link to docs](https://facebook.github.io/flux/docs/overview). Its primary use case was to add some stringency to the React ecosystem because React is very opinionated in how one should be designing their application and managing state.

Flux was great, but developers had a complicated implementation because the pattern presented a few other problems. Because of this (and around the same time that React was becoming so popular), [Dan Abramov](https://github.com/gaearon) built out a 'time-traveling' approach to debug an application. This method eventually became known as Redux. Dan wanted to go back in time to see when and where the state had changed in his application, and to do that, he ended up creating one of the most popular state-management libraries known to React developers today.

Redux is a small, lightweight state container for use when building JavaScript applications. Remember, Redux has nothing to do with React other than that many developers use them together. The core concepts and principles of Redux are three fold:

### The Store

> Everything that changes within your application is represented
> by a single JavaScript Object known as the store. The store
> contains our state for our application.

### Application state is Immutable

> When the application state changes, we clone the state object, modify the clone, and replace the original state with the new copy. We never mutate the original object, and we never write to our store object.

### Pure functions change our state

> Given the same input, a pure function returns the same output every time. All functions (reducers) in Redux must be pure functions. Meaning they take in some state and a description of what changes took place and return a copy of our state.

Redux is pretty simple at its core, the complications with Redux arise when we try and implement it within a React application. Usually, these issues are because there is some new syntax, and it's just a matter of time spent learning to sort them out.

## Follow Along

Watch the first four videos in [this series](https://egghead.io/lessons/react-redux-the-single-immutable-state-tree)  and try to wrap your head around how this would be useful in a React application. Then, think of your projects that you've built in React up until this point. What types of problems would Redux have solved in those projects, if any?
## Challenge

Write your thoughts on why Redux exists and at least one reason to use it and one reason not to use it.




[Previous](../README.md) | [Next](./Object_2.md)