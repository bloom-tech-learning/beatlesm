# Web48 - The React Lifecycle Check For Understanding

## Question 1

####  What are the three phases of a React component's lifecycle?

- Propagating, Rerender, Unmounting  
- Mounting, Updating, Unmounting 
- Mounting, Rendering, Unrendering 
- Updating, Propagating, Unmounting  

#### Answer:   (B)

## Question 2

####  What is NOT a purpose of the constructor function in class components?

- setting initial state 
- Fetching initial data from an API  
- No answer text provided.  
- calling `super()`  

#### Answer:   (B) 


## Question 3

####  Which of the following would cause the Updating phase to begin?

- No answer text provided. 
- state or props being updated  
- displaying a value passed through props 
- starting an API call 

#### Answer:   (B) 

- Hints: The Update Phase begins when a state value is changes or the props passed into a component change.

## Question 4

####  In which component lifecycle method would you fetch initial data?

- `componentWillUpdate` 
- `componentWillUnmount()` 
- `render()` 
- `componentDidMount()` 

#### Answer:   (D) 

- Hints: The best time to fetch initial data is when the component initially mounts.

## Question 5

####  Which of the following code performs the same function as the following:

```js
useEffect(()=>{
    setValue({key:'value')
}, []);
```

- ``` componentDidMount() { this.setState({key:'value'}); }}) ``` 
- ``` componentDidMount() { setState({key:'value'}); }}) ``` 
- ``` js componentWillUnmount() { this.setState({key:'value'}); }})  ``` 
- ``` componentDidUpdate() { setValue({key:'value'}); }}) ``` 

#### Answer:   (A) 

- Hints: componentDidMount and useEffect with [] as a parameter both execute code when the component mounts.







[Previous](./Object_3.md) | [Module 1](../../Module_1-Class-Components/README.md)
