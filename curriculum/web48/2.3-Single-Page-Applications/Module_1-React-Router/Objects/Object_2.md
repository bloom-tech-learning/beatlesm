# Objective 2 - Set Up Routes Within a React Application Using the Router, Route, and Link Components

## <span style="color:red">Overview</span>

### React Router

React Router is a declarative style routing for React applications. React Router is a versatile tool because it can be used for React and React Native as well. The best part of React Router is that it pushes the envelope for what a router should be on the client. Since it was built for use within a React ecosystem, it uses a Reactive & Declarative context. This means we get a more dynamic routing experience when building and designing our routes within our React Apps.

### Route

Routes are a way of getting to a destination. A route can specify which components to render on the page and in what order.

To set up React Router, you need to declare what components will be mounted when certain URL paths are met. This step happens after we've wrapped our `Root` component in the `Router` or `BrowserRouter` component. The best part of React Router is that you can do this at pretty much any point during your development process, whereas previously you had to declare your routes early on in the development cycle. What this allows us to do is figure out more important things without allowing routing to get in the way. React Router is a super useful tool for this reason!

Once you have React Router installed by using `npm install react-router-dom`, you can import the `Route` Component and use it within your application.

```
import { Route } from 'react-router-dom';
```

The `Route` component declares what `components` will be mounted based on what `URL's` the user requests. The best part about this process is that we get a chance to do this in a very "React" way. Lets picture a component `Users` that will display a list of users in your system when the URL `www.coolestapp.com/users` is requested. The `Route` component takes in a few props; the first is the URL `path` where the Route component will trigger. Next is the `component` prop. This is the component that you want React to mount when the URL matches the requested `path`. So in our case, when `/users` is requested, the `Users` component will be mounted.

```
<Route path="/users" component={Users} />
```

This route will take us to the `users` component whenever the `/users` URL is requested within our application. You may be thinking to yourself at this point, is that really it? The answer is: yes, it is! It's really simple to declare routes and components that will be mounted when the routes are requested. It's almost like your `Route` components ask you this question every single time you set one up: what component do you want mounted when a user asks for what URL path?

Using this tool, you'll hit each piece of your application and how a user might interact with each component.

Now let's see this all in action in a larger portion of an application. Picture an app that has 3 major components that will need to be rendered as part of a `Navigation` system: `Home`, `Contact`, and `About`. Each of these three components will need to be rendered when a user requests the `"/"`, `"/contact"` and "/about" paths in our app. So, let us refer to our question above: what component do you want mounted when a user asks for what URL path? In our case, we want the following:

A user requests `/ `so we will mount the `Home` component
A user requests `/contact` so we shall mount the `Contact` component
A user requests `/about` so let us render the `About` component

Now that we have a framework let's practice with it.

```
<Route path="/" component={Home}/>
<Route path="/contact" component={Contact}/>
<Route path="/about" component={About}/>
```

### The `exact` prop

And there we have it, we have successfully declared our Routes within our application. But we have a bit of a problem. A problem that is easily solved. If you're looking at the React Router documentation, you may have already come across the `exact` prop, which is provided to us by the React Router API. This prop is a very important feature of the `Route` Component. It comes to us because of the way that the package was built. Let's consider how this whole thing works.

