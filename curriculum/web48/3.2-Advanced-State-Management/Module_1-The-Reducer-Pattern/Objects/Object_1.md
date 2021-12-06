# Objective 1 - Explain What Immutability is in Programming and Demonstrate its Benefits

## Overview

Mutable objects are objects whose state is allowed to change over time. An immutable value is an exact opposite – after it has been created, it can never change. There are some real benefits from making your state immutable. We won't go over all the benefits here, but we will talk about predictability and mutation tracking.

### Predictability

Mutation hides change, which can create (unexpected) side effects. This can lead to some nasty bugs in our code. When we enforce immutability, we can keep our application architecture and mental model simple, making it easier to reason about the application. Simply put, it is very easy to predict how the state object will change based on certain actions/events. Without immutability, our state object can be changed or updated in unpredictable ways, causing weird behavior or bugs.

### Mutation Tracking

Immutability makes it really easy to see if anything has changed. For example when we change the state in Redux, our components props will update. We can check our previous props against our new props to know what change occurred, and know how to handle those changes. If a user adds a task to the todo list, the ```TodoList``` component will update since it is receiving new props. But what if we want to run an animation on the new todo? We can't just run it on every render because it would run when the user toggles a task to complete, or deletes a task. Since Redux state management is immutable, we can track the changes that happen on the state, and only run our animation when a new task is added.

### Redux and Immutability

Redux has a single immutable state tree (referred to as the store) where all state changes are explicitly handled by dispatching actions. Dispatched actions are processed by a reducer that accepts the previous state and the action and returns the next state of your application. Thus, it is easy to predict how the state tree will change based on actions that are dispatched. Likewise, it is easy to predict which action will be dispatched based on some event or interaction. This all leads to very predictable state management.

Writing immutable code can be challenging - your JavaScript skills will really be tested here - and it may seem pretty tedious, especially since we will be building very small apps with small state trees during this sprint. Because of that, it may be pretty hard to see the real benefits of immutable code in class. However, when you start working with a large application with a huge state tree, you will quickly grow to appreciate the benefits of writing immutable code, and the extra effort it takes will seem much more worth it.

##  Follow Along

Here is a replit that will help you understand mutable code. In the next objective below, we will learn how to write immutable code.

Follow along with the exercises [here](https://replit.com/@snowkid314/understandingMutations)

## Challenge

Read this [article](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0) 

Write a paragraph or two explaining what you learned. Then, send that paragraph to your PM.



[Previous](../README.md) | [Next](./Object_2.md)
