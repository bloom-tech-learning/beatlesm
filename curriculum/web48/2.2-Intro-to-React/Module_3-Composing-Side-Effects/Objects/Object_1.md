#   Objective 1 - Explain What Side Effects are in React Components

## <span style="color:red">Overview</span>

What are "side effects"? A side effect is anything that affects something outside the scope of the function being executed. Fetching data from an API, timers, logging, and manually manipulating the DOM are all examples of side effects. There are two categories of side effects in React components - those that don't require cleanup and those that do require cleanup. We will discuss effects that require cleanup later in this module.

A React component without side effects is called a pure component. A component is considered pure if it always renders the same output for the same state and props. Similarly, a side effect can cause a component to return a different output for the same state and props. Pure components don't have any side effects. React offers us tools for managing side effects so we can avoid bugs and inconsistencies in our app. The effect hook (`useEffect()`) is one of those.

### The Effect Hook

The effect hook tells React that a component needs to run, or execute, some side effect. This hook takes in two parameters. The first is a callback function where we can run the side effect. Let's take a look at an effect hook that is handling a `console.log` side effect:

```
useEffect(() => {
  console.log("Hello from the effect hook!");
});
```

Used inside the component, puts the effect function inside the component's function scope. This gives it access to state, props, and local variables. So we could also do something like this:

```
useEffect(() => {
  console.log(props.someProp, stateValueOne);
});
```

Here are some basic examples of other common side effects we might see in React Components:

```
// Making API calls
const [user, setUser] = useState();
const [error, setError] = useState();
useEffect(() => {
  fetchUserData(userId)
    .then(res => setUser(res.data.user))
    .catch(err => setError(err.response.message));
});

// Manipulating the DOM
const [count, setCount] = useState();
useEffect(() => {
  document.title = `Count is: ${count}`;
});

```

```
useEffect(() => {
  console.log("The component has mounted.");
}, []);
```







[Previous](../README.md) | [Next](./Object_2.md)