# Module 3.2.3 - Async Redux Check For Understanding

## Question 1

####  A finite state machine has a(n) **_ number of possible states, and can be in _** state(s) at any given time.

- finite, all  
- infinite, one 
- finite, one 
- infinite, all  

#### Answer:   (C) 

- Hints: (B)    You're correct(B) that it can only be in one state at a time. However, there are only a finite number of states, not infinite.
- Hints: (C)    This is a mathematical model that we're applying to our React/Redux apps. OOur apps can only be in one state at a time, and only have a finite number of states.

## Question 2

####  What can a middleware function NOT do?

- Update state based on the dispatched action  
- Forward an action untouched  
- Dispatch multiple actions  
-  Stop actions from being dispatched 

#### Answer:   (A) 

- Hints: (D)    A middleware function CAN do this(D). Just like redux-thunk will stop a function that's returned from an action creator so it doesn't break the reducer.
- Hints: (A)    Middleware functions intercept actions before they are dispatched to a reducer. That means that a middleware function is not going to update the state. Only the reducer can do that.

## Question 3

####  What function do you import from redux to be able to use middleware functions in your react/redux apps?

- ```combineReducers``` 
- ```useMiddleware``` 
- ```applyMiddleware``` 
- ```updateMiddleware``` 

#### Answer:   (c) 

- Hints: (C)    We want to "apply" a middleware function to our redux apps, so we use the "applyMiddleware" function.

## Question 4

####  Which of the following best describes the term "thunk"?

- A callback function  
- An action creator function  
- A function that is returned from another function  
- A middleware function 

#### Answer:   (C) 

- Hints: (A)    This is the actual definition of the term "thunk", and it's why redux-thunk is named that. It uses this principle to give access to the dispatch function in our action creators.

## Question 5

####  What is something that redux-thunk does NOT allow you to do in action creators?

- Run asynchronous operations  
- dispatch actions to the reducer 
- Fetch data from an API  
- Update state  

#### Answer:   (D) 

- Hints: (B)    redux-thunk DOES allow us to dispatch actions to the reducer
- Hints: (D)    Only reducer functions can update the state in a redux app.








[Previous](./QA.md) | [Module 1](./Object_1.md)
