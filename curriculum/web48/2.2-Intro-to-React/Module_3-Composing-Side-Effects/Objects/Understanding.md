# Module 2.2.3 - Composing Side Effects Check For Understanding

## Question 1

####  Fetching data from an API, timers, logging, and manually manipulating the DOM are all examples of ___.

-   closures 
-   promises 
-   side effects 
-   props 

#### Answer:   (C) 

## Question 2

####  What's the React hook used to schedule side effects after updates to the DOM?

-   useReducer 
-   useState 
-   useParams 
-   useEffect 

#### Answer:   (D) 

## Question 3

####  When do we see 'foo' logged to the console?
```
  useEffect(() => {
    console.log('foo')
  }, [bar, baz])
```

-   Right before the component unmounts 
-   After renders caused by a change in `bar` AND a change in `baz`
-   Never 
-   After renders caused by a change in `bar` OR a change in `baz`

#### Answer:   (D) 

## Question 4

####  When is the network request triggered in the code below?
```
  useEffect(() => {
    axios.get('https://api.com/cats/' + id)
      .then(res => setCats(res.data))
  }, [id])
```

-   After renders caused by changes in id
-   Never 
-   After the first render of the component 
-   Before the first update of the DOM by React 

#### Answer:   (A) 

## Question 5

####  What should we do inside the callback?
```
  useEffect(() => {
    document.body.addEventListener('click', listener)
    return () => {
      // ?
    }
  }, [])
```

-   Cancel pending promises 
-   Remove the event listener 
-   It doesn't matter
-   Log a warning to the console 

#### Answer:   (B) 







[Previous](./Object_4.md) | [Module 1](../../Module_1-Class-Components/README.md)
