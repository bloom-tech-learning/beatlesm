# Module 3.2.4 - Context API Check For Understanding

## Question 1

####  What caution does the React docs give when using the context API?

- Context API adds too many layers of components in the browser  
- Context API causes you to use prop drilling  
- Using the context API makes passing data to children components harder  
- Using the context API makes component reuse harder  

#### Answer:   (D) 

- Hints: (B) This is a benefit of context, not something we are warned against.
- Hints: (D) This happens because in order to reuse a component in a component tree outside of the context provider, you'd have to move your provider and the data to a higher component.

## Question 2

####  What is the syntax to create a context object?

- ```const SampleContext = createContext();``` 
- ```useContext(const SampleContext = createContext)``` 
- ```const Context = useContext();``` 
- ```const SampleContext = createContextObject()``` 

#### Answer:   (A) 

- Hints: (A) The `createContext` is the React function that we call to create a context object.

## Question 3

####  To what prop on the Provider component do you pass your data?

- ```value``` 
- ```state``` 
- ```action``` 
- ```data``` 

#### Answer:   (A) 

- Hints: (B) We actually want to use the ```value``` prop.
- Hints: (A) This is the prop we use to pass data to the Provider component so we can access that data in its children components

## Question 4

####  What is the pattern called that we use to cosume context data with the Consumer component?

- custom hooks
- context hook  
- Context Consumer pattern 
- render props 

#### Answer:   (D) 

- Hints: (B) The hook pattern is the other pattern. This pattern is the render prop pattern.
- Hints: (D) This is an old pattern that solved a problem in React that is now solved by hooks. While you won't see it often, it's good to know what it is for the times you may see it in a React app.

## Question 5

####  What does the ```useContext``` hook return when called?

- Any state that is managed by the Provider's component 
- Whatever you passed into the Provider for that context object.  
- a function to update data from a seperate store.  
- A store that is seperate from the component tree structure  

#### Answer:   (C) 

- Hints: (A) Almost, but only data passed into the Provider will be returned by useContext.
- Hints: (C) The data we pass to a provider can be a variable, object, array, or any JavaScript type. The useContext hook will return whatever is passed into the Provider.








[Previous](./Object_3.md) | [Module 1](../../Module_1-Class-Components/README.md)
