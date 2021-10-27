#   Objective 1 - Explain Class Components, and Use a Class Component to Render Some State Data to the DOM

##  Overview

Stateful logic is logic that is built into a component. For example, it can be a function that handles a click event, a function that sets a toggle state, or a function that formats data before it gets displayed. Usually, this kind of logic deals with state in the component. Thus the moniker "stateful logic."

## Follow Along

Look at this component. Can you spot the stateful logic built into it?

```
import React, { useState } from "react";

const DynamicTitle = () => {
  const [title, setTitle] = useState("Hooks are so fun!");
  const [inputText, setInputText] = useState("");

  const handleChanges = e => {
    setInputText(e.target.value);
  };

  const changeTitle = e => {
    e.preventDefault();
    setTitle(inputText);
    setInputText("");
  };

  return (
    <div className="Wrapper">
      <h1 className="Title">{title}</h1>
      <form onSubmit={changeTitle}>
        <div className="Input">
          <input
            className="Input-text"
            id="input"
            name="inputText"
            onChange={handleChanges}
            placeholder="Create new title"
            type="text"
            value={inputText}
          />
          <label htmlFor="input" className="Input-label">
            New title
          </label>
        </div>
      </form>
    </div>
  );
};

export default DynamicTitle;
```

You are probably looking at the two functions -  ```handleChanges``` and ```changeTitle```. If so, that is correct! And we can probably also count the ```title``` and ```inputText``` state in there as well. Those are all great examples of stateful logic. And really, the sky's the limit on what could be considered stateful logic in a React component.

## Challenge

Now that you can identify stateful logic, go through a few of the React components you've built this week. Try to point out examples of different stateful logic. How many different examples did you find?

[Previous](../README.md) | [Next](./Object_2.md)