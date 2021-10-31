# <center>05 - Dispatch an Action Event</center>

[Previous page](04-define-an-action-creator.md) | [Next page](06-handle-an-action-in-the-store.md)

#### [Home - Redux](./README.md)



`dispatch` method is what you use to dispatch actions to the Redux store. Calling `store.dispatch()` and passing the value returned from an action creator sends an action back to the store.

Recall that action creators return an object with a type property that specifies the action that has occurred. Then the method dispatches an action object to the Redux store. Based on the previous challenge's example, the following lines are equivalent, and both dispatch the action of type `LOGIN`:

```js
store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });
```

# --instructions--

The Redux store in the code editor has an initialized state that's an object containing a `login` property currently set to `false`. There's also an action creator called `loginAction()` which returns an action of type `LOGIN`. Dispatch the `LOGIN` action to the Redux store by calling the `dispatch` method, and pass in the action created by `loginAction()`.

# --solutions--

```js
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

store.dispatch(loginAction());
```



[Previous page](04-define-an-action-creator.md) | [Next page](06-handle-an-action-in-the-store.md)

#### [Home - Redux](./README.md)