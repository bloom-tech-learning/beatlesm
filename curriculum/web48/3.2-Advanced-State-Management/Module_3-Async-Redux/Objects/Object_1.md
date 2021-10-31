#   Objective 1 - Describe the Finite State Machine Pattern and Its Relationship to Building Redux Applications

##  Overview

A state machine is a mathematical model of computation.

A machine can have a finite number of states, but it can only operate in one state at a given time.

There are different types of state machines, but for building UIs (and understanding Redux), we'll concentrate on the type that has an initial state. Then, the next state is calculated based on input and the current state.

For our purposes, a state machine has:

- initial state (store)
- current state (store)
- inputs or actions (action creators) that trigger transitions (reducers) to the next state.

It helps to think in terms of states instead of transitions.

Redux is NOT a finite state machine, but the thinking in states helps our understanding of how Redux works.

A simple example would be an application with two main parts: 1) a control dashboard and 2) a display. The application can be expressed in states and actions like so:

| current state    | action (input) | new state        |
| -----------      | -----------   | -------------    |
| locked closed    | unlock        |  unlocked closed |
| unlocked closed  | lock          |  locked closed   |
| unlocked closed  | open          |  unlocked open   |
| unlocked open    | close         |  locked closed   |
| unlocked open    | lock          |  locked open     |
| locked open      | unlock        |  unlocked open   |

##  Follow Along

We are going to exercise our brain power and [read an article about state machines](https://krasimirtsonev.com/blog/article/managing-state-in-javascript-with-state-machines-stent) and how they may have some pertinence to UI and React state in particular.

## Challenge

Consider the following diagram:

graph LR A(isLoggedOut) -- HTTP Request Login --> B(pendingLoginState) B -- Success/Failure --> C(isLoggedIn) C -- HTTP Request Logout --> B B -- Success/Failure --> A

On your own: Write a paragraph that tells us what you know about the finite state machine pattern. It doesn't have to be long, just a few sentences on the subject. Submit that paragraph to your PM.



[Previous](../README.md) | [Next](./Object_2.md)