# Objective 3 - Explain What State is in Web Applications and Demonstrate How to Make a React Component Stateful

## <span style="color:red">Overview</span>

You already know this, though you may not realize it. If you're at a soccer game, and each team has three goals, you might say that the "state" of the game is "tied." A traffic light has three possible states: red, yellow, and green. Similarly, our applications also have states. If you have a to-do app, it might be said to have a state of "three to-dos, none of which are completed." Upon completing one of the to-dos, you've changed the application's state.

To see what this means concretely, let's start with the simplest state possible: a boolean. Next, we'll create an app that displays a light. The light will either be on or off.

##  Follow Along

Let's get some code on the page.

```
import React from "react";
import { render } from "react-dom";
import "./styles.css";

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

function App() {
  return (
    <div className="App">
      <img src={white} />
      <img src={yellow} />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
```

This doesn't quite get us where we want to go.

![same-bulbs](same-bulbs.png)

Our application has the assets we want, but we only want one lightbulb image to show at a time. To achieve this, we're going to have to keep track of its state.

```
import React, {useState} from "react";
import { render } from "react-dom";
import "./styles.css";

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

function App() {

  const [lightOn, setLightOn ] = useState();

  return (
    <div className="App">
      <img src={white} />
      <img src={yellow} />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
```

A couple of things have changed here. First, we're importing the `useState` hook from the React library so we can use it.

```
import React, {useState} from "react";
```

Second, we've got this odd bit of syntax.

```
const [lightOn, setLightOn ] = useState();
```
This is the `useState` hook, and it's fundamental to understanding modern React. If its syntax looks strange to you, you're not alone, but we'll get back to why it looks like that later. For now, what you should understand is that while the line may look strange, all it's doing is declaring two variables the way you normally might. For now, it's okay to imagine that it's doing something close to this:

```
let lightOn;
let setLightOn = (value) => {lightOn = value;};
```
(Note: ignore the discrepancy between the use of `const`in the hook and `let` in my example. It's not important for now.)

The sharp-eyed among you might have noticed that `lightOn` doesn't have a value.
But as you can see, if we were to invoke `setLightOn` and pass a value in as an argument, we can change the value of `lightOn`.

```
setLightOn("sup");
console.log(lightOn); // "sup"
```

But what if we don't want to have to assign a value to `lightOn` right away? What if we want that variable to be initialized with a value from the get-go? We can do that.

Let's change:

```
const [lightOn, setLightOn ] = useState();
```

To:

```
const [lightOn, setLightOn ] = useState(false);
```

Now it's sort of like we're saying this:

```
let lightOn = false;
let setLightOn = (value) => {lightOn = value;};
```

In summation the `useState` hook `const [lightOn, setLightOn ] = useState(false);` works like this:

`lightOn` is a variable the value of which is whatever we passed in to `useState`. In this case, it's value is the boolean primitive `false`. `setLightOn` is a function that will change the value of `lightOn`. We'll also note that I could have named `lightOn` and `setLightOn` whatever I wanted. I could've named them `peanutButter` and `jelly` if I wanted but that would've made it pretty confusing for someone reading my code to understand what they do.

### Recap State

Okay, so what have we learned? We know what state is in an application. We also know how to keep track of a state variable from within a component, we know how to initialize it with a value, and we know how to change that value. What's missing?

Well, for one, we still have two light bulbs. We have a state variable initialized and a way to change it, but our light bulbs don't know it exists. We have to make our light bulbs aware of what the state is in some way to know what to do when it changes. We're going to need to learn a critically important pattern to make that happen.

### What is Conditional Rendering?

Conditional rendering is just a fancy name for a very common pattern in React. We don't want to see both lightbulbs at once. We only want to render one or the other based on some condition. In this case, if the `lightOn` boolean is set to `false` we want to see the white lightbulb. If it's set to true we want to see the yellow one. This is a straightforward use-case for the ternary operator in JavaScript.

```
import React, { useState } from "react";
import { render } from "react-dom";
import "./styles.css";

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

function App() {
  const [lightOn, setLightOn] = useState(false);

  return (
    <div className="App">
      {lightOn === false ? <img src={white} /> : <img src={yellow} />}
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
```

This is the only part that changed:
```
    <div className="App">
      {lightOn === false ? <img src={white} /> : <img src={yellow} />}
    </div>
```

A ternary operator acts as a single line `if/else` statment. This line:

`{lightOn === false ? <img src={white} /> : <img src={yellow} />}`

It's saying "Is the `lightOn` state variable set to `false`? If so render `<img src={white} />`, otherwise render `<img src={yellow} />`

Remember this pattern, you'll use it a lot.

So what's the result of this code? Well, let's find out.

![dar-bulb](dark-bulb.png)

Progress. It's only showing the white bulb. What if we want it to show the yellow one now? Well, remember, our ternary operator is conditionally rendering one lightbulb or the other. It's being told to show the white one if `lightOn` is set to false, and to show the yellow one if it's `true`. What happens if we hard code the initial value of `lightOn` to true?

`const [lightOn, setLightOn] = useState(true);`

The result?

![lit-bulb](lit-bulb.png)

Victory is nearly ours. We have just set up a condition on which to render one bulb or the other. That condition was based on our application's state. When we forced the application's state to change, what appeared on the page reacted to that change. That's what React is all about. Your state changes, and your application reacts.

The last step is figuring out how to change the state.

Remember our hook from earlier?

`const [lightOn, setLightOn] = useState(false);`

You'll recall that `setLightOn` is a function that can change the value of `lightOn`. Now we just have to find a way to invoke this function.

## Challenge

Build a component that holds a `person` object in state. Display the person's data in the component.



[Previous](./Object_2.md) | [Next](./Object_4.md)


