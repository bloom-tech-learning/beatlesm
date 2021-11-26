# Objective 3 - Demonstrate the Ability to Compose React Components to Build Out a UI

## <span style="color:red">Overview</span>

Now that we know all about functional components and how to pass arguments (props) through to those components and render those props data to the screen using JSX, we will learn all about nesting components that may rely on one or another prop value from a parent component.

Let's take a look at the following code example and learn how we can achieve this idea of nesting components:

```
const App = props => {
  return (
    <div>
      <h2>Hello world from, {props.name}</h2>
      <div>
        <h4>My best friend in this world is: {props.bestFriend}</h4>
        <p>My favorite book is: {props.favoriteBook}</p>
      </div>
    </div>
  );
}
```

This component is doing some simple rendering of DOM elements. It only relies on three props, so it's not super sophisticated, but it makes for some cumbersome programming. Meaning, here we essentially have a component nested inside of another component. So let's start by breaking out the inner DOM elements whose purpose is to render the best-friend data into it's own component.

```
const BestFriend = props => {
  return (
    <div>
      <h4>My best friend in this world is: {props.bestFriend}</h4>
      <p>My favorite book is: {props.favoriteBook}</p>
    </div>
  );
};
```

While this is good, we really should make it so that BestFriend can be reused and nested. Now, when we use this component inside of our App component, we can pass data to it as props.

```
const App = () => {
      return (
        <div>
          <BestFriend bestFriend="Homer Hickam" favoriteBook="October Sky"/>
        </div>
      );
    };
```

Now our component looks a little cleaner. But we can take it one step further. Notice that our <p/> tag could also be (if we wanted) it's very own component. For demonstration purposes of why this is neat, we'll go ahead and make it happen.

```
const Book = props => <p>My favorite book is: {props.favoriteBook}</p>;
```
And to use it nested within the BestFriend component

```
const BestFriend = props => {
  return (
    <div>
      <h4>My best friends in this world is: {props.bestFriend}</h4>
      <Book favoriteBook={props.favoriteBook} />
    </div>
  );
};
```

Now things are getting a little ridiculous, but this demonstration shows that react can pass props down as far as you'd like. However, we recommend not nesting components super deep because, in the long run, this can cause issues when attempting to work with the props that you're passing down as well.

##  Follow Along

Now let's build a few container components that each render their children and grandchildren. Finally, let's build out an ancestry tree that shows off the generations of the Simpsons.

Here is our data set:

```
const simpsonData = {
  name: "Orville Simpson",
  spouse: "Yuma Hickman",
  children: [
    {
      name: "Abraham Simpson",
      spouse: "Mona",
      children: [
        {
          name: "Homer Simpson",
          spouse: "Marge Bouvier",
          children: [
            {
              name: "Bart Simpson"
            },
            {
              name: "Lisa Simpson"
            },
            {
              name: "Maggie Simpson"
            }
          ]
        }
      ]
    }
  ]
};
```

Let's start by building out our `Parent Component`. Luckily our Parent components will be pretty straightforward.

```
const Parent = props => {
  return <h1>Parent: {props.name}</h1>;
};
```

Now that we have our data and component, we can mount up this component inside of a container component.


```
<Parent name={simpsonData[0].name} />
```

Should mount an `h1` with `Abraham Simpson's` name printed to the screen. Now let's tweak our Parent component to be able to conditionally mount a `child` component if a child prop is on the `props object`. To achieve this we'll need a `Ternary Operator` that checks if the `child` prop is defined. If it is, we want to mount a `Child` component; if not, we want to mount `null`.

```
const Parent = props => {
  return (
    <div>
      <h1>Parent: {props.name}</h1>
      {props.child ? <Child name={props.child} /> : null}
    </div>
  );
};
```

Now we have to build out our child component so that we can properly use this one.


```
const Child = props => {
  return (
    <div>
      <h2>Child: {props.name}</h2>
      {props.grandChild ? <GrandChild name={props.grandChild} /> : null}
    </div>
  );
};
```

Notice we have the same behavior here as we did in the Parent. We'll mount a `<GrandChild />` component if the correct prop exists. So now we need to build out `GrandChild`.

```
const GrandChild = props => {
  return (
    <div>
      <h3>{props.name}</h3>
    </div>
  );
};
```

So now that everything is put together let's see how we can mount all these components up correctly.

```
<Parent
  name={simpsonData[0].name}
  child={simpsonData[0].children[0].name}
  grandChild={simpsonData[0].children[0].children[0].name}
/>
```

Ok, so our data set isn't the greatest, and the way this app works is entirely stringent upon specific data formatting, but it gets the idea across.

Your goal now is to try and extend this to `GreatGreatGrandchild` to be able to render out `Bart, Lisa, and Maggie` to the screen!

A good place to start would be right [here](https://codesandbox.io/embed/pwkl9zr140).

You can use CodeSandbox to build live ReactJS applications. I recommend logging in through their Github OAuth portal. Have fun!

## Challenge

Create an object that represents a generational tree of your family similar to the `Simpsons Object` found in our 'Follow Along' example. Keep it simple. Build out a few nested components that demonstrate the ability to pass data and conditionally render components if certain props are available.





[Previous](./Object_2.md) | [Next](./Object_4.md)


