# <center>03 - Define a Redux Action</center>

[Previous page](03 - define-a-redux-action.md) | [Next page](04 - define-an-action-creator.md)

#### [Home - React](./README.md)


Since Redux is a state management framework, updating state is one of its core tasks. In Redux, all state updates are triggered by dispatching actions. An action is simply a JavaScript object that contains information about an action event that has occurred. The Redux store receives these action objects, then updates its state accordingly. Sometimes a Redux action also carries some data. For example, the action carries a username after a user logs in. While the data is optional, actions must carry a `type` property that specifies the 'type' of action that occurred.

Think of Redux actions as messengers that deliver information about events happening in your app to the Redux store. The store then conducts the business of updating state based on the action that occurred.

# --instructions--

Writing a Redux action is as simple as declaring an object with a type property. Declare an object `action` and give it a property `type` set to the string `'LOGIN'`.


# --solutions--

```js
const action = {
  type: 'LOGIN'
}
```


[Previous page](02 - get-state-from-the-redux-store.md) | [Next page](04 - define-an-action-creator.md)

#### [Home - React](./README.md)