# Module 3.2.1 - The Reducer Pattern Check For Understanding

## Question 1

####  Why is it important to follow immutability principles in React?

- React components will only re-render if your state updates are mutable  
- mutable updates make state management more unpredictable  
- You can only have a certain number of mutable properties in React  
- React components will only re-render if your state updates are immutable  

#### Answer:   (D) 

- Hints: (D)  React requires "fresh" data for it's re-rendering process. Practicing immutablity insures successful re-rendering.

## Question 2

####  In general, what does a reducer function do?

- aggregates values based on app settings  
- Reduce sauce for your steak dinner  
- Takes in one argument and returns two seperate items  
- takes in two arguments and returns an new, immutable item 

#### Answer:   (D) 

- Hints: (D)  In our case, the item a reducer returns is an updated state value.

## Question 3

####  When you call useReducer and pass in a reducer and an initial state object, what does it return?

- ```[props, action]``` 
- ```[action, dispatch]``` 
- ```[state, action]``` 
- ```[state, dispatch]``` 

#### Answer:   (D) 

- Hints: (D)  The state holds the current values of the state. Dispatch allows for actions to be called to routed to the reducer.

## Question 4

####  What is the required property in action objects?

- ```type``` 
- ```data``` 
- ```payload``` 
- ```dataType``` 

#### Answer:   (A) 

- Hints: (A)  As a matter of convention, type is most often used to identify the what action case we are triggering.

## Question 5

#### What ```case``` statement should be added to your reducer for adding a hobby with the following state and action objects?
```
const initialState = {
  user: {},
  friends: [],
  hobbies: []
}
```
```
{ type: "ADD_HOBBY", payload: newHobby }
```

- 
```
  case "HOBBY_UPDATER":
    return {
      ...state,
      hobbies: [...state.hobbies, action.payload]
    }
  ``` 
- 
```
case "ADD_HOBBY":
  return {
    ...state,
    hobbies: [...state.hobbies, action.payload]
  }
``` 
- 
```
case "ADD_HOBBY":
  return {
    hobbies: [...state.hobbies, action.payload]
  }
``` 
- 
```
case "ADD_HOBBY":
  return {
    hobbies: [...state.hobbies, action.payload]
  }
``` 

#### Answer:   (B) 

- Hint: (D) Always spread state when returning a state object to insure you don't accidentally delete unmodified slices of state!


- Hints: (B)  One way to go about adding a value to a list state object is through spreading another array within it and adding a new value at the end.






[Previous](./Object_3.md) | [Module 1](../../Module_1-Class-Components/README.md)
