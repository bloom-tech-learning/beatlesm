# Objective 3 - Explain What Events Are in the Browser Window and How Event Listeners Can Listen for Those Events.

## <span style="color:red">Overview</span>

We use JavaScript to make our pages dynamic and usable. Now that we can access and manipulate elements on our page, you might be wondering to yourself, "Why don't we change the elements in the HTML file directly? Why do we have to go through all of this to change some styling on an element?" Those are valid questions, and the way we have been using JavaScript so far, it would make sense to change our HTML instead.

But, JavaScript's real power lies in its ability to make web pages interactive. In addition to manipulating elements, JavaScript also allows us to add features and modify our site by directly reacting to user interactions. Think about a button click, drag and drop, zoom, or any number of user interactions. We create functionality for those interactions using JavaScript. Now that we know how to manipulate and modify DOM nodes, we can learn about events.

Every user interaction with a site is an event: a click, moving the mouse, scrolling the page, pressing a key on the keyboard, these are all events on the page, and the browser can detect all of them. There are tons of different events the browser tracks. When an event happens on a page, it is known as a trigger.

Now that we know what an event is and we know the browser is constantly tracking them, we need to listen for specific events on specific elements. For example, did a user click that button? Did a user's mouse hover over an element? Was there text entered into the input field? There are dozens of events an element can listen for. Then, when one of those events happens on that element, we can do something about it. The tracking process and subsequent action taken is called an event listener. We put an event listener on an element and give it a callback. When that event is triggered on the element, the callback is run.


[Previous](./Object_2.md) | [Next](./Understanding.md)

