# <center>20 - House our page within a Bootstrap container-fluid div</center>

[Previous page](19-create-a-bootstrap-headline.md) | [Next page](21-create-a-bootstrap-row.md)

#### [Home - React](./README.md)



Now let's make sure all the content on your page is mobile-responsive.

Let's nest your `h3` element within a `div` element with the class `container-fluid`.

# --hints--

Your `div` element should have the class `container-fluid`.

```js
assert($('div').hasClass('container-fluid'));
```

Each of your `div` elements should have closing tags.

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

Your `h3` element should be nested inside a `div` element.

```js
assert($('div').children('h3').length > 0);
```

# --seed--

## --seed-contents--

```html
<h3 class="text-primary text-center">jQuery Playground</h3>
```

# --solutions--

```html
<div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
</div>
```



[Previous page](19-create-a-bootstrap-headline.md) | [Next page](21-create-a-bootstrap-row.md)

#### [Home - React](./README.md)