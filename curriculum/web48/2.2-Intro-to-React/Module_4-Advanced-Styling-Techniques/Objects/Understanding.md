# Module 2.2.4 - Advanced Styling Techniques Check For Understanding

## Question 1

####  What's the tool that allows to utilize npm packages without explicitly installing them first?

-   node modules 
-   npm 
-   node 
-   npx 

#### Answer:   (D) 

## Question 2

####  Given the following styled component:
```
  const Button = styled.button`
  color: ${props => props.foo ? 'red' : 'pink'};
`
```
What text color does the following button have?
```
  <Button foo>click me</Button>
```

-   This code crashes 
-   Pink 
-   Red 
-   The initial color 

#### Answer:   (C) 

## Question 3

####  Given the following code:
```
  const Styled = styled.div`
    color: red;
  `

  function Foo(props) {
    return <Styled>{props.children}</Styled>
  }
```
What element is rendered to the DOM in the code below?
```
  <Foo>Hello World</Foo>
```

-   foo 
-   This code crashes 
-   span 
-   div 

#### Answer:   (D) 

## Question 4

####  Given the following code:
```
  const Styled = styled.div`
    color: ${props => props.foo ? 'red' : 'pink'};
  `

  function Foo(props) {
    return <Styled foo={props.foo}>{props.children}</Styled>
  }
```
What text color is the Hello World in the code below?
```
  <Foo foo='bar'>Hello World</Foo>
```

-   This code crashes 
-   You Answered
-   The initial color 
-   Red 
-   Pink 

#### Answer:   (C) 









[Previous](./Object_4.md) | [Module 1](../../Module_1-Class-Components/README.md)
