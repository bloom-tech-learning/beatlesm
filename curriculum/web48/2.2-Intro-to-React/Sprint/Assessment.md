# Web48 - 2.2 Sprint Assessment

## Question 1

####  Which is one advantage of React over Vanilla JS?

- components 
- array methods 
- variable scoping 
- functions 

#### Answer:   (A) 

## Question 2

####  Assuming 'reptiles' is an array, which option most closely depicts how this would render on a page?
```
<ol>
  {reptiles.map(reptile => (
    <li key={reptile}>{reptile}</li>
  ))}
</ol>
```
- 
```
1.  lizard
2.  snake
3.  turtle
```
- 
```
.
. lizard
. snake
. turtle
```
-  `lizard, snake, turtle `
- 
```
. lizard
. snake
. turtle
```

#### Answer:   (A) 

## Question 3

####  When will the following hook run?
```
  useEffect(() => {
    document.title = `You clicked ${count}
```

All of the above 
When the component first mounts 
When the component receives new props or state 
When the component re-renders 

#### Answer:   (A) 

## Question 4

####  True or false: Hooks are JavaScript functions.

- TRUE
- FALSE 

#### Answer:   (A)

## Question 5

####  Why include event.preventDefault(); in a form script?
```
 const handleSubmit = event => {
    event.preventDefault();
    console.log(name);
  };
```

- The form submission causes default refresh 
- The default when a user types is to console.log not save data 
- This isn't necessary
- The window default will submit constantly 

#### Answer:   (A) 








[Previous](./Object_2.md) | [[Module 1](../../Module_1-Class-Components/README.md)
