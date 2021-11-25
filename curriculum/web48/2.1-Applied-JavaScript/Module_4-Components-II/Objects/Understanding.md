# Module 2.1.4 - Components II Check For Understanding

## Question 1

####  The most common way to deal with asynchronous operations in pre-ES6 JavaScript was using __.

-   generators 
-   promises 
-   async/await 
-   callbacks 

#### Answer:   (D) 

## Question 2

####  A promise is best described as ___.

-   background code 
-   an AJAX request 
-   a side effect 
-   a representation of a future value 

#### Answer:   (D) 

## Question 3

####  In the code below, `callback` can be considered the promise ___ handler.
```
    fetch('http://api.com').catch(callback)
```

-   rejection 
-   timeout 
-   settlement 
-   fulfillment 

#### Answer:   (A) 

## Question 4

####  Which HTTP method is used to add a new resource on the server?

-   `POST`
-   `OPTIONS`
-   `GET`
-   `PUT`

#### Answer:   (A) 

## Question 5

####  The axios.get method returns ___.

-   JSON data 
-   a callback 
-   the resolved response 
-   a promise 

#### Answer:   (D) 

## Question 6

####  Why does the code below fail to append any cats?
```
    let cats;
    axios.get('http://api.com/cats')
        .then(res => {
            cats = res.data;
        });
    cats.forEach(cat => document.body.append(cat));
```

-   The code wrongly assumes that `res.data` is an array
-   The `cats` variable is not visible from within the `.then` callback
-   The `forEach` loop happens before the promise returned by `axios.get` fulfills
-   The `cats` variable is declared using the `let` keyword so it can't be re-assigned

#### Answer:   (C) 








[Previous](./Object_3.md) | [Module 1](../../Module_1-Class-Components/README.md)
