#   Objective 1 - Define What End-to-End Testing is and Explain its Importance

## <span style="color:red">Overview</span>

Writing quality code isn't possible without tests. It's simply too difficult to catch every error on your own. In your careers, you'll be expected to write and understand different types of testing to speed up your workflow, prevent bugs, and integrate systems. JavaScript developers write four types of tests, and the tests work together to help diagnose problems.

It's worth noting that these designations are just words developers use to communicate their ideas—there aren't major syntactical differences between different types of tests like there are with frameworks or languages. Instead, the classifications have more to do with scope, cost, and speed. In short, all testing, in all forms, automates manual processes. We'll examine each of these types below and focus on End-to-End (E2E) testing in our lesson today.

### Static

Static tests catch typos and errors as you write your code. If you have any debugging software in your IDE, it is running static tests.

### Unit

Unit testing verifies that individual, isolated parts of your code (like functions) work as expected. For example, unit testing can verify that a return is of a certain type or that a particular string or image is rendered on a page.

### Integration

Integration testing works to test several units at one time - verifying that they work together as expected. For example, if you have a function that relies on the output of another function, you might write an integration test to confirm that they're working together as expected. For example, you might simulate a user's action to enter login credentials, submit a form, and verify that the submission links a user to a new page. Here, you're not testing the full app, but not testing just one function, either.

### End to End

As you might imagine, end-to-end testing looks at the entire user experience from end to end. End-to-end testing asks, "can a user accomplish an action?". End-to-end tests focus on UI and mimic how a user might interact with an app, simulating actual events like button clicks, scrolls, form submits, and the like. You can picture end-to-end tests like imaginary friends who use your app and point out all the non-intuitive parts or bugs that a user would encounter while using your website.

In this module, we'll focus on end-to-end testing using a tool called Cypress. Eventually, only ~10% of the tests you run will be end-to-end tests. However, given their visual nature and focus on UI, E2E tests are a great place to start if you're new to testing.

### Arrange, Act, Assert

All testing uses the framework "arrange, act, assert," where a test is written to do the following.

1.  Arrange - Set up a webpage, form input, etc.
2.  Act - Simulate a user action, like a button click or form input.
3.  Assert - Verify that the simulated user action resulted in the expected output.

## Follow Along

Consider the examples below and classify each as `End to End` or `other` type of testing.

### Example 1

>   A test that loads a web page and simulates user sign up, log in, and navigation processes.

This is an example of an end-to-end test because it simulates an entire user experience.

### Example 2

>   A tool that debugs a js file, highlighting locations that are missing semi-colons, parentheses, and other syntax.

This is not an example of E2E testing, even though it focuses on a whole file because it works at the static-test level to catch typos and errors as you write code.

### Example 3

>   A test which mimics a user filling out a registration form to verify that the user can submit a username and password on a button click.

This is tricky because it's one of those places where the line between integration testing and unit testing is blurry. It's important to remember that all of these tests are important. There is a different tool for every job and a different test for every code. As Kent Dobbs says, "All I'm interested in is whether I'm confident that when I ship my changes, my code satisfies the business requirements." This confidence, ultimately, is the end goal.

##  Challenge

Think of an example from your experience where writing an end-to-end test would have been helpful in your development process. Write a sentence or two explaining how you see testing being useful in this situation and send it to your TL.





[Previous](../README.md) | [Next](./Object_2.md)