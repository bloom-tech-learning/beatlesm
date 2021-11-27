# Module 2.2.2 - Composing React Components Check For Understanding

## Question 1

####  What is the proper way to import the module a from `./directory/fileName`?

-   `import [ a ] from ./directory/fileName`
-   `from ./directory/fileName import a`
-   `var location = "./directory/fileName" location.import(a)`
-   `import { a } from './directory/fileName'`

#### Answer:   (D) 

## Question 2

####  Fill out the gaps in the code below:
```
  function Person(props) {
    const { name } = _A_
    return <div>I am {name}</div>
  }
  function Container() {
    return <Person _B_=_C_ />
  }
```

-   A: props.name, B: name, C: "Jane"
-   A: props.name, B: prop, C: "Jane"
-   A: "Jane", B: prop, C: name
-   A: props, B: name, C: "Jane"

#### Answer:   (D) 

## Question 3

####  Stateless components receive A through B.

-   A: children, C: application state 
-   A: props, C: application state 
-   A: application state, B: props 
-   A: state, C: the shadow DOM 

#### Answer:   (C) 

## Question 4

####  What renders to the DOM from the code below?
```
  function App() {
    const [savings] = useState(100)
    return <>
      <Child allowance={savings / 2} />
      <Child allowance={savings / 2} />
    </>
  }
  function Child({ allowance }) {
    return <div>{allowance}</div>
  }
  ReactDOM.render(<App />, root)
```

-   `<div><div>50 25</div></div>`
-   `Nothing as the code inside Child throws an exception`
-   `<div>50</div><div>25</div>`
-   `<div>50</div><div>50</div>`

#### Answer:   (D) 

## Question 5

####  What's the value of points after three button clicks?
```
  function App() {
    const [points, setPoints] = useState(100)
    return <Child action={amount => setPoints(points + amount)} />
  }
  function Child(props) {
    return <button onClick={() => props.action(2)}>do it</button>
  }
  ReactDOM.render(<App />, root)
```

-   Nothing as the code inside Child throws an exception
-   103 
-   6 
-   106 

#### Answer:   (D) 








[Previous](./Object_4.md) | [Module 1](../../Module_1-Class-Components/README.md)
