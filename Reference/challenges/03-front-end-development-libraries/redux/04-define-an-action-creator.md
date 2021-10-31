# <center>04 - Define an Action Creator</center>

[Previous page](03-define-a-redux-action.md) | [Next page](05-dispatch-an-action-event.md)

#### [Home - Redux](./README.md)



After creating an action, the next step is sending the action to the Redux store so it can update its state. In Redux, you define action creators to accomplish this. An action creator is simply a JavaScript function that returns an action. In other words, action creators create objects that represent action events.

# --instructions--

Define a function named `actionCreator()` that returns the `action` object when called.


# --solutions--

```js
const action = {
  type: 'LOGIN'
}
const actionCreator = () => {
  return action;
};
```


[Previous page](03-define-a-redux-action.md) | [Next page](05-dispatch-an-action-event.md)

#### [Home - Redux](./README.md)