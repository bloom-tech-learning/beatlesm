# Objective 4 - Add Event Listeners and Event Handlers to Elements

## <span style="color:red">Overview</span>

### .addEventListener

Once we have an element selected, we can use the `.addEventListener` method on that element. `.addEventListener` takes two arguments, first the event to listen for and, second, the callback to fire when that event is triggered. For a complete list of events see the resources below. In use, this looks something like `element.addEventListener('click', callback);`.

### Events

We learned before that there are different types of events we can listen for. The most common are mouse events highlighted by the 'click' event, but there are dozens of more events we can listen for. We can add event listeners for as many events as there are for each element, meaning we can listen for a `mouseclick`, `keypress`, `hover`, and more all on the same element. Although to do so we need to call .addEventListener and pass in a callback for each one.

Take 5 minutes and study this MDN page. Then, please choose an event, NOT a mouse event, and read about how it works.

[MDN Event Listeners](https://developer.mozilla.org/en-US/docs/Web/Events)

### The callback and the `Event Object`

The callback (also known as an event handler) will take a single argument; this is known as the `Event Object`. This is a Javascript Object and contains all we need to know about the event and the element it happened on.

-   eg: `element.addEventListener('click', (event) => {//Handle event});`
-   One of the most important properties of the event object is `.target`, this property will give us all of the info about the DOM node where the event happened. It has many of the same properties as a regular DOM node, `.children`, `.parent`, `.style`, `innerText`, etc. We can use these properties to manipulate the element itself, or it's relatives.
-   We can use this to manipulate the target in any way we want, for example to change the background color we would write the following: `element.addEventListener('click', (event) => { event.target.style.backgroundColor = 'blue'; });`
-   Depending on the type of event listened for, we can have access to other information about the event, such as the key pressed (in the form of a code) and other things. Spend 5 minutes reading about the event object here: [MDN Event Object: Properties](https://developer.mozilla.org/en-US/docs/Web/API/Event#properties)

##  Challenge

Follow the instructions in the Javascript section of this codepen on your own. Use the `sampleButton` element at the top as a reference, and add the appropriate event listeners to the elements. Then, please Fork and save your code.

[Codepen: DOM-II Events](https://codepen.io/BloomTech/pen/gqmrwx?editors=0010)



[Previous](./Object_2.md) | [Next](./Object_4.md)








## Challenge





[Previous](./Object_3.md) | [Next](./Understanding.md)


