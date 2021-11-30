# Module 3.1.1 - Class Components Check For Understanding

## Question 1

####  Which of the following sets a class component apart from a function component?

- None of the Above 
- Allows you to manage state 
- Has unique lifecycle methods 
- Renders jsx 

#### Answer:   (C) 

- Hints: (D)  All react components can render jsw to the browser
- Hints: (C)  Lifecyle methods are unique to class based components and allow for deep customication of the reactive process.

## Question 2

####  How would you update a state property called "doggos" in a class component with the value ```doggoData```?

- ```setDoggos.doggoData()``` 
- ```setDoggos(doggoData)``` 
- ```this.setState({ doggos: doggoData })``` 
- ```this.setState({ doggoData: doggos })``` 

#### Answer:   (C) 

- Hints: (D)  Not quite. In this case, ```doggos``` is the key for our slice of state, while ```doggoData``` is the value itself.
- Hints: (C)  In class components, we always need to use this.setState() to modify state.

## Question 3

####  How would you refer to a state property called "pokemon" in the class component?

- ```pokemon``` 
- ```this.state.pokemon``` 
- ```state.pokemon``` 
- ```this.pokemon``` 

#### Answer:   (B) 

- Hints: (B)  To access a class component's state, always use this.state followed by the slice of state required.

## Question 4

####  How do you reference props in a class component?

- ```props``` 
- ```this.props``` 
- ```this.state.props``` 
- ```state.props``` 

#### Answer:   (B) 

- Hints: (B)  In a class component, props is held within the this property, the class' instance reference.

## Question 5

####  How would you update a state property called "username" that is controlling a text input?

- ```setUsername(e.target.value)``` 
- ```this.setState({ username: e.target.value })``` 
- ```None of the Above ``` 
- ```this.setState({ value: e.target.username })``` 

#### Answer:   (B) 

- Hints: (A)  Remember that we are using class based components in this case, so we need to use this.setState to modify state.
- Hints: (B)  When setting state in a class component, make sure to use this.setState and pass in an object containing the key and value of the changed state.

## Question 6

####  We use **_ when saving data that will change within a component. We use _** when passing data into a component.

- ```state, props``` 
- ```props, props``` 
- ```props, state``` 
- ```state, state``` 

#### Answer:   (A) 

- Hints: (A)  The state object is where you store property values that belongs to the component. Props are values that are passed into a component from a parent.

## Question 7

####  What is the purpose of the following code?

```
 <li onClick={() => toggleCompleted(todo.id)}>
      {todo.task}
    </li>
```

- Change the value of ```todo.task``` based on ```toggleCompleted```.
- Stop the function ```toggleCompleted``` each time the user clicks on an item.  
- Sets ```toggleCompleted``` to run when the user clicks on this list item object.

#### Answer:   (C) 

- Hints: (C)  This is an example of setting an eventlistener for a DOM element.






[Previous](./Project_1.md) | [Module 1](../../Module_1-Class-Components/README.md)
