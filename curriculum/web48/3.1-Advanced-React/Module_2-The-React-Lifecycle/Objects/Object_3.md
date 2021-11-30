# Objective 3 - Use the componentDidMount Function to Set a Component's State Post Render

## Overview

The ```componentDidMount``` method is a part of the ```mounting``` phase in the React Lifecycle. This method gets called as soon as the render method is called the first time, and it begs the question…now what?

When our component has mounted, we have the bare-bones minimum. We need to put something on the screen, so now what?

Inside of ```componentDidMount``` we can call ```setState``` which forces a re-render of our component. This way, any asynchronous actions should be performed inside of our ```componentDidMount``` function, especially when it comes to fetching data via HTTP. Data fetching is the de-facto purpose for using ```componentDidMount``` within a component because of its position within the component lifecycle.

<strong>This method is guaranteed to be called only once in the whole lifecycle, immediately after a mounted component.</strong>

Until we know more about ```async AJAX``` calls, we'll use ```componentDidMount``` to set up state data living in a separate file. We'll do this by pulling the data in and setting it on state. This is also something you're going to have to do for your "Insta-clone" assignment today.

## Follow Along

Let's put some of our knowledge together and build a react component that consumes data from a different resource.

To follow along, go ahead and click on [this link](https://codesandbox.io/s/xlx1714w8w) that will take you to a codesandbox.

Your ```index.js``` file should look a lot like this:

```
import React, { Component } from "react";
import { render } from "react-dom";
import CitiesList from "./CitiesList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cities: []
    };
  }

  render() {
    return <CitiesList />;
  }
}

render(<App />, document.getElementById("root"));
```

We are merely importing in a component called ```CitiesList``` and returning it to the screen. ```CitiesList``` is a pure functional Component whose only responsibility is to render the props passed down to it on to the screen. We have two very different styles of components here.

The only problem is that ```CitiesList``` wants to render something out, in fact, right now, if you look at the console, you'll see that ```props``` is an empty object. Our goal is to try and fix that.

Inside of the ```cities.js``` file, you'll find a global object with a property ```data``` as an array of cities. Let's import that into our ```index.js``` file and utilize the data.

```
import cities from './cities.js';
```

If we ```console.log``` our cities, you'll see that we now have access to them. To fix the issue set forward earlier, we need to set this data on state and pass that data down as props to our ```CitiesList``` component. We'll do this inside of ```componentDidMount```

```
componentDidMount() {
  this.setState({ cities: cities.data });
}
```

## Challenge

Use this function inside of a ```componentDidMount``` call in an app with a state object set up. Fetch a list of dogs.

```
const getDogs = () => {
    fetch('https://dog.ceo/api/breed/labrador/images')
     &nbsp;.then(res => res.json())
     &nbsp;.then(dogs => this.setState({dogs: dogs.message}))
     &nbsp;.catch(err => console.log('noooo'));
};
```

Once the dogs are on state, build out a list of <img> tags that display each dog.

[If you get stuck, this is what I'm going for](https://codesandbox.io/s/x96vm3vykq.){:target="_blank"}



[Previous](./Object_2.md) | [Next](./Project.md)
