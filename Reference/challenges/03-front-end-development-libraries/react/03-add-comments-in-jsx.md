# <center>03 - Add Comments in JSX</center>

[Previous page](02-create-a-complex-jsx-element.md) | [Next page](04-render-html-elements-to-the-dom.md)

#### [Home - React](./README.md) 

JSX is a syntax that gets compiled into valid JavaScript. Sometimes, for readability, you might need to add comments to your code. Like most programming languages, JSX has its own way to do this.

To put comments inside JSX, you use the syntax `{/* */}` to wrap around the comment text.

## instructions 

The code editor has a JSX element similar to what you created in the last challenge. Add a comment somewhere within the provided `div` element, without modifying the existing `h1` or `p` elements.

## solutions 

```jsx
const JSX = (
<div>
  <h1>This is a block of JSX</h1>
  { /* this is a JSX comment */ }
  <p>Here's a subtitle</p>
</div>);
```


[Previous page](02-create-a-complex-jsx-element.md) | [Next page](04-render-html-elements-to-the-dom.md)

#### [Home - React](./README.md)