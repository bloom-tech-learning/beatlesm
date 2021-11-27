# Module 2.2.1 - React Components and Component States Check For Understanding

## Question 1

####  The virtual DOM in React allows developers to focus on A instead of B.

-   A: describing the UI, B: manipulating the DOM 
-   A: manipulating the UI, B: describing the DOM 
-   A: describing the DOM, B: manipulating the UI 
-   A: manipulating the DOM, B: describing the UI 

#### Answer:   (A) 

## Question 2

####  How will the following JSX render to the DOM?
```
  {
    0 ? <h1>{1}</h1> : <h1>{0}</h1>
  }
```

-   <h1></h1>
-   <h1>0</h1>
-   0 ? <h1>1</h1> : <h1>0</h1>
-   <h1>1</h1>

#### Answer:   (B) 

## Question 3

####  The state hook is a A that returns B

-   function, an initial state 
-   higher order function, a side effect 
-   function, a pair of values 
-   callback, a state object 

#### Answer:   (C) 

## Question 4

####  Data in the application that changes over time and is relevant for the UI is called ___.

-   a component 
-   state 
-   JSX 
-   attributes 

#### Answer:   (B) 

## Question 5

####  What's the value of count after three button clicks?
```
  function Count() {
    const [count, setCount] = useState(0)
    return <button onClick={() => setCount(1)}>click me</button>
  }
```

- 3
- 2
- 1
- 0

#### Answer:   (c) 








[Previous](./Object_4.md) | [Module 1](../../Module_1-Class-Components/README.md)
