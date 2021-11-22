# Module 3.3.1 - Testing React Check For Understanding

## Question 1

####  What is the purpose of the following code?

```
rerender(<PhoneNumber phoneNumber={"2025550113"} />);
```

- to rerender a component with new data passed as props 
- to render a phone number to the DOM  
- to update phoneNumber state 
- to set a default value for phoneNumber  

#### Answer:   (A) 

- Hints: (A)  In this example we are mimicking what would happen to a component if the phoneNumber prop were to be updated.

## Question 2

####  Mocks of async functions should be created _ of the test function


- inside a loop of the test function
- outside 
- inside
- next to the spy 

#### Answer:   (B) 

- Hints: (C) This would great multiply the number of times we would need to create a new function.
- Hints: (B)This helps to reduce the number of times we need to create a function.

## Question 3

####  HWhat is the proper syntax to create a fake version of an object for testing?

- ```mock(object, () => () => "abcde");``` 
- ```jest.mock(object, () => () => "abcde");``` 
- ```useMock(object, () => () => "abcde");``` 
- ```jest.spy(object, () => () => "abcde");``` 

#### Answer:   (B) 

- Hints: (B) jest.mock creates a mock function. You can pass in a function that returns a function that returns your mocked data to act like the function you are mocking

## Question 4

####  What is an assertion we can make to see if a function has been called?

- ```it('has been called')``` 
- ```expect(someFunction).toHaveBeenCalled()``` 
- 
```
if (toHaveBeencalled(someFunction)) === TRUE {
console.log('pass')}
``` 
- ```expect(toHaveBeenCalled, someFunction)``` 

#### Answer:   (B) 

- Hints: (B) This looks at whether or not a function has been called. It will fail the test if the function has not been called.








[Previous](./Object_3.md) | [Module 1](../../Module_1-Class-Components/README.md)
