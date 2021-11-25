# Module 2.1.3 - Components I Check For Understanding

## Question 1

####  Components bring together ___ in an encapsulated, reusable form.

-   markup, logic and style 
-   frontend and backend 
-   single page applications 
-   web applications and native applications 

#### Answer:   (A) 

## Question 2

####  The idea behind components is to build functions that take ___ as arguments and return ___.

-   events, side effects 
-   specifications, wireframes 
-   Correct!
-   data, HTML elements 
-   arrays, objects 

#### Answer:   (C) 

## Question 3

####  What is the value of firstButton in the following code?
```
    function buttonCreator(buttonText){
        const button = document.createElement('button');
        button.textContent = buttonText;
        button.classList.add('custom');
        button.addEventListener('click', (e) => {
            console.log('click!');
        });
        return button;
    }

    let firstButton = buttonCreator('click bait');
```
-   `<button class="custom button">click!</button>`
-   `<button class="custom">click</button>`
-   `<button class="custom">click bait</button>`
-   `<button class="click bait">click!</button>`

#### Answer:   (C) 

## Question 4

####  What is the best way to loop over an array of elements, appending them to the document body?

(Fill the gap in the code.)
```
    [elem1, elem2, elem3].\_\_\_(e => {
        document.body.appendChild(e);
    });
```

-   `filter`
-   `reduce`
-   `map`
-   `forEach`


#### Answer:   (D) 

## Question 5

####  What is the better option to build an array of elements from an array of strings? (Fill the gap in the code.)
```
    const spans = ['foo', 'bar', 'baz'].\_\_\_(str => {
        const span = document.createElement('span');
        span.textContent = str;
        return span;
    });
```

-   `filter`
-   `reduce`
-   `forEach`
-   `map`


#### Answer:   (D) 








[Previous](./Object_3.md) | [Module 1](../../Module_1-Class-Components/README.md)
