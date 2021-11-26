#   Objective 1 - Demonstrate How to Build a Form With the Basic HTML Form Elements

## <span style="color:red">Overview</span>

Forms in websites and web applications have been around for a long time. They are one of the best ways for companies to gather data from their users and get their users to interact with their software. As a result, they are vital in the web landscape.

Every language and framework will handle form data differently, but most of them will use the same basic HTML elements to build a form. Of course, each will have its responsibilities. Here are the elements we'll talk about right now with a brief definition from MDN:

`<form>`

>   The HTML `<form>` element represents a document section that contains interactive controls for submitting information to a web server.

`<input>`

>   The HTML `<input>` element is used to create interactive controls for web-based forms in order to accept data from the user.

`<label>`

>   The HTML `<label>` element represents a caption for an item in a user interface.

In summary, the form contains interactive controls (form elements). The input is the interactive control used to collect data from the user. The label is how we caption the input to provide a better experience for our users.

## Follow Along

We will create a step-by-step login form; we'll start simply by creating a blank text input field.

```
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <input />
      </form>
    </div>
  );
}

export default App;
```
This only renders a basic text input field, but already we could ask a couple of questions. First, if all we're rendering is an `<input>`, then why are we bothering to put it inside a `<form>`? Second, there are a lot of different kinds of `<input>`'s, how does this one know to be a text input? The answer to the first question has to do with the form being stateful, as we'll see soon. To some extent, the `<form>` tag will be able to keep track of what its children are doing. As for the second question, a basic text field is what an `<input>` tag defaults to, but this isn't very semantic, is it? Another way to say it is that this code isn't very "self-documenting," meaning other developers looking at our code in the future might have a harder time understanding what it's for. What's even worse is that screen readers might have difficulty parsing what it's for. A trivial effort from us can mean a world of difference for a future developer or for someone using a screen reader.

Let's do better by making this code friendlier to developers and screen readers alike.

```
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <label>
          Username:
          <input type="text" />
        </label>
      </form>
    </div>
  );
}

export default App;
```

Better. Now screen readers, users, and fellow developers should have an easier time understanding this input.

##  Challenge






[Previous](../README.md) | [Next](./Object_2.md)