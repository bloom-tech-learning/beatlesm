# Objective 4 - Pass Props as Dynamic Data to a React Component

## <span style="color:red">Overview</span>

We're going to build a button component that, when clicked, returns a button and renders a new app component. The button component will have an array of colors represented by string hex values that we can use to describe our dynamic data. We'll need to pass our state variable from the app down via props to our button component. Also, we need to pass along a function that takes in an array and calls our setter function. While hooks make it easy to bring this functionality directly into any component, we'll build app and pass it for demonstrative purposes. In case you want to develop additional components, you'll be all set to go ahead and update their color as well. Let's begin.

Since we'll be using hooks, the first thing we need to is import the `useState` function to our file as named import.

```
import React, { useState } from "react";
```

Next call `useState` at the top of your app function component and set its value to a destructed array containing the state variable and its setter function, in this example, color and setColor, respectively. Set the default value to the hex value for the color 'white.' Then render our soon-to-be-built button component inside app and pass it to our state variable as props.

```
function App() {
  const [color, setColor] = useState("#FFFFFF");

  return (
    <div className="App">
      <Button color={color} />
    </div>
  );
}
```

Now let's write the function that our button will accept. We'll name this function `changeColor` and have it take an array as its parameter. In our function statement, we call setColor and pass our array parameter using bracket notation to select a random index of the data given in the array dynamically. You probably recognize most of the code, but all that matters is it evaluates random whole numbers from 0 to the max-index of the given array. Don't forget to pass the function to button component as props; otherwise, it won't be there when you try to access it.

```
function App() {
  const [color, setColor] = useState("#FFFFFF");

  const changeColor = array => {
    setColor(array[Math.floor(Math.random() * array.length)]);
  };

  return (
    <div className="App">
      <Button color={color} changeColor={changeColor} />
    </div>
  );
}
```

Alright, now all we need is the button. We'll go ahead and build it in the same file to keep things simple. Below our app component declares the button function component. While it's accessible anywhere in the file, we want to also place our array of colors inside of `Button` in case we decide to put it in its own file later. Next, return a `<button>` element and give a `style` and `onClick` attribute. Here is where we'll pass our, now dynamic, props. In the `style` tag set `background` to `props.color` to represent our state value back in App. Set the `onClick` attribute to an anonymous arrow function that returns `props.changeColor()` and pass in our colors array as an argument.

```
const Button = props => {
  const colors = [
    "#FFBAAA",
    "#27576B",
    "#D47F6A",
    "#AA7539",
    "#003D19",
    "#6E91A1",
    "#552D00"
  ];

  return (
    <button
      style={{ background: props.color, height: "50px", width: "200px" }}
      onClick={() => props.changeColor(colors)}
    >
      Click Me!
    </button>
  );
};
```
Now click away and watch the magic happen! The button is now dynamic because our setter function can set the color variable the button receives. Now, this might not be the most practical example, and you may not spend your career building buttons that randomly change color (although dark mode is pretty great), but think about the processes that led us here. We used functions, variables, and an array of data. What else could you do with these things to make changes to components? What changes could you make to the existing so that the user can cycle through the array in order instead of random color? The point is, once you have the patterns down, you're just writing JavaScript.






[Previous](./Object_3.md) | [Next](./Understanding.md)


