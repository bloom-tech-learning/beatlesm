# Objective 3 - Compose Hooks in a Custom Hook to Extend Multiple Pieces of Stateful Logic

## Overview

Just as we can compose functions in vanilla JavaScript and components in React to create new functionality, we can extend our stateful logic by combining several hooks in a powerful, single custom hook. In addition, this compositional ability allows us to build out interesting abilities by combining various hooks in our application.

We can develop this complexity using multiple hooks inside a single custom hook. We've done this already when we called ```useState``` inside ```useInput```. Pretty cool! Now imagine writing several custom hooks and combining all of that logic into a single custom hook to use in your components. The possibilities are dizzying! And amazing! Let's try it out by expanding the ```useInput``` custom hook we've already built.

## Follow Along

We need to start by building out a second custom hook. Later on, we'll combine it with the ```useInput``` custom hook from the previous objective to achieve a more compelling hook with multiple pieces of stateful logic.

First, we'll implement the new hook that we will call ```useLocalStorage```:

```
import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};
```

Let's walk through what we're doing here. First, we pass in a key-value (like: "input1," "input2" ) and an ```initialValue```. These two parameters (key and value) are used in the ```useState``` hook call and used immediately inside our custom hooks. Instead of just passing in an initial value to this ```useState``` hook, we are using an anonymous arrow function as a callback to do two things:

1.  Check if the ```window.localStorage``` has a specific item (retrieved by key) in it
1.  Return that item from local storage if it exists or the initialValue otherwise

Because of this, our hook can now successfully check to see if a specific state item exists in ```localStorage```, and it can use that item if it exists instead of the provided ```initialValue```. Then, we also have a ```setValue``` function that takes a ```value``` as a parameter, sets it to the current ```storedValue``` by using the ```setStoredValue``` provided by ```useState```, and sets it ```localStorage```. As our state is now stored, our custom hook will check here on refresh to see if the state exists.

Now that we have a custom hook for controlling value placement (and updates) in ```localStorage```, we can combine it with ```useInput``` to create powerful logic. Take a look at the completed code, and then we'll talk about what it's doing:

```
import { useState } from "react";

export const useInput = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);
  const handleChanges = updatedValue => {
    setValue(updatedValue);
  };
  return [value, setValue, handleChanges];
};

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};

```

While our ```useLocalStorage``` hook has stayed the same, our ```useInput``` custom hook has some nice upgrades going on. Instead of implementing ```useState``` from React as before, we're now using ```useLocalStorage```. Furthermore, we're also taking in two parameters instead of one - ```key``` and ```initialValue```. These are then passed directly into the ```useLocalStorage``` hook. Immediately, the hook sets about implementing special logic with the variables as described above. This returns to our ```useInput``` custom hook with either a value from ```localStorage``` or our initialValue, and our ```useInput``` custom hook then returns a ```value```, ```setValue``` function, and a ```handleChanges``` function in an array just the same as it did before.

Now when we call the ```useInput``` hook in a component to control inputs dynamically, we just need to pass in a unique key for each input to keep track of it in localStorage. Something like this:

```
const [username, setUsername, handleUsername] = useInput("userName", "");
const [password, setPassword, handlePassword] = useInput("password", "");
const [email, setEmail, handleEmail] = useInput("email", "");
```

Although this isn't something you will often do (storing input values in localStorage), this setup is quite powerful, and it effectively demonstrates how composable hooks can be; by combining the stateful logic of multiple custom hooks, you can compose a really nice custom hook with advanced stateful logic.

One final thing to note is that we can employ the ```useLocalStorage``` custom hook in other places now as well. So, not only do we have an extra-powerful ```useInput``` created by composing multiple hooks together, we also have another custom hook available to us anytime we want to persist data in localStorage.

## Challenge

Try to think of instances where you could compose custom hooks together, particularly with the new useLocalStorage hook you learned above. Be as creative as possible in your implementations.



[Previous](./Object_2.md) | [Next](./Understanding.md)
