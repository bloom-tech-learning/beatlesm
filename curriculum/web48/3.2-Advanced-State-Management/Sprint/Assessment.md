# 3.2 Sprint Assessment

## Question 1

####  The main purpose of a reducer function in redux is to ___.

- Describes what changes were made in the UI using action types  
- Fetch data from an API through thunks 
- specify how the state changes in response to actions sent to the store 
- Allow developers to mutate the state 

#### Answer:   (C) 

## Question 2

####  Add the missing code (```_____```) to update state if the reducer received an action.

```
const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
    switch (_____) {
        case 'INCREASE':
            return {
                ...state,
                count: state.count + 1
            }
            default:
                return state
    }
}
```

- ```state.count``` 
- ```state``` 
- ```action``` 
- ```action.type``` 

#### Answer:   (D) 

## Question 3

####  A 'thunk' is a a(n) _.

- outer function that returns an inner function
- function that returns JSON data   
- inner function that is returned by an outer function  
- function that returns an action object  

#### Answer:   (C) 

## Question 4

####  Where can state can be updated in Redux?

- Thunk 
- All of the above 
- Action Creator 
- Reducer 

#### Answer:   (D)

## Question 5

All of the following should be managed in a single state object in the Redux store except __.

-   application state
-   global state  
-   api data 
-   form state

#### Answer:   (A) 







[Previous](./Object_2.md) | [[Module 1](../../Module_1-Class-Components/README.md)
