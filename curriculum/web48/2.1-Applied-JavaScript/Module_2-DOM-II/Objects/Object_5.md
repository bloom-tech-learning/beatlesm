# Objective 5 - Recognize Event Propagation and the Method Used to Prevent It

## Overview

Think of a pyramid. Pyramids are made up of many layers, the bottom layer is the largest, and as it goes higher, ever-decreasing sized layers are added to the one before it. If you are standing on the uppermost layer of a pyramid, you are also standing on every layer below it. When we look at a DOM tree, we can see those child elements are nested inside parent elements, like a pyramid. Like a pyramid, standing (triggers an event) on a child element, you're also triggering that same event on every parent element up to the body. This process is called event propagation. If you have an event of the same type on a parent element and a child element, and you trigger that event on the child element, it will also trigger on the parent. We have to be careful not to create unwanted interactions because of this. In the future, you may consider this as a feature; for now, this is something we would like to avoid.

In our event handler, we are past the event object. The event object has many methods and properties on it, including one called `.stopPropagation()` if we call this method in our event handler, it will effectively stop our event from bubbling any further up the chain.

- eg: `const eventHandler = (event) => { event.stopPropagation() };`

##  .preventDefault

Some elements have a native default reaction to certain events. For example, form elements will refresh the page on submit. `.preventDefault` is a method on the event object, and it will stop an HTML element from reacting in its default way. `.preventDefault` will be used less than `.stopPropagation`, but it is important to know about as well.

# Challenge

Go back to the codepen you were working on. And complete steps 9 - 12.



[Previous](./Object_3.md) | [Next](./Understanding.md)


