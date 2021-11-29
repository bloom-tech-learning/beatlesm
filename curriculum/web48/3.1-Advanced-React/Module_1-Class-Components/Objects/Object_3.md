# Objective 3 - Respond to Events Triggered by User Interaction and Handle User Input via Forms in React

Access Video [Here:](https://bloomtech-1.wistia.com/medias/ixahjh7sqq)

You can access the example in this video [here](https://codesandbox.io/s/k0q2wwyj2o)

##  Overview

In our last objective, we explored how ```state``` can be displayed and changed by passing state value and state modifying functions respectively through ```props```. We explored this using the onChange ```eventlistener`. That is, of course, only one of many user event you can integrate into your applications!

We have already seen how events are handled within React class components. We need an ```event handler``` function and we need to link it to an ```eventlistener``` method within our DOM.

```
class Button extends React.Component {
  handleButton = (e)=> {
    console.log(e);  }

  render() {
    return <button onClick={this.handleButton}>Click Me</button>;
  }
}
```

Notice once again the need for that ```this``` object when referencing our ```event handler```. Within class components, just like our props and state, our event handlers are bound to the instance of this class and are accessed through ```this```.

We have also seen that "e" parameter before. This parameter is known is React as a ```synthetic event``` object. Inside this object, we will have access to various pieces of information regarding this event triggered, including the target DOM element, the type of event, and methods that control the propagation of that event like preventDefault. For more details on the ```synthetic event``` objects, check out the reference materials [here](https://reactjs.org/docs/events.html).

Let's add in some functionality to our event handler.

```
class Button extends React.Component {
  clickHandler = event => {
    console.log(event); // this is the react Synthetic Event
  };

  render() {
    return <button onClick={this.clickHandler}>Click Me</button>;
  }
}
```
Now, when we click on our button, we can actually print out our ```synthetic event``` object. We can now do anything we want within ```event handler```, from triggering a change of state to starting an external api call.

## Follow Along

Now, let's build out a little Application that can handle some data that we pass through a few JSX elements. We're going to build out some ```event handler``` functions using the following ```event listeners```:

-   onClick
-   onDoubleClick
-   onMouseEnter
-   OnChange

First, let's build out a singleClickHandler function.

```
singleClickHandler = () => alert("Single Click!");
```
Now, we add it to a button within our app's render function.

```
render() {
. . .
<button onClick={this.singleClickHandler}>Click Handler Demo</button>
. . .
```

Lets repeat the process for our doubleClick, mouseEnter and onChange events.


```
doubleClickHandler = () => alert("Double Clicked!");

mouseEnterHandler = () => alert("Mouse Entered");

changeHandler = () => alert("Item was changed");
<div className="App">
    <h1>Hello Handlers</h1>
    <h2>Lets build out some handler functions.</h2>
    <button onClick={this.singleClickHandler}>Click Handler Demo</button>
    <button onDoubleClick={this.doubleClickHandler}>
      Double Click Handler
    </button>
    <div onMouseEnter={this.mouseEnterHandler}>Mouse Enter</div>
    <input onChange={this.changeHandler} placeholder="Change my input" />
</div>
```

Try playing around with the events and see how are interacting one with another.

Lets take a closer look at the input onChange event for a min. Let's pass in the synthetic event through the function body by adding it as a ```parameter``` to the ```event handler``` connected to it.

```
changeHandler = (e) => alert(event.target.value);
```

One of the most useful properties attached to ```synthetic events``` is target. This provides information on the text, value, style, attached attributes and other useful data within our DOM element. In this case we can print out our input's value.

Lets add in some state to get realtime feedback of what we are typing. Once again, we do this within class components by within the class ```constructor``` and make our app display that change.

```
class App extends React.Component {
 constructor() {
    super();
    this.state = {
      displayText: '',
    }
  }
…
 render() {
    return(     …
        <h1>{this.displayText}</h1>
        …
    );
 }
}

```

Lets also update our change handler to update our state:

```
changeHandler = event => {
  this.setState({displayText: event.target.value});
};
```

Excellent! Now, ```setState``` will update our display property on our state object by simply typing in the input field. Let's prove this by logging our state object inside the render function.

You can see a working copy of this example [here](https://codesandbox.io/s/rmnj2r1o0p)

## Challenge

Lets expand on our example!

Fork the code provided above and do the following.

-   Add another value to state that holds the secondDisplayValue.
-   Display that value in a h2 tag.
-   Create a button that will put the value of state.displayText within our secondDisplayValue property.
-   Add an event listener and event handler function that will cause our h2 to show displayText when we click our new button.



[Previous](./Object_2.md) | [Next](./Understanding.md)


