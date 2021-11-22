# Module 3.2.2 - Redux Check For Understanding

## Question 1

####  What problems does Redux NOT address?

- Centralized store for state management  
- Making two seperate global states for different component hierarchies.  
- Helps manage large amounts of state in complex apps 
- Predictable state management 

#### Answer:   (B) 

- Hints: (B)    Lifecyle methods are unique to class based components and allow for deep customication of the reactive process.

## Question 2

####  When you wrap your app in Redux's <Provider> component, what prop do you pass in to it?

- ```switch``` 
- ```reducer``` 
- ```store``` 
- ```action``` 

#### Answer:   (C) 

- Hints: (C)    You need a store to connect your components to for Redux to function.

## Question 3

####  What do you return out of ```mapStateToProps```?

- a new state tree with updated properties 
- None of the Above
- An object whose properties are added to the props of the connected component 
- The old state tree with properties updated with the new data  

#### Answer:   (C) 

- Hints: (A)    MapStateToProps does not modify state. That is the job of the reducer function.
- Hints: (C)    MapStateToProps should return an option to be added to props

## Question 4

####  What does an action creator return?

- an action object  
- redux store 
- switch statement 
- a reducer function 

#### Answer:   (A) 

- Hints: (A)    Action creators are just clean ways of creating action objects and passing them into the reducer.

## Question 5

####  What is the correct syntax for passing the ```initialState``` object to a reducer in Redux?

- ```const state = (reducer, action) => {initialState}``` 
- ```const reducer = (initialState = state, action) => {}``` 
- ```const reducer = (state = initialState, action) => {} ``` 
- ```const reducer = (state, action) => {}``` 

#### Answer:   (C) 

- Hints: (C)    For this any other default parameter, we set the name of the perameter we are assigning a value to to the variable that holds it's default value.








[Previous](./Object_3.md) | [Module 1](../../Module_1-Class-Components/README.md)
