# Objective 2 - validate user input in forms

## <span style="color:red">Overview</span>

You know when you try to make your password "password" and the form tells you to chose a stronger password? That's called validation. There are many ways to validate input before you submit the form to a server or other service and they're all really useful for insuring the quality of data.

One common strategy is to compare the input string to a regular expression model of expected characters and handle the input based on the results of the comparison.

Another popular method is to have a library such as `Yup` handle the validation for us - yup has built in methods to deal with email addresses, passwords, strings, numbers, and more. You can read the full documentation [here](https://github.com/jquense/yup).

###  Validating a String

Before we move into the follow along tutorial, lets look at how we could use Yup to validate if an input was a string. This is in a lot of ways the "Hello World" of form validation.

First, you'll need to install yup with `npm install --save yup`.

Then, we simply declare a schema with `let schema = yup.string();` and test our schema on a new line with `await schema.isValid('hello world');`. This would return "true" since 'hello world' is a string.

###  Validating a Form

Form validation is slightly more complicated but it follows the same logical pattern. First we declare a schema, then we validate data.

In a forms app, the schema defines what the form looks like. It is kind of like a form outline, telling yup what the existing fields are and how they should be validated. We'll walk through this process below.

You can always chose to use additional helper libraries, like Formik, to validate forms, but for learning purposes it is best to understand the validation process with just Yup.

## Follow Along

We'll start with a Yup login form consisting of an email and password field.

```
import React from "react";

  // Basic submit event handler and console.log to confirm form submitted
  const formSubmit = e => {
    e.preventDefault();
    console.log("submitted");
  };

  // Create state for the form values. We will want to update state later on, but for now... empty strings!
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    website: "",
    password: ""
  });

// Define form elements: email, password and terms/conditions
function LoginForm() {
  return (
    <form>
      <label htmlFor="emailInput">
        Name
        <input id="emailInput" type="email" name="email" placeholder="Email" />
      </label>
      <label htmlFor="passwordInput">
        Password
        <input id="passwordInput" type="password" name="password" placeholder="Password" />
      </label>
      <label htmlFor="termsInput">
        Do you agree to the terms and conditions?
        <input id="termsInput" type="checkbox" name="terms" />
      </label>
      <button>Submit!</button>
    </form>
  );
```

To start the validation process, add Yup as a dependency and import it into the component file. In the command line we'll type:

```
npm install --save yup
```

and in our file:

```
import * as Yup from "yup";
// You may see this as (import Yup from 'yup') in some tutorials, the above method seems less buggy
```

Next we will define our schema - which is basically a description of what each named field is supposed to look like so that Yup can pass or fail the input. Give it a shape of all the elements in your form. Depending on what you're trying to validate you give it strings, checkboxes, etc. That might look like so:

```
const formSchema = Yup.object().shape({
  email: Yup
    .string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  password: Yup
    .string()
    .required("Password is Required")
    .min(6, "Passwords must be at least 6 characters long."),
  terms: Yup
    .boolean()
    .oneOf([true], "You must accept Terms and Conditions")
    // required isn't required for checkboxes.
});
```

The `formSchema` is a lot like a `propType` definition because you need to tell Yup what shape the data is supposed to take.

The customization part is pretty straightforward. For the `email` field, Yup is looking for a string that looks like an email-pattern, and you need to have this field (it's `required`).

The `password` schema shows that you expect a string with a minimum of 6 characters. Additionally, the user shouldn't be able to submit the form without a password.

There are tons of options available in a schema. Look up how to use this powerful tool [here](https://github.com/jquense/yup).

Next up, we'll create state for the form values. Just like earlier, this is the initial state values for each input in the form.

Next up, state for error messages.

```
  // State for the error messages
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    terms: ""
  });
```
We're going to change the state of the button so that when we're filling out the form it won't be able to submit until the validation passes. The forms will submit even if the validation is failing, we're using the button's state to disable the button. Ultimately though, the form state still controls wither or not the form can be submitted.

```
  /* Each time the form value state is updated, check to see if it is valid per our schema.
  This will allow us to enable/disable the submit button.*/
  useEffect(() => {
    /* We pass the entire state into the entire schema, no need to use reach here.
    We want to make sure it is all valid before we allow a user to submit
    isValid comes from Yup directly */
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);
```

The last thing we need to do before validating the form is set up an event handler called `inputChange` and pass in the event parameter.

```
  const inputChange = e => {
    // let's pull the information of interest from the target of the event
    const { name, value } = e.target
```

Finally, lets set up our validation. This is probably the trickiest part of form validation. Here, our synthetic event handler holding the forms input data will be tested against our schema from before. Then, we'll use some conditional logic with .then and .catch to display error messages or not, and to change the state.

```
    // yup.reach will allow us to "reach" into the schema and test only one part.
    // We give reach the schema as the first argument, and the key we want to test as the second.
    yup
      .reach(formSchema, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        setErrors({
          ...errors, [name]: ""
        });
      })
      // if the validation is unsuccessful, we can set the error message to the message
      // returned from yup (that we created in our schema)
      .catch(err => {
        setErrors({
          ...errors, [name]: err.errors[0]
        });
      });

    // Whether or not our validation was successful, we will still set the state to the new value as the user is typing
    setFormState({
      ...formState, [name]: value
    });
  };
```

When validation isn't successful we need to display an error message to the user in the JSX, letting them know how to fix the problem.

```
function LoginForm() {
  return (
    <form>
      <label htmlFor="emailInput">
        Name
        <input id="emailInput" type="email" name="email" placeholder="Email" />
      </label>
      { errors.email.length > 0 && <p className="error">{errors.email}</p> }

      <label htmlFor="passwordInput">
        Password
        <input id="passwordInput" type="password" name="password" placeholder="Password" />
      </label>
      { errors.password.length > 0 && <p className="error">{errors.password}</p> }

      <label htmlFor="termsInput">
        Do you agree to the terms and conditions?
        <input id="termsInput" type="checkbox" name="terms" />
      </label>

      <button>Submit!</button>
    </form>
  );
```

Next, we will show you how to actually DO something with this beautiful form data in the form of a POST request!

##  Challenge

Add validation to any test field from your Form Management module guided project or challenges.




[Previous](./Object_1.md) | [Next](./Object_3.md)