# <center>21 - Create a Bootstrap Row</center>

[Previous page](20-house-our-page-within-a-bootstrap-container-fluid-div.md) | [Next page](22-split-your-bootstrap-row.md)

#### [Home - React](./README.md)



Now we'll create a Bootstrap row for our inline elements.

Create a `div` element below the `h3` tag, with a class of `row`.

# --hints--

You should add a `div` element below your `h3` element.

```js
assert(
  $('div').length > 1 &&
    $('div.row h3.text-primary').length == 0 &&
    $('div.row + h3.text-primary').length == 0 &&
    $('h3.text-primary + div.row').length > 0
);
```

Your `div` element should have the class `row`

```js
assert($('div').hasClass('row'));
```

Your `row div` should be nested inside the `container-fluid div`

```js
assert($('div.container-fluid div.row').length > 0);
```

Your `div` element should have a closing tag.

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

</div>
```

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row"></div>
</div>
```



[Previous page](20-house-our-page-within-a-bootstrap-container-fluid-div.md) | [Next page](22-split-your-bootstrap-row.md)

#### [Home - React](./README.md)