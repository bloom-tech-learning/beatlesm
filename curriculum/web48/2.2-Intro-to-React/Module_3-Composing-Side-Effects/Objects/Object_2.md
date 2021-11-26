# Objective 2 - Demonstrate How to Sync Side Effects With State and Props Using the Effect

## <span style="color:red">Overview</span>

In the examples we saw above, the effect hooks used were not synced with any particular pieces of data. Because of that, each of those hooks would run every time a piece of state or a prop changed. With a lot of side effects, this would be somewhat concerning from a performance standpoint. Or, in the worst-case scenarios, where a side effect causes the state to change, we would find ourselves in an infinite loop and eventually crash our browser 😳.

Luckily we can sync our side effects with state and props changes. We do this by passing in a dependency array as the second argument to the effect hook. Note that this argument is optional. If we don't pass in an array after the callback function, the effect will fire after every change. Let's take a look at a data fetch that sets state in our component.

```
const [user, setUser] = useState();
const [error, setError] = useState();
useEffect(() => {
  fetchUserData(props.userId)
    .then(res => setUser(res.data.user))
    .catch(err => setError(err.response.message));
});
```

When this effect fires, it calls either `setUser` or `setError`. That means that one of those pieces of state will change, which would, in turn, cause the effect to fire again, causing the state to change, firing the effect again, and placing us in an infinite loop!

If you look closely at the effect hook, you'll notice that this effect also relies on another piece of data. That is `props.userId`. As we think about the component that this hook would be in, we can imagine that we only want this effect to fire if that `userId` prop changes, right? We definitely don't want it to fire if user or error change! So, that means that we want this effect to sync up with `props.userId` only - nothing else. Let's go ahead and add a dependency array argument with that particular dependency in the array.

```
const [user, setUser] = useState();
const [error, setError] = useState();
useEffect(() => {
  fetchUserData(props.userId)
    .then(res => setUser(res.data.user))
    .catch(err => setError(err.response.message));
}, [props.userId]); // Dependency array added
```

Now this effect will fire when and only when `props.userId` changes!

But wait, wouldn't we want this effect to fire when the component first mounts? Yes, definitely. A dependency array added to the effect hook will fire when the component mounts and only when the given dependencies change.

This brings up one last thought. How can we add an effect to our component that we only want to fire off once as the component mounts and not any other times during the component's life? Essentially, we would want to tell the effect hook not to synchronize that particular effect with any state/props changes, right? We can solve this by adding the dependency array to the effect hook but leaving it blank. So let's set up an effect hook that runs a data fetch side effect that we don't want to sync with any state/props changes.

```
const [data, setData] = useState();
const [error, setError] = useState();
useEffect(() => {
  getInitialData()
    .then(res => setData(res.data))
    .catch(err => setError(err.response));
}, []);
```

## Summary

Using a dependency array as the second argument in the effect hook, we can tell which state or props the effect should be synced. This is a handy guide to use as you begin the build the mental model for this principle:

>… the question is "with which state and props does this effect synchronize with"

```
useEffect(fn); // all state and props
useEffect(fn, []); // no state or props
useEffect(fn, [these, states, props]);
```




[Previous](./Object_1.md) | [Next](./Object_3.md)