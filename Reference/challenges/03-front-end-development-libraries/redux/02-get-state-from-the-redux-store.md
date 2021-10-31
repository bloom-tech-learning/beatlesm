# <center>02 - Get State from the Redux Store</center>

[Previous page](01-create-a-redux-store.md) | [Next page](03-define-a-redux-action.md)

#### [Home - Redux](./README.md)


The Redux store object provides several methods that allow you to interact with it. For example, you can retrieve the current `state` held in the Redux store object with the `getState()` method.

# --instructions--

The code from the previous challenge is re-written more concisely in the code editor. Use `store.getState()` to retrieve the `state` from the `store`, and assign this to a new variable `currentState`.


# --solutions--

```js
const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line
const currentState = store.getState();
```


[Previous page](01-create-a-redux-store.md) | [Next page](03-define-a-redux-action.md)

#### [Home - Redux](./README.md)