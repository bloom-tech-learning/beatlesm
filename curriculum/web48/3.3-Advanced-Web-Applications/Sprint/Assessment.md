# Web48 - 3.1 Sprint Assessment

## Question 1

####  constructor methods are executed in which phase of Module 2 - The React Lifecycle?

- ```Updating``` 
- ```Rendering``` 
- ```Mouting``` 
- ```Unmounting``` 

#### Answer:   (C) 

## Question 2

####  Fill in the blank for the method that belongs in the empty box.

![React_life_Cycle](./b0HTXNp.png)

- ```componentWillChange``` 
- ```componentDidUpdate``` 
- ```componentDidChange``` 
- ```componentWillUpdate``` 

#### Answer:   (B) 

## Question 3

####  componentDidMount will be invoked _ render.

- alongside 
- before  
- with no regard to 
- after 

#### Answer:   (D) 

- Hints: Again, we'd reccomend you check out the [RTL docs](https://testing-library.com/docs/ecosystem-user-event/) to learn more about user events.

## Question 4

####  Fill in the missing code (________) to use the custom hook in a form component:
```
const useForm = initialValue => {
  const [values, setValues] = useState(initialValue)
  const handleChanges = event => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }
  return [
    ________,
    values
  ]
};

// in the form component
const [________, values] = useForm(initialValue);
```

- ```useForm``` 
- ```changes``` 
- ```event.target.value``` 
- ```handleChanges``` 

#### Answer:   (D)

## Question 5

What is the purpose of the following code in testing?
```
test('renders without crashing', () => {
render(
hello world
);
});
```

-   Test a button click 
-   render a span on the DOM 
-   run a unit test on an isolated function 
-   render a react element to initialize tests

#### Answer:   (D) 







[Previous](./Object_2.md) | [[Module 1](../../Module_1-Class-Components/README.md)
