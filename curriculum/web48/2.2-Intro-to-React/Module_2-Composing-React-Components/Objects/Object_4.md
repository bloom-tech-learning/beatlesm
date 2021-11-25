# Objective 4 - Create a New Element, Manipulate it, and Add it to the DOM

## <span style="color:red">Overview</span>

You've already used click listeners outside of React, so we're finally going to look at something that feels familiar. To attach a click listener to a react component, we need to use this camel-casing: `onClick`. This event listener will take in a callback function. There are a couple of "gotchas" with this, but don't worry; we'll describe them below.

## Follow Along

Now that we know what the click event listener is in React let's put one on our `<div>`.

However, before we talk about the right way to do this, I want to show you a couple of wrong ways. I want to do this for two reasons. 1) It will help us think more critically about how React works, and 2) You will almost certainly make this mistake at some point, and it'll help to know what to look out for.

So again, this is wrong:

```
import React, { useState } from "react";
import { render } from "react-dom";
import "./styles.css";

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

function App() {
  const [lightOn, setLightOn] = useState(true);

  return (
    <div onClick={setLightOn} className="App">
      {lightOn === false ? <img src={white} /> : <img src={yellow} />}
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
```

This is the relevant line:

`<div onClick={setLightOn} className="App">`

The reason this is wrong is because `setLightOn` is expecting an argument. Wewps! Common mistake. Well, no problem we'll just pass it one like so:

`<div onClick={setLightOn(false)} className="App">`

Now our code looks like this:

```
import React, { useState } from "react";
import { render } from "react-dom";
import "./styles.css";

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

function App() {
  const [lightOn, setLightOn] = useState(true);

  return (
    <div onClick={setLightOn(false)} className="App">
      {lightOn === false ? <img src={white} /> : <img src={yellow} />}
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
```

Wewps. Everything broke again. What happened?

Essentially `<div onClick={setLightOn(false)} className="App">` is invoking `setLightOn(false)` over and over again and each invocation is triggering a rerender. We stumbled into an infinite loop. What we meant to write was this.

`<div onClick={ ()=> setLightOn(false) } className="App">`

See the difference?

```
// Everything is on fire
<div onClick={ setLightOn(false) } className="App">

// Everything is fine
<div onClick={ ()=> setLightOn(false) } className="App">
```

The first invokes the function every nanosecond. The second only invokes it when you click the div.

There's one last little tweak we need to make to get our application to work. Try to figure it out for yourselves before reading on.

### Make our lightbulb app work

In this case, we're passing `false` as an argument to `setLightOn` every time. That means the state will always be false, which means we're only ever going to hit one of our two conditions in our render. Instead of passing `false`, let's pass the opposite of whatever the state is.

`<div onClick={ ()=> setLightOn(!lightOn) } className="App">`

The final code looks like this:

```
import React, { useState } from "react";
import { render } from "react-dom";
import "./styles.css";

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

function App() {
  const [lightOn, setLightOn] = useState(true);

  return (
    <div onClick={() => setLightOn(!lightOn)} className="App">
      {lightOn === false ? <img src={white} /> : <img src={yellow} />}
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
```
And the result?

![changing-bulb](changing-bulb.gif)

It's glorious.

##  Challenge

Build a counter app that keeps track of how many times you click on a button and displays that count in the component.




[Previous](./Object_3.md) | [Next](./Understanding.md)


