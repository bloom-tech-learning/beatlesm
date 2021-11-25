# Module 2.1.1 - DOM I Check For Understanding

## Question 1

####  What would the output be for the following code?
```
console.log(document);
```

-  the document body 
- the document head 
- he doctype declaration 
- the entire HTML document 

#### Answer:   (D) 

- Hints: (D)  The code shown would output the entire HTML document.

## Question 2

####  How would you add an src attribute to the empty img element below?

- ```element.getAttribute('http://www.cats.com/image.jpg')``` 
- ```element.src() = ('src', 'http://www.cats.com/image.jpg')``` 
- ```element.setAttribute('src', 'http://www.cats.com/image.jpg')``` 
- ```element.src('src', 'http://www.cats.com/image.jpg')``` 

#### Answer:   (C) 

- Hints: (C)  The setAttribute() method adds the specified attribute to an element, and gives it the specified value.

## Question 3

####  What would result if we applied image.classList.toggle('.bar') to the code below?
```
<img id="image" src="cat.jpg" class="foo" />
```

- ```<img id="image" src="cat.jpg" class="bar" />``` 
- ```<img id="image" src="cat.jpg" class=".bar" />``` 
- ```<img id="image" src="cat.jpg" class="foo bar" />``` 
- ```<img id="image" src="cat.jpg" class="foo .bar" />``` 

#### Answer:   (B) 

- Hints: (C)  `class="foo bar"` is missing a period.
- Hints: (D)  The terms foobar, foo, bar, and others are used as metasyntactic variables and placeholder names in computer programming or computer-related documentation. So ```.bar``` is added to the class .

## Question 4

####  How would you add all of the fruits in this array to the body of the page?

```
const fruits = ["apples", "oranges", "lemons", "limes"];
```

- 
```
fruits.forEach(fruit => {
        document.body.textContent = fruit;
    });
``` 
- 
```
fruits.forEach(fruit => {
        const span = document.createElement('span');
        span.textContent = fruit;
        document.body.appendChild(fruit);
    });
``` 
- 
```
fruits.forEach(fruit => {
        document.body.appendChild(fruit);
    });
``` 
- 
```
 fruits.forEach(fruit => {
        const span = document.createElement('span');
        span.textContent = fruit;
        document.body.appendChild(span);
    });
``` 

#### Answer:   (D) 

- Hints: (C)  The document.createElement is missing
- Hints: (D)  

## Question 5

####  True or false: document.createElement adds a new element to the DOM

- FALSE
- TRUE

#### Answer:   (A) 

- Hints: (B)  In an HTML document, the document.createElement() method creates the HTML element specified by tagName
- Hints: (A)  In an HTML document, the document.createElement() method creates the HTML element specified by tagName






[Previous](./Object_3.md) | [Module 1](../../Module_1-Class-Components/README.md)
