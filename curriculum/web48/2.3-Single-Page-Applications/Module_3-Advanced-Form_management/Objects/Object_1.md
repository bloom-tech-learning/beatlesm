#   Objective 1 - control forms and form inputs (checkbox, dropdown) in custom forms

## <span style="color:red">Overview</span>

Until this point we've been working primarily with text inputs. Of course, forms can have many types of inputs, including: radio buttons, check boxes, passwords, file uploads, and more. You can view a full list of form input types here (Links to an external site.).

Some input types provide an additional challenge when trying to control forms.

### Checkboxes

####    Checked Attribute

Just like we set the `value` attribute of inputs of type "text", with checkboxes we care about the `checked` attribute.

In the example below both boxes would appear checked (and would be read-only, lacking an `onChange` handler):

```
<input type="checkbox" name="nameOfChoice" checked />
<input type="checkbox" name="anotherOne" checked={true} />
```

Without the `checked` attribute, or with the attribute set to `false`, the boxes would appear unchecked:

```
<input type="checkbox" name="nameOfChoice" />
<input type="checkbox" name="anotherOne" checked={false} />
```

####    Controlling Inputs
That brings us to our next point, controlling inputs. Controlling checkboxes, buttons, and other non-text fields can be tricky.

The following example would create a checkbox with a checked status that depends on state:

```
<label>
  Check This Box If You Are Going:
  <input
    name="isGoing"
    type="checkbox"
    checked={formState.isGoing} // The expression `formState.isGoing` evaluates to either true or false.
    onChange={handleChange}
  />
</label>
```

### Dropdowns

Dropdown menus are really important for gathering data because they insure data quality. They are built with the `<select>` element, with `<option>` elements nested inside.

The dropdown below draws its value from `formState.bestie`, which contains a string ("1" through "4"). If the string were "3" for example, the "Monica" option would display as selected.

```
<label>
  Select Your Best Friend:
  <select value={formState.bestie} onChange={handleChange} name="bestFriend">
    <option value="1">Ross</option>
    <option value="2">Rachel</option>
    <option value="3">Monica</option>
    <option value="4">Phoebe</option>
  </select>
</label>
```

## Follow Along

Let's build out a form to gather user information with radio buttons, a checkbox, and a dropdown.

1.  **Set up form.** Using our knowledge from the "form management" module, we'll first set up a basic form with a single text input. We will spin up some additional state to drive the rest of the inputs we will create:

```
import React, { useState } from 'react';

export default function App() {
  // The state `form.isGoing` will drive a checkbox and is a boolean, whereas the rest are strings
  const [form, setForm] = useState({ user: '', ageRange: '', state: '', isGoing: false });

  const handleChange = event => { console.log('changing!') };

  return (
    <div className="App">
      <form>
        <label>User Name:
          <input value={form.user} name="user" type="text" onChange={handleChange} />
        </label>
      </form>
    </div>
  );
}
```

2.  **Add Radio Buttons**. If we wanted to gather categorical data like an age range, we might use radio buttons. Note how all the inputs of type "radio" share the same name and have hard-coded values. The checked attribute is a boolean which is calculated using state:

```
  <label>13-18
    <input
      name="ageRange" type="radio" value="a"
      checked={form.ageRange === "a"} onChange={handleChange}
    />
  </label>

  <label>19-24
    <input
      name="ageRange" type="radio" value="b"
      checked={form.ageRange === "b"} onChange={handleChange}
    />
  </label>

  <label>25+
    <input name="ageRange" type="radio" value="c"
    checked={form.ageRange === "c"} onChange={handleChange}
  />
  </label>
```

3.  **Add a Dropdown**. Another way to gather categorical data is through a dropdown. Let's add one here to ask which state the user lives in. For illustration purposes, we'll only add a few states, but you could easily use an array and `.map` method to add all 50 states.

```
<label>State:
  <select value={form.state} name="state" onChange={handleChange}>
    <option value="">--select a state--</option>
    <option value="AL">Alabama</option>
    <option value="AK">Alaska</option>
    <option value="AZ">Arizona</option>
    <option value="AR">Arkansas</option>
  </select>
</label>
```

4.  **Add a checkbox**. Checkboxes are a great way to gather boolean data.

```
<label>RSVP:
  <input
    name="isGoing"
    type="checkbox"
    checked={form.isGoing}
    onChange={handleChange}
  />
</label>
```

5.  **Implement the change handler**. Since all the inputs get their values (or checked statuses) from state, we need a working change handler if we ever want those values to change!

Note that every time an input suffers a "change" event, our code needs to figure out whether it was a checkbox or something else. This information can easily be found inside `event.target`, which points to the input that fired the event. For checkboxes we care about the boolean stored inside their "checked" attribute, and in the case of other inputs we are interested in the string contained inside their "value" attribute.

```
  const handleChange = event => {
    // Pull out the info of interest
    const { name, type, value, checked } = event.target;
    // Find out which value to use (the actual "value" of the target or its "checked" in the case of a checkbox)
    const updatedInfo = type === 'checkbox' ? checked : value;
    // Update state
    setForm({ ...form, [name]: updatedInfo });
  }
```

## Challenge

Add a non-text field to a project from the form management lessons.



[Previous](../README.md) | [Next](./Object_2.md)