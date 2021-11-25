# Objective 4 - Create a New Element, Manipulate it, and Add it to the DOM

An essential feature of the DOM is the ability to create brand new elements dynamically. Using the `document.createElement()` method, we will be able to create a brand new element, style it, and add it anywhere on the DOM we would like.


## Follow Along

### .createElement
- `.createElement` creates a brand new element based on a given string.
- New element exists in memory, but not on the DOM yet.
- Can use any DOM property or method to style and manipulate the element.
- eg: `document.createElement('h1')` will create an `h1` element.

### .appendChild() and .prepend()
- Add child elements to parent elements.
- `.appendChild(child)` add an element to it's children. Adds to the 'end', so that if displayed in order, the added child will be last.
  - eg: `parentElement.appendChild(childElement)`
- `.prepend(child)` adds a child to the beginning, displaying it first.
  - eq: `parentElement.prepend(childElement)`

## Challenge

Practice the concepts covered.



[Previous](./Object_3.md) | [Next](./Understanding.md)


