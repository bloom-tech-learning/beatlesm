# Objective 2 - Use the onChange Handler to Capture Input Values

## <span style="color:red">Overview</span>

So now that we've got a way for users to input text, the next step is to capture that value. In a regular DOM environment, each change to this input would create a "change event" that the DOM API would expose to us, but remember: React operates out of a virtual DOM. So when React is deciding what to render to the page, the DOM doesn't even exist yet. That's why the React team created "synthetic events," which effectively simulate DOM events inside the virtual DOM. We don't need to worry about the details of synthetic events at the moment. They're designed to work as much like their native DOM counterparts as possible, and for the vast majority of cases, they do, but you should at least be aware of their existence.

The `onChange` handler on an input captures the typing `event`. The event object stores the new value from the input. We get access to the typing event from `onChange`, because the event holds the value of the input. Because of this, we have access to what our user's input from the event object! This pathway is vital if we want to manage input values in react state, rather than through the DOM.

Let's take a look at `onChange`. As we've seen with other event handlers, we will pass in a callback function to `onChange`. This can be done inline or with a function defined elsewhere (usually in the component). Notice that the event object gets passed into the callback function as a parameter.

```
// inline
<input onChange={event => console.log(event)} />

// function defined somewhere else
const logEvent = event => {
  console.log(event);
}

...

<input onChange={logEvent} />
```
If we use the `onChange` synthetic event listener on our `<input>` tag, we'll be able to capture its value. Then we'll set that value to a state variable. We can access the value like this - `event.target.value`.

```
const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const changeHandler = event => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <form>
        <label>
          Favorite Ice Cream:
          <input type="text" onChange={changeHandler} />
        </label>
      </form>
    </div>
  );
};
```
Now our React state will stay in sync with the input data!

## Follow Along

### Handling Input Changes

We will continue our login form by adding the onChange handler on the input.

```
import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      {console.log(name)}
      <form>
        <label>
          Username:
          <input type="text" onChange={event => setName(event.target.value)} />
        </label>
      </form>
    </div>
  );
}

export default App;
```

This isn't so different from vanilla JavaScript. First, we inform our `input` tag to listen for changes, creating a synthetic event. We then pass the value of that event to our state setter and capture it in our `name` variable.

This isn't a bad start, but writing our function inline like this could get messy if we ever wanted to execute more than one statement per change (firing off an animation, for example). Let's build a custom function to "handle" this for us and tuck our state setter into that.

```
import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const handleChange = event => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      {console.log(name)}
      <form>
        <label>
          Username:
          <input type="text" onChange={event => handleChange(event)} />
        </label>
      </form>
    </div>
  );
}

export default App;
```

This might seem like a little extra work but notice that within the body of our  `handleChange`  function, we can now execute as many lines of code as we want without cluttering up our markup. Getting used to this pattern will save you some headaches later on.






[Previous](./Object_1.md) | [Next](./Object_3.md)