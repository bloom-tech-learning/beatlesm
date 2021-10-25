# <center>16 - Use Default Props</center>

[Previous page](15-pass-an-array-as-props.md) | [Next page](17-override-default-props.md)

#### [Home - React](./README.md)


React also has an option to set default props. You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary. This allows you to specify what a prop value should be if no value is explicitly provided. For example, if you declare `MyComponent.defaultProps = { location: 'San Francisco' }`, you have defined a location prop that's set to the string `San Francisco`, unless you specify otherwise. React assigns default props if props are undefined, but if you pass `null` as the value for a prop, it will remain `null`.

## instructions 

The code editor shows a `ShoppingCart` component. Define default props on this component which specify a prop `items` with a value of `0`.

## solutions 

```jsx
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};

// Change code below this line
ShoppingCart.defaultProps = {
  items: 0
}
```

[Previous page](15-pass-an-array-as-props.md) | [Next page](17-override-default-props.md)

#### [Home - React](./README.md)