We are using an API that already exists for us as web developers when it comes down to it. And that is the [History](https://developer.mozilla.org/en-US/docs/Web/API/History) API built into our web browser. If the URL / and /about are both requested, and we have an algorithm to match the characters in the sequence /, /about. Both the /and /12 will match. Because of the way this is set up, if we request the route /about, then both the Home Component and the About Component will be rendered. React Router anticipates this, and the exact prop to the Route component solves the problem.

By placing `exact` on a `<Route />` component, you are saying that the specific path will only trigger if it matches exactly the path requested. This defaults to false, so by simply including the `exact` prop on your `Route` component, it will set it to true and only mount our `Home` component when the specific path / is requested and not when `/about` is requested. [Here](https://v5.reactrouter.com/web/api/Route/exact-bool) is a link to the docs. And here is an example of how this will work.

```
<Route exact path="/" component={Home}/>
<Route path="/contact" component={Contact}/>
<Route path="/about" component={About}/>
```

This is the same as before only now our `Home` component route has the `exact` prop added to it. We have now solved the problem.

### Link

The link component can be included just like any other component in your application. This will produce an anchor tag that will link to a pre-defined component of your choice. Remember, if we set up our routes properly, we'll use the anchor component to navigate our browsers to the path where a component can be mounted. We can think of our `Route` component as the boat on the ocean, and the `Link` as the wind and sails that make that boat move.

```
import { Link } from 'react-router-dom'

<Link to="/about">About</Link>
```

As with all of the components that we get from React Router,  `Link` will take a few props that we can use to control the component and allow it to work for us.

The first thing that `Link` takes as a prop (and most important) is the `to` props. Notice in the above code block that `to` is a string that looks like a URL. This is just like the `href="/about"`   attribute on the `anchor` tag. This is how we navigate with React Router.

### Switch

We won't use it here, but in many online tutorials, you will see `switch` use. If a route matches multiple routes enclosed in a switch statement, the browser will only render the first component it comes across. This can come in handy when considering nested routes and the like.

## Follow Along

For the next four objectives we are going to work on an `avengers` app together.

### Setting up React Router

Before we start we will need to install React Router and set up our directory. To install React Router, all we have to do is use `npm `to download the package. In the past, we used to include the entire `react-router` package, but today we get to specify which target we're building for (Web or Native). Because we're building for web, we're going to target the `react-router-dom` package and include it into one of our applications.

```
npm install react-router-dom
```

Once you have it installed, all you need to do is include it as a package like any other `npm` package we've used to date. In addition, we'll want to import `React`, `ReactDOM`, and our `App` component.

```
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
```

Now we'll use Router as our `Base` component that will wrap our entire app. We'll do this by wrapping our `<App />` component that we pass to `ReactDOM.render`. This way, what renders from App is controlled with `<Router>` as opposed to rendering everything in `App`.

```
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
```

### Route

Now we can set up routes for our Avenger's app. First, we want to have a home page and a list page. Later we'll add an Avenger page. So our app routes are going to be organized something like this:

```
A user requests `/` so we will mount the `Home` component
A user requests `/avengers` so we will mount the `AvengerList` component
```

Next, we need to create a `components` directory. Inside that folder, we need a `Home.js` file and an `AvengersList.js` file. For now, just render a header element with "Home" and "Avenger List" in the respective components.

Add [this] (https://gist.github.com/dustinmyers/35ad6751b5bd683b441faaf167dfa7d3) to your .css file to use my styles, or style it up how you'd like on your own.

Add [this data](https://gist.github.com/dustinmyers/b2a904870c84a0339002458f972b3398) to your app and display the list of Avengers in the list component.

Import those new components into `App.js`. Let's create the routes for our app. We will need to import the `Route` component. Our app imports should look something like this:

```
import React from "react";
import { Route } from "react-router-dom";
import AvengersList from "./Components/AvengersList";
import Home from "./Components/Home";
import "./styles.css";
```

Now we want to render two routes - home and avengers. For the home route we need to include the `exact` parameter to specify that any additional text after the `"/"` shouldn't route to home. Go ahead and test with and without `exact` to see the difference here.

```
<Route exact path="/" component={Home}/>
<Route path="/avengers" component={AvengerList}/>
```

Before moving on, go to both URLs and make sure the components are rendering correctly.

Feel free to build out your `Home` component however you would like.

### Adding Links

The next thing we want to do is incorporate links. We'll do that by adding a nav bar.

We'll use `Link` to make a way to route to the `Home` component and the `AvengerList` component.

First we need to add `Link` to our imports.

```
import { Route, Link } from "react-router-dom";
```

Then we'll add the navigation bar to our `App`.

```
<ul className="navbar">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/avengers">Avengers</Link></li>
</ul>
```

Try out the links to make sure they work, and then style the nav bar. Once that is done, go to your `AvengerList` component and add a `Link` somewhere in the mapped list of avengers that will route you to the `AvengerPage`. To show an example, I'll do it here on the header element. You'll notice that I am using an interpolated string so that we can build out the URL dynamically using the avenger's id.

```
<Link to={`/avengers/${avenger.id}`}>
  <h3>{avenger.name}</h3>
</Link>
```

Take a minute to inspect your navbar and your wrapped header elements in the dev tools. Look for the anchor tags that get rendered by the `Link` component.

Our final `App.js` before hooks should look something like this:

```
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AvengersList from "./Components/AvengersList";
import Home from "./Components/Home";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/avengers">Avengers</Link>
        </li>
      </nav>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/avengers" component={AvengersList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
```

## Challenge

1.  Start up a new React app called friends, install react-router-dom and get it wired up to use React Router. Inspect your app in the browser with the React tools and make sure you see your app wrapped in the Router component (reference the image above).
2.  In your friends app, add a new `Home` component and `Friends` component. Then add a route for each component. Test your app in the browser to make sure both apps are rendering at the correct route. Build out your `Home` component and then render out a list of friends data in the `Friends` component.
3.  Make a navbar on the friends app. In the list component, add a Link component to the mapped list of friends to give us a way to route to the individual friend page.




[Previous](./Object_1.md) | [Next](./Object_3.md)