# Module 2.3.2 - Form Management Check For Understanding

## Question 1

####  Which of the following is the most semantic and correct way to write a form in HTML?

-   
```
<div class = "form">
    <input type = "text" />
</div>
```
-   
```
<form>
    <label>
      Username:
      <input type="text" />
    </label>
  </form>
```
-   
```
<label>
    <form>
        Username:
        <input type="text" />
    </form>
</label>
```
-   
```
<form>
    <input />
</form>
```

#### Answer:   (B) 

## Question 2

####  If an `onChange` handler was placed on a text input field (i.e. "password") and a user typed "password", how many times would onChange detect a change to state?


-  It depends on how fast the user types  
- 1 
- 0 
- 8

#### Answer:   (D) 

## Question 3

####  A `handleChange` (ie: onChange) function receives what information as its argument?

-   An event object containing the target of the event 
-   A submit handler 
-   A callback that is invoked in the event of success 
-   The value of the form element 

#### Answer:   (A) 

## Question 4

####  What is the key difference between submitting a form in a SPA and submitting a form in a traditional web page?

-   Sending information back via POST instead of a GET request 
-   Preventing default behavior so browser does not reload 
-   The payload being sent back 
-   There is no difference 

#### Answer:   (B) 

## Question 5

####  What is the value of bar.a after the code below executes?
```
  const prop = 'a'
  const foo = { a: 1, b: 2 }
  const bar = { ...foo, [prop]: 3 }
```

- 2
- 1
- 3
- Error

#### Answer:   (C) 

## Question 6

####  What can cause a controlled input to suddenly become uncontrolled?

-   The application crashing 
-   The form being submitted 
-   The onChange prop getting a callback
-   The value prop becoming undefined

#### Answer:   (D) 








[Previous](./Object_4.md) | [Module 1](../../Module_1-Class-Components/README.md)
