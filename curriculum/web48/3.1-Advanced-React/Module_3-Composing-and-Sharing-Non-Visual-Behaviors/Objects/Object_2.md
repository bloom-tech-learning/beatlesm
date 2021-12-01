# Objective 2 - Apply Non-Visual Behavior (Stateful Logic) With Custom Hooks

## Overview

Custom hooks are called this because you are building the hook yourself (customizing it) to apply non-visual behavior and stateful logic throughout your components. This way, you can reuse the same hook over and over again. In addition, custom hooks follow the same naming patterns that you've already learned (i.e., prefacing the function name with use, as in useState). Thus, you can build a reusable custom hook for anything from handling controlled inputs to managing event listeners or watching for key presses.

##  Follow Along

Let's start with the same component that we evaluated in the objective above. Go ahead and look over it one more time, this time making sure to understand what the various parts are doing.

```
import React, { useState } from "react";

const DynamicTitle = () => {
  const [title, setTitle] = useState("This is a class component");
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

See how we have a ```useState``` hook, a ```handleChange``` function to update based on any changes, and a ```changeTitle``` function to change the actual title of the component when we submit the form?

Now, what happens if we need to issue state for multiple ```input``` tags? If we were to follow the lead of the patterns shown above, we would end up having to rewrite large amounts of our code for each ```useState``` call that we've invoked in order to create state for our second, third, and fourth ```input```s.

Instead, let's build out our custom hook to reuse stateful logic. In this way, we avoid repeating code unnecessarily. Read the following function and try to guess what each piece of code is doing:

```
export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChanges = updatedValue => {
    setValue(updatedValue);
  };
  return [value, setValue, handleChanges];
};
```

In this ```useInput``` custom hook function, we're taking in an ```initialValue``` and returning three new values. We pass ```initialValue``` as a parameter on the function. ```initialValue``` is then passed into the ```useState``` hook, which returns an array with our ```value``` variable and ```setValue``` function (just the same as what you've used up to this point).

Next, we have a ```handleChanges``` function that uses the ```setValue``` function to update state to a new value. Finally, we return an array from our ```useInput``` custom hook containing the ```value``` variable, the ```setValue``` function, and the ```handleChanges``` function.

Let's take a look at this custom hook when it's imported and used in a component.

```
import React, { useState } from "react";
import { useInput } from "./useInput.js";

const CustomForm = () => {
  const [username, setUsername, handleUsername] = useInput("");
  const [password, setPassword, handlePassword] = useInput("");
  const [email, setEmail, handleEmail] = useInput("");

  const resetValues = e => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    setEmail("");
  };

  return (
    <form onSubmit={resetValues}>
      <input
        className="username-text"
        id="username"
        name="username"
        onChange={e => handleUsername(e.target.value)}
        placeholder="Username"
        type="text"
        value={username}
      />
      <input
        className="password-test"
        id="password"
        name="password"
        onChange={e => handlePassword(e.target.value)}
        placeholder="Password"
        type="password"
        value={password}
      />
      <input
        className="email-text"
        id="email"
        name="email"
        onChange={e => handleEmail(e.target.value)}
        placeholder="Email"
        type="text"
        value={email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomForm;

```

Whoa. That looks crazy, right? Don't worry. We're going to dissect this whole script to figure out exactly what each part is doing.

First off, notice that we're invoking the ```useInput``` custom hook three times at the top of the component and passing in an empty string as each one's initial value:

```
const [username, setUsername, handleUsername] = useInput("");
const [password, setPassword, handlePassword] = useInput("");
const [email, setEmail, handleEmail] = useInput("");
```

Our ```useInput``` hook returns a new copy of our custom hook and state each time. Also, because array destructuring is based on positioning and not the name, we are allowed by JavaScript to name each of the three items returned from ```useInput``` in different ways. This is why we can set the first item to ```username```, the second to ```setUsername```, and the third to ```handleUsername``` while the next two ```useInput``` calls return differently-named variables and functions.

From these invocations, it now becomes easy to rig up each of our input tags in our JSX just the same as we did before. Here they are again for your reference:

```
<form onSubmit={resetValues}>
  <input
    className="username-text"
    id = "username";
    name = "username";
    onChange={e => handleUsername(e.target.value)}
    placeholder = "Username";
    type = "text";
    value={username}
  />
  <input
    className="password-test"
    id = "password";
    name = "password";
    onChange={e => handlePassword(e.target.value)}
    placeholder = "Password";
    type = "password";
    value={password}
  />
  <input
    className="email-text"
    id = "email";
    name = "email";
    onChange={e => handleEmail(e.target.value)}
    placeholder = "Email";
    type = "text";
    value={email}
  />
  <button type="submit">Submit</button>
</form>
```

Notice how we are setting our ```handleUsername```, ```handlePassword```, and ```handleEmail``` functions to process changes to the input. Remember how we returned a ```handleChanges``` function from our custom hook? Well, we've renamed them here (again, thanks to array destructuring) and are using them just the same as before. However, now, we have less code for them in our component.

The final thing you should notice is the ```resetValue``` function. When we invoke it, we use the ```setValues``` returned from each ```useInput``` (again, each one is named differently) and pass it in our reset value (in this case, an empty string). Isn't this an easy way to change your state?

Here they are again for your reference:

```
const resetValues = e => {
  e.preventDefault();
  setUsername("");
  setPassword("");
  setEmail("");
};
```

By building a custom hook, we can skip writing out all of the stateful logic for our non-visual behavior. Custom hooks produce beautiful, DRY code that is easy to read and use. You have built a reusable piece of code that makes it easy for you to import anywhere in your application and build out stateful logic in any of your components.

## Challenge

Now that you can identify custom hook logic and how you might create and use it in your components, go back to several components you've built over the last week. Then, refactor the state of those components in some forms you made to use the useInput custom hook from the component in the examples above.





[Previous](./Object_1.md) | [Next](./Object_3.md)