# Module 2.3.3 - Advanced Form Management Check For Understanding

## Question 1

####  The parent element of dropdown "options" is usually __.

-   `<label>`
-   `<select>`
-   `<form>`
-   `<value>`

#### Answer:   (B) 

## Question 2

####  What is the purpose of the following code?

```
const formSchema = Yup.object().shape({
  email: Yup
    .string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  password: Yup
    .string()
    .min(6, "Passwords must be at least 6 characters long.")
    .required("Password is Required")
});
```

-   Tells Yup what values to expect 
-   Submits empty form values 
-   All of the Above 
-   Creates a form on the DOM 

#### Answer:   (A) 

## Question 3

####  Which of the following is the correct syntax for a post request?

- 
```
axios
  .post("https://yourdatabaseurlgoeshere.com");
  ``` 
- 
```
axios
  .post("https://yourdatabaseurlgoeshere.com", sentData);
``` 
- 
```
js axios .post(sentData, 
"https://yourdatabaseurlgoeshere.com");
``` 


#### Answer:   (B) 








[Previous](./Object_4.md) | [Module 1](../../Module_1-Class-Components/README.md)
