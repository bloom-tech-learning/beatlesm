# Objective 3 - Utilize a Form's Submit Event to Work With Form Data

## <span style="color:red">Overview</span>

Our users' data is critical to us, the software, and our company. So when a user fills out a form, we need to know how to let the user "submit" that data. Of course, the first thing we think about when we say "submit a form" is a button click. We'll look at how to handle button clicks for sure, but there is an even better solution for form submission.

Imagine you fill out a form with ten input fields. You have been keying the tab to navigate to each input. You get to the end; what is the most natural action at this point? Most people have been trained to hit enter to submit a form. Now imagine you do so, and nothing happens. It's the worst! Am I right? To give our users a great experience in our software, we also want to learn how to submit forms using the

element's `onSubmit` event handler.

## Follow Along

Submitting form data

As mentioned above, we'd probably be sending this information asynchronously to a server to authenticate them in real applications, but for now, let's log the user to the console. To do this, we'll need a submit button and a function to handle that submit.

```
import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const handleChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    console.log(name);
  };

  return (
    <div className="App">
      {console.log(name)}
      <form>
        <label>
          Username:
          <input type="text" onChange={event => handleChange(event)} />
        </label>
        <button onSubmit={() => handleSubmit()}>Submit!</button>
      </form>
    </div>
  );
}

export default App;
```
Uh-oh. When we clicked our button, the page refreshed. In the early days of the internet, when the spec for this stuff was written, that behavior was useful. Not anymore. In our case, with a single-page application, we don't want our page refreshing. If it did so, it would clear our state and cause all kinds of problems.

We need to block the default behavior of the `onSubmit` listener. To do that, we'll need to grab that event object again. We'll also need to peel the submit handler off our `<button>` and put it on to the `<form>` itself. Remember when I told you that the `<form>` tag keeps track of what its children do? This is one example. If there's only one `<button>` inside a `<form>`, the form will know to fire the function attached to its onSubmit listener. The form is also the element causing the default refresh of our page, and, as such, it's the only thing that can prevent it, so we have to grab the event object from the form. As you can hopefully see by now, part of the reason forms can be confusing in React is because the underlying HTML is complex.

Here's our updated code.

```
import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const handleChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(name);
  };

  return (
    <div className="App">
      {console.log(name)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Username:
          <input type="text" onChange={event => handleChange(event)} />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default App;
```

Nice, it logs our state to the console without refreshing the page. Let's move on.


## Challenge





[Previous](./Object_2.md) | [Next](./Object_4.md)


