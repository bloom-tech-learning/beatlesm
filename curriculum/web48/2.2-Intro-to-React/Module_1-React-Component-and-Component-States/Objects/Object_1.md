#   Objective 1 - Describe ReactJS and the Problems that it Tries to Solve

## <span style="color:red">Overview</span>

React has quickly become one of the most commonly used libraries for building applications today. Because you've now seen some code that allows you to build custom components with so-called vanilla JavaScript (JS), you've come to an understanding of how you can use JS to manipulate DOM elements. React will take that knowledge you have learned and abstract away a lot of the `document.getElementByClassname` syntax. As you'll see later on, your entire application will live within one targeted DOM element. React will handle the rest for you.

Because we have such rich user interfaces today that interact with ever-changing data, users interacting with DOM elements, and lots of animations and events firing, the DOM is undoubtedly doing a lot of work. Imagine an app like Twitter or Facebook that has users clicking everywhere, with data changing and almost instant status updates. For these types of large-scale applications, React is very important. Simply put, we need a way to offload a lot of the `state` (data) that our apps need to use from the DOM. To keep up with today's demands of the web, we need a way to build applications that can take care of a lot of the work for us.

Lets face it, working with the DOM API is hard. The React team recognizes this, so they built a simple engine called the `virtual DOM` that interacts with the actual DOM for us. We tell the `virtual DOM` which elements and `state` (data) to render to the actual DOM, and it will do so. Beyond that, it will "react" when the `state` (data) in our app changes, and will update the DOM accordingly. All on its own!

In a process called "reconciliation," React will detect that the app's state has changed. Then it will update the virtual DOM, taking note of which nodes have changed due to the state changes. Finally, once it knows which nodes have changed, it will update only those specific nodes on the actual DOM. This takes a lot of pressure off of our browsers, and it's why React is as powerful as it is.

Today, web applications are enormous, complex pieces of software that millions and millions of users interact with simultaneously. React provides a smooth experience for our users, as well as those developing applications.

## Follow Along

Please read through the ['Try React' tutorial found here](https://reactjs.org/docs/getting-started.html) and follow along with the documentation. Take it as far as you'd like. But we'd love for you to come into class on Monday, having played around with React and seen some React code.

-   So read through [this portion](https://reactjs.org/docs/thinking-in-react.html) of the React documentation.

## Challenge

On your own, write a paragraph about what ReactJS is and what problems it tries to solve.

Submit that paragraph to your Team Lead via Slack





[Previous](../README.md) | [Next](./Object_2.md)