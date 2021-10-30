#   Objective 1 - Explain Class Components, and Use a Class Component to Render Some State Data to the DOM

##  Overview

React gave us the idea of components as independent pieces of UI. And thus far, you have learned how to build out ```functional components``` to make multiple DOM elements. Now, we're going to be learning about ```React.Component``` base class that allows us to use some of the React team's methods to tap into the ```Component Lifecycle```.These methods (known as life-cycle hooks, more on these to come) give us control over how our components work, and if we'd like to use them, we have to build out a class component that extends the React.Component parent class. Whenever you see a line of code that looks like the following, you're using ```React.Component``` parent class, and you can tap into these methods.
```
class FooComponent extends React.Component {}
```
By creating components as classes, you can set up a data object that your component is concerned with. This is done using ```state``` and setting up that object on our constructor method. Once we have some data that we can render out to the DOM, we need a vehicle that will allow us to render that data. This is achieved with the JSX method ```render()``` from within the life-cycle hook. We'll walk you through the steps below.

Declare your ```class component``` by extending the ```React.Component``` parent class. ```class FooComponent extends React.Component {}```.
Use the ```constructor``` function to set up some state. because we're calling extends, we also need to call ```super()```; otherwise we won't have access the this
We need to render some sort of UI to the DOM. We do this by calling the life-cycle method ```render```.

I like to remember these steps by referencing one of my favorite bands: Creedence Clearwater Revival (CCR), which stands for class, constructor, and render/return.

1.  Declare your class, and extend the ```React.Component``` Base class.
```
class FooComponent extends React.Component {
```
1.  Now we'll set up our constructor and add state.
```
constructor() {
  super();
  this.state = {};
}
```
1.  Render some UI and return some ```JSX```.
```
render() {
  return <div>Hello, I am Foo Component</div>;
}
```
Our final component should look like this.
```
class FooComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <div>Hello, I am Foo Component</div>;
  }
}
```
Now that we have constructed a skeleton for our class component, it can be more dynamic. The way we'll achieve this will be to use some data that we'll pre-define as some information we'd like our component to display. We'll then take that data and do this cool thing called ```interpolation``` in order to present it to the DOM within some Text.

Components built out extending the Base ```React.Component``` class come with a bunch of benefits directly from the React API. A list of the benefits to what we get out of the Component class can be found [here](https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate) (Links to an external site.), in theReact documentation about class components. We will be discussing the ```life-cycle``` methods at another place in time, so don't worry too much about those for now.

For now, let's focus on a component caring about its own state (data) and managing that state in a reactive way. The ```state``` object that we set up on our ```constructor``` has a very React-specific way of doing things. It allows us to drive our UI using data. Again, think about Facebook here. You see a LOT of data and interact with it all of the time when you're using the Facebook app. Because of the way we work with social media today, we expect this data the UI to represent that data in close to real-time. This is one reason why React is really good and how reactivity can be achieved.

## Follow Along

Let's work together to build out a class component that prints a message to the screen using a few DOM elements. First, we will hold a message on state and print it to the screen by selecting it and assigning it to a DOM element. Then we will take it a step further and pass that message down to another component using props.

Go ahead and navigate over to [this Codesandbox](https://codesandbox.io/s/3xwzql38nm) (Links to an external site.), where we will write our React code. CodeSandbox is an online editor that can be used to write React code right away! I can't emphasize how cool this is. For now, you'll have to trust me.

You'll notice that we're getting an error on this page. As we begin to define our app class, elements will start to come to life for us. But, for now, let's start by simply adding the class through CCR.

When you're done, your browser window should re-render without any errors. Your app class should look like this:
```
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <div>Hello From App!</div>;
  }
}
```
Now, let's add a property to our state data. Define a ```message``` property on the state object.
```
this.state = {
  message: "Hello from App State!!"
};
```
Now that we have the message on our component's state, we can use it through interpolation. In our render method, let's change the message inside of div to reference the state object. Remember the ```this``` keyword when pointing to an object on the class constructor.
```
render() {
  return <div>{this.state.message}</div>;
}
```
Hooray! You've now built your first class component, and you're ready to rock n' roll.

## Challenge

Let's take the functionality of this class component that we built earlier and extend it just a little bit. Declare a functional component called RenderMessage inside [this CodeSandbox] (https://codesandbox.io/s/103jkor46q)

-   Make sure you declare your Props Object that will be passed into this component.
-   Return a ```div``` who's child is ```props.message```
-   Now inside of the ```App``` class pass in that ```RenderMessage``` component and pass down a message prop to ```RenderMessage```. This message prop should be set equal to the message property on the state object.
-   Once it's all wired up properly you've done it!

[Previous](../README.md) | [Next](./Object_2.md)