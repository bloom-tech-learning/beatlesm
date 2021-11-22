# Web48 - 3.3 Sprint Assessment

## Question 1

####  Which is the proper syntax to update an API?

- ```.update(https://lambda-school-test-apis.herokuapp.com/quotes/76)``` 
- ```.put(https://lambda-school-test-apis.herokuapp.com/quotes/76)``` 
- ```.update(https://lambda-school-test-apis.herokuapp.com/quotes/76, myQuote)``` 
- ```.put(https://lambda-school-test-apis.herokuapp.com/quotes/76, myQuote)``` 

#### Answer:   (D) 

## Question 2

####  Fill in the blank to make this function useful for handling authentication with tokens.

```
const axiosWithAuth = () => {
  return axios.create({
    _______: { authentication: token }
  });
};
```

- headers 
- body 
- status 
- bearer 

#### Answer:   (A) 

## Question 3

####  Fill in the blank to make this put method functional.

```
putMessage = quote => {
  axios
    .put(`https://lambda-school-test-apis.herokuapp.com/quotes/76`)
    .______(response => console.log(response))
    .catch(err => console.log(err));
};
```

- ```next ``` 
- ```post ``` 
- ```put ``` 
- ```then ``` 

#### Answer:   (D) 

- Hints: Again, we'd reccomend you check out the [RTL docs](https://testing-library.com/docs/ecosystem-user-event/) to learn more about user events.

## Question 4

####  What type of data does the following code initially return?
```
axios.get('http://serverlocation.com/data')
```

- JSON  
- promise 
- object  
- array 

#### Answer:   (B)

## Question 5

Where does an authorization ```<token>``` belong in a request?

-   authorization tokens should never be sent in a request 
-   body 
-   payload 
-   header

#### Answer:   (D) 

## Question 6

Which statement is true about state with react's context API?

-   State is passed down via props 
-   Data is accessed from an ancestor component's state 
-   State can be stored on a context object  
-   State is controlled without props 

#### Answer:   (C) 







[Previous](./Object_2.md) | [[Module 1](../../Module_1-Class-Components/README.md)
