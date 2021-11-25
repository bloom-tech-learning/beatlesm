# Objective 3 -Use Different Properties and Methods to Manipulate a Selected Element

You can access the example in this video [here](https://codesandbox.io/s/k0q2wwyj2o)

## <span style="color:red">Overview</span>

Now that we have access to element(s), we can manipulate them and change their characteristics from the original HTML.

After we have captured our element (eg. ```const el = document.querySelector('#idName');``` we can use that instance of the element we selected to access and assign values to properties natively contained on it. Once again, there are dozens of properties and methods given to us on each element. Here are a few of the most commonly used properties:

### .textContent
- Gets and sets the text of an element, essentially whatever text is between the open and closing tags of an HTML element.
- Can use the assignment operator ( = ) to reset the text of an element.
- Setting this property on a node removes all of its children and replaces them with the new single text node.
- ```<div>Something Here</div>```
- ```element.textContent = 'Something New```;

### .setAttribute() (or .{attr})
- This method (or property) is used as a way to set or reassign an attribute on the element.
- `.setAttribute()` is a method that takes two arguments, the attribute to set, and the value to set to that attribute.
- eg: `element.setAttribute('src', 'http://www.imagsource.com/image.jpg')`
- Can also use the pattern: `element.'attrName' = 'value'`.
- eg: `element.src = 'http://www.imagsource.com/image.jpg'`

### .style
- Every element contains a style object. This property accesses that style object which contains every available style as a key and a value. It is important to note that these are NOT the CSS styles; these are inline HTML styles.
- These styles are associated with the HTML inline style set on the element
  -   eg: `<div style="color: red;">DIV STUFF</div>`
- You can access and change a property on the style object by using the assignment operator =.
- eg: element.style.color = 'blue';
- hanging a property on the style object will effectively give this element an inline style.
- Inline styles have the highest specificity, overriding any other selector except !important.
- VERY IMPORTANT to note that this does NOT access or change anything in the CSS file.

##  .className, .id
- .className accesses or assigns a string containing all of the classes on the element.
- .id accesses or assigns a string containing the id of the element.

##  .classList
- classList will return an array-like object of all the classes on the element. There are many useful methods available on classList.
  - `classList` is a `DOMTokenList`.
  - A `DOMTokenList` is an array-like object with a numerical zero-based index, a length property, also the `.contains()` and `.forEach()` methods.
  - Most notably the methods `.add()` `.remove()` and `.toggle()` exist. All three take a single string representing the class.
    - `.add('className')` and `.remove('className')` do as their names indicate.
    - `.toggle('className')` will add the class if it does not exist and remove it if if does.

##  .appendChild() and .prepend()
- These methods add child elements to parent elements.
- `.appendChild(child)` will take an element and add it to it's children. It will add it to the 'end' physically so if the children are displayed in order it will be the last.
  - eg: `parentElement.appendChild(childElement)`
- `.prepend(child)` adds a child to the beginning, displaying it first.
  - eq: `parentElement.prepend(childElement)`

##  .children and .parentNode
- These properties are used for accessing relatives of the element.
- `.children` returns an `HTMLCollection` of all the children of that element.
- `.parentNode` returns the parent element of that element.

## Follow Along

### DOM Manipulation Tutorial

Let's get some practice manipulating the DOM. You can use this code as a base for your JavaScript (Links to an external site) (Links to an external site.) or write your HTML and CSS along the way.

####  Updating Text

When we want to update the text using the DOM, the go-to property is called textContent. We can both read and write text inside of elements using `textContent`.

Given this HTML, lets make some updates to the text:
```
  <h2 class="second-heading">I am the DOM</h2>
```
First, let's set up a reference to our element on the DOM:
```
  const secondHeading = document.querySelector('.second-heading');
```
We are now prepared to update the content of our heading. Let's update the content to say "DOM updated!"
```
  secondHeading.textContent = "DOM updated!";
```
Notice that we are first getting the text node of the element and then setting a new value!

**Security Note** You may read about `innerHTML` in your DOM learning. Avoid using `innerHTML` as it could potentially be used as an attack vector for cross site attacks.

### Updating Attributes

Updating HTML attributes is vital to DOM manipulation. Let's update the style for the h1 in the code below.

```
<header>
  <h1 class="main-header">Dom Manipulation</h1>
  <nav class="main-nav">
    <a href="#" class="nav-item">Home</a>
    <a href="#" class="nav-item">About</a>
    <a href="#" class="nav-item">Blog</a>
    <a href="#" class="nav-item">Contact</a>
  </nav>
</header>
```
Updating the DOM usually happens in two steps:

####  Step 1: Select the element
```
const mainHeader = document.querySelector('.main-header');
```
####  Step 2: Use the desired attribute property to update the element
```
mainHeader.style.color = 'red';
```
You can even chain the two steps together like this:
```
const mainHeader = document.querySelector('.main-header').style.color = 'red';
```
This two-step process can be repeated for other attributes as well! What if we had an empty `src` attribute on an image tag? Let's try it out provided we have this HTML:
```
<img class="custom-img" src="" alt="Kitty image" />
```
Select the image element's class and update the `src` attribute with this link:
```
https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350
```
```
const customImg = document.querySelector('.custom-img');

customImg.src = 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350';
```

####  JavaScript CSS Syntax

When using JavaScript to update CSS style properties, we need to be careful to remember that JavaScript does not accept dashes as a valid naming value! Therefore, whenever a CSS property contains a dash, we must use camel casing in JavaScript.

Example:

```
.some-class {
  background-color: gray;
}
```
The JavaScript version would look like this:
```

  const someClass = document.querySelector('.some-class');

  someClass.style.backgroundColor = "gray";
```
**Pro Tip:** Don't forget the string when you assign a value to a CSS property.

## Challenge

### DOM Manipulation Challenge

[Take the example code from your tutorial](https://codepen.io/BloomTech/pen/jvjjGB?editors=1011) and try updating the DOM in various ways.

Here are some ideas:

- Change the color of the paragraphs.
- Change the text contents of any element of your choosing
- Change the href of an anchor tag
- Update the alt tag of an image
- Update layout styles, try out flex properties with JavaScript syntax



[Previous](./Object_2.md) | [Next](./Object_4.md)


