# Objective 4 - Create a New Element, Manipulate it, and Add it to the DOM

## <span style="color:red">Overview</span>

Perhaps you've created a subscription to a chat API to give live chat functionality to your app. Or, more simply, you've added an event listener to the DOM. Both functions need to be "cleaned up" when the component is unmounting so we don't cause an unnecessary memory leak. Thankfully, the effect hook has a built-in way to handle cleanups.

To clean up an effect, we return a function from the effect hook's callback function, like this:

```
useEffect(() => {
  // We write our desired effect as before.
  console.log("The Effect Hook has run.");
  // Returning a function will tell React that you want this
  // code to run when the component unmounts or re-renders
  return () => console.log("The Effect Hook has been cleaned up.");
});
```

The returned function is called when the component is unmounting, giving us a place to clean up subscriptions and event listeners.

## Follow Along

Let's add an event listener to a function that listens for the mouse position. When the mouse moves, the event listener will update some state with the new mouse position, and the component will render the mouse position state to the DOM. Follow along in a new sandbox.

```
const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {}, []); // We only want to create the event listener once, so this effect will only fire when the component mounts

  return (
    <div>
      {position.x}:{position.y}
    </div>
  );
};
```

Now add the event listener with the event listener's callback function.

```
const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Add an event listener
    const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);
  }, []);

  return (
    <div>
      {position.x}:{position.y}
    </div>
  );
};
```

Finally, return a function from the effect hook to clean up the event listener

```
const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);

    // the function returned here will remove, or "clean up", the event listener
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return (
    <div>
      {position.x}:{position.y}
    </div>
  );
};
```

See a working example of the completed example [here](https://codesandbox.io/s/long-hill-fg79j).

## Challenge

Try this out again, but this time with the `resize` event listener. That listener will listen for the browser to change size. So if you set your state with `window.innerHeight` and `window.innerWidth`, then listen for the resizing event to happen and update your state with those same properties, you should be able to render the browser size continuously.





[Previous](./Object_3.md) | [Next](./Understanding.md)


