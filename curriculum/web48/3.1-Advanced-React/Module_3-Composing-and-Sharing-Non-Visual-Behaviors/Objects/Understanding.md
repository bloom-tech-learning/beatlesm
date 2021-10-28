# Web48 - Module 3.1.3 - Composing and Sharing Non-Visual Behaviors Check For Understanding

## Question 1

####  Which of the following would NOT be considered "stateful logic"?

- ```const [name, setName] = useState("value")``` 
- ```const handleClear= ()=>{ setName(""); }``` 
- ```const handleClick= ()=>{ setName("new name"); })``` 
- ```<h2 className="sub-header">{name}</h2>``` 
 

#### Answer:   (D) 

- Hints: The display of state is not stateful logic.

## Question 2

####  If you had a custom hook called ```useWindowSize``` whose return value was ```[height, width]```, how would you use this hook in your component?

- ```const [height, width] = useState();``` 
- ```const [height] = useHeight(); const [width] = useWidth();``` 
- ```const [height, width] = useWindowSize();``` 
- ```const [width, height] = useWindowSize();``` 

#### Answer:   (C) 

## Question 3

####  Custom hooks should be named with "use" at the start of the name.

- True

- False

#### Answer:   (A) 

## Question 4

####  Calling a hook (custom or not) within a custom hook is an example of what?

- creating a custom hook 
- calling hooks 
- composing hooks 
- mounting

#### Answer:   (C) 

- Hints: Hooks often extend behavoirs of other hooks.





[Previous](./Object_2.md) | [Module 1](../../Module_1-Class-Components/README.md)
