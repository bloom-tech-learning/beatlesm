# <center>22 - Split Your Bootstrap Row</center>

[Previous page](21-create-a-bootstrap-row.md) | [Next page](23-create-bootstrap-wells.md)

#### [Home - React](./README.md)



Now that we have a Bootstrap Row, let's split it into two columns to house our elements.

Create two `div` elements within your row, both with the class `col-xs-6`.

# --hints--

Two `div class="col-xs-6"` elements should be nested within your `div class="row"` element.

```js
assert($('div.row > div.col-xs-6').length > 1);
```

All your `div` elements should have closing tags.

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">


  </div>
</div>
```

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6"></div>
    <div class="col-xs-6"></div>
  </div>
</div>
```



[Previous page](21-create-a-bootstrap-row.md) | [Next page](23-create-bootstrap-wells.md)

#### [Home - React](./README.md)