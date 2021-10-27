# Sprint Challenge - JavaScript Fundamentals

**Access your sprint challenge here:**

[https://github.com/beatlesm/web-sprint-challenge-javascript-fundamentals](https://github.com/beatlesm/web-sprint-challenge-javascript-fundamentals)

## Interview Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read.

1. Explain the differences between `.map`, `.reduce` and `.filter` and describe a use case for each. 

    - `.map` use for converting data, which need a return statement to return a brand new array that does not manipulate the original array.
    - `.filter`use for filtering data based on some conditions, which need a return statement to return a new array that included original array elements which fit the condition. Same as `.map`, `.filter` does not manipulate the original.
    - `.reduce` used for multiplication or addition, which returns a single vale.

2. Explain the difference between a callback and a higher order function.

    - Callback Function - A function that is passed into another function as an argument. 
    - Higher Order Function - A function that receives other functions.

3. Explain what a closure is.

    - A closure is when an inner function reaches out of its scope to grab a variable defined in an outer function

4. Describe the four principles of the 'this' keyword.

    - Window binding -if we haven't given 'this' any context it will return the window, the global object in node or undefined in strict mode.
    - Implicit binding - Applies to objects with methods. When the function (method) is invoked, look the the left of the dot, that's what 'this' refers to.
    - Explicit binding - we tell a function what the 'this' keyword should be using .call, .apply or .bind. Call will immediately invoke the function and you pass in your arguments 1 by 1. Apply will immediately invoke the function and you pass in your arguments as an array. Bind you pass in your arguments 1 by 1, but it will not immediately invoke the function, instead it returns a brand new function that can be invoked later.  
    - New binding - When a function is invoked with a new keyword the this keyword inside that function is bound to the new object being constructed. When a function is invoked as a constructor function using the new keyword, this points to the new object that’s created

5. Why do we need super() in an extended class?

    - super() is used in order to call the methods of the parent class, and takes all the attributes from our parent class and copies them.

## Resources
 
 [Sprint Challenge Study Guide](https://www.notion.so/lambdaschool/Unit-1-Sprint-3-Study-Guide-033a9a00659a4ef98c12eb97e49a6110)

