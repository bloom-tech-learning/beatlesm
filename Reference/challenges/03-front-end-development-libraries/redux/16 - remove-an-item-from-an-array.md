<center>16 - Remove an Item from an Array </center>

[Previous page](15 - use-the-spread-operator-on-arrays.md) | [Next page](17 - copy-an-object-with-object.assign.md)

#### [Home - React](./README.md)



Time to practice removing items from an array. The spread operator can be used here as well. Other useful JavaScript methods include `slice()` and `concat()`.

# --instructions--

The reducer and action creator were modified to remove an item from an array based on the index of the item. Finish writing the reducer so a new state array is returned with the item at the specific index removed.

# --solutions--

```js
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
```



[Previous page](15 - use-the-spread-operator-on-arrays.md) | [Next page](17 - copy-an-object-with-object.assign.md)

#### [Home - React](./README.md)