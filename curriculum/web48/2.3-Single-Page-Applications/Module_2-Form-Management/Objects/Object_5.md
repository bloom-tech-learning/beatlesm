# Objective 5 - Use Controlled Inputs to Manage Form Data

## <span style="color:red">Overview</span>

React components can break down into two categories - "controlled" and "uncontrolled" components. It is highly encouraged to use controlled inputs wherever we can to control the data on the DOM via state, rather than DOM elements like form inputs. Let's learn about how we can do that with our form.

## Follow Along

### Controlling the input with state

As mentioned earlier, we want our components to manage the data that is in our form. There are dozens of reasons why we want this power, from form validation to styling, but in this case, let's say that when the user clicks submit, we want to be able to clear the input fields automatically. For that, we'll need to "bind the value" of the inputs to the state. To do that, we'll add another attribute to our `<input>` - the `value` attribute.

```
<input value="Hi Lambda!">`
```

Using the value attribute forces the text inside the input field to correspond to the string assigned to it - in this case, "Hi Lambda!". Hardcoding it like this makes the input rather useless because now the user can't change the text. But, what if, instead of hardcoding the value attribute, we passed it a dynamic value from our state.

```
import React, { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user.name);
    console.log(user.password);
  };

  return (
    <div className="App">
      {console.log(user)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={event => handleChange(event)}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default App;
```

Notice the change? We went from

```
<input
  type='text'
  name='username'
  onChange={event => handleChange(event)}
/>
<input
  type='text'
  name='password'
  onChange={event => handleChange(event)}
/>
```

to this:

```
<input
  type='text'
  name='username'
  value={user.username}
  onChange={event => handleChange(event)}
/>
<input
  type='text'
  name='password'
  value={user.password}
  onChange={event => handleChange(event)}
/>
```

The inputs are controlled by state! The text in the input will only change if state changes. So, now, when the user types something into an input field, it updates our state. React notices our state has changed, so it triggers a re-render. When it evaluates what text should go in the input fields by looking at the `value` attribute, it notices it should put the data in its state into those fields, and the elements render with the user's input.

Why, oh why, would we go to such lengths to dictate the text of an input field 😩? Well, the truth is, sometimes you don't need to. It's a point of philosophical preference for some, keeping the unidirectional data flow as unidirectional as possible (state -> input). But in our case, we want to clear the input fields when we hit submit. And for that, our inputs need to do what their parent tell them to do. We can now do precisely that because we've attached the input's value attributes to our state.

```
const handleSubmit = event => {
  event.preventDefault();
  setUser({ username: '', password: '' });
};
```

Now when the user clicks submit, the state will be reset with empty strings. And since the state now dictates the value of the input fields, they'll be emptied as well.

Forms. They're no joke!



##  Challenge






[Previous](./Object_4.md) | [Next](./Understanding.md)


