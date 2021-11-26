# Objective 3 - Use Router's useParam Hook to Add Dynamic Routes to an Application

## <span style="color:red">Overview</span>

React's newest update, 5.1, released late in 2019, supports hooks. This is helpful for routing, so we'll spend the next few objectives exploring use cases of some common hooks.

`useParam`

The `useParam` hook relies on props to pass new and changing data into the app.
Parameters are placeholders in a URL that represent some changing data. When we've set up routes in the past we've written some route like `<Route path="/employee` that corresponds to some component, but what if we want to load different data depending on the URL?

The `useParam` hook allows us to create dynamic routes that will render content based on the URL. So, instead of requiring that all routes are written out ahead of time, the URL determines what renders on the page. For example, a url `"website.com/johnSmith"` would render data about John Smith, while `"website.com/janeDoe" `would render data about Jane Doe - neither have to be specified in your code. The browser "matches" the URL to the data, thus the name. If no data is found, it throws an errorIn some ways this provides access to search parameters in the URL. Before React Router 5.1 this was only possible using `match.params`.

In order to use a parameter in routing we need to assign the route with a colon in `App.js` or wherever else the routes are defined. So, `<Route path="/employee` becomes `<Route path="/:employee`. With that simple change we can use the `useParam` hook to create dynamic routes.

A real-life example of this is Twitter. It would be crazy to imagine that every time a user makes a new profile, a new line of code has to be written. Instead, Twitter routes look something like this:

```
<Route path='/:handle' component={Profile} />
```

The path is specified with a : and the component will load accordingly.

## Follow Along

Let's return to our avengers app and created dynamic routes with `useParam` such that `ourapp.com/avengers/Thor` will render information about an avenger from our `data.js` file, in this case, Thor.

### App.js

We don't need to import `UseParams` in `App.js`, but we do need to make some changes here. Importantly, we need to pass data to `avengersList` and set up our routes such that they will accept any `hero` parameter.

```
<div className="App">
        <Switch>
          {/* we can use Route to render child components instead of having to use the component prop. This way we can easily pass down props to our components.  */}
          <Route path="/avengers/:hero">
            {/* Passing our data to avenger's list */}
            <Avenger key={hero.id} hero={hero} />
          </Route>
          <Route path="/avengers/">
            <AvengersList hero={hero} />
            {/* Passing our data to avenger's list */}
          </Route>

          {/* You can also render a component with the component prop if you do not need to pass any additional props to your component */}
          <Route path="/" component={Home} />
        </Switch>
      </div>
```

### AvengerList.js

In our `Avenger.js` file, we'll need to import `useParams` and set up the parameter for Avenger.

```
import React from "react";
import { useParams } from "react-router-dom";
```

After that, we can edit our `Avenger` function to match the `hero` data to the route specified in the URL. JavaScript will look at the hero `id` and match it to the `id` in `data.js`.

```
function Avenger({ hero }) {
  // console.log("Props", props);
  const params = useParams();
  // we can use this hook to grab information about the way React Router matched this route

  // we want to match the hero to the route
  const heros = hero.find(item => item.id === Number(params.hero));
  return (
    <div className="character-card">
      <h2>{heros.name}</h2>
      <p>{heros.nickname}</p>
      <p>{heros.description}</p>
      <img src={heros.thumbnail} alt="random avengers img" />
    </div>
  );
}
export default Avenger;
```

Once this is in place you should be able to visit a site such that `ourapp.com/avengers/3` will render information about Captain America. Similarly, `ourapp.com/avengers/4` should match and render information about Spiderman, and so on. Play around with this feature using different URL routes before moving on.

## Challenge

Create a dynamic route in your `Friends` application with `useParams`



[Previous](./Object_2.md) | [Next](./Object_4.md)


