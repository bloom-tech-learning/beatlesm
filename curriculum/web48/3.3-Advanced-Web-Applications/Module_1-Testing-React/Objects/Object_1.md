# Objective 1 - Test React Components as the Props Change

## Overview

Today we're going to continue working with React testing library to test rendered DOM elements. This objective will focus on testing data being passed as props and testing props changes that may happen in a component.

In some cases, when props are updated, you'll want to run a second test on the same component. With our previous knowledge of React testing library, this would have been not easy. Still, thankfully there is a built-in method called ```rerender()``` that allows us to look at a component with new props pretty easily.

To do this, we need to add the ```rerender``` function when setting up our test for use in testing the component after the prop has been updated.

Let's look at an example where we have some component called PhoneNumber that the user will update with their phone number. We want to show an error message when the component is empty but pass the test after the user puts in a number between 0 and 10.

```
// name test
test("entering an invalid value shows an error message", () => {
  // pull in testing properties - add rerender and debug
  const { getByLabelText, getByRole, rerender } = render(
    <PhoneNumber />
  );
  const input = getByLabelText(/favorite number/i);
  // update prop
  fireEvent.change(input, { target: { value: "2025550113" } });
  // test component
  expect(getByRole("alert")).toHaveTextContent(/the number is invalid/i);
  // test prop updates
  rerender(<PhoneNumber phoneNumber={"2025550113"} />);
});

```

How does this work in practice? In the example above, we are interested in a component called ```PhoneNumber```. Since the first test tests the component before the prop updates, the test will fail and show an error message. However, once the user inputs their number, the second test (the rendering) should pass if you were to run this code in your console; that's what you'd see.

### Assert Content is not Rendered

In some cases, we want to make sure that content is not rendering on the DOM. For example, if a component should show up on click or, really any time after pageload. React testing library isn't exactly built for this as all ```getBy``` assertions return an error if they can't find the thing they're searching for (if a return is ```null```). Luckily there is a workaround here - the assertion called ```queryByRoll``` (or any ```queryBy``` assertion), will return ```null``` instead of an error. This let's us query for something this isn't supposed to be on the DOM. It also allows us to use an assertion like ```.toBeNull()``` or ```toBeFalsy()```, and then tests will start passing even when no content is rendered.

```
test("entering an invalid value shows an error message", () => {
  // pull in testing properties - add rerender
  // render the component without a prop
  const { getByLabelText, getByRole, queryByRole, rerender } = render(
    <PhoneNumber />
  );
  const input = getByLabelText(/favorite number/i);
  // test component
  expect(getByRole("alert")).toHaveTextContent(/the number is invalid/i);
  // test prop updates by rerendering component with different props
  rerender(<PhoneNumber phoneNumber={"2025550113"} />);
  // assert that the error message is NOT being rendered (optional)
  expect(queryByRoll("alert")).toBeNull();
});
```

##  Follow Along

In this section, we will continue building tests for the dog images app from the previous module. In this example, a parent component is in charge of fetching the data from dog.ceo, and a child component receives that data as a prop and displays the dog images on the page. For this example, we will render the dog images into a new component after the initial rendering of the page. Next, we need to test if the dog images appear on rerendering.

This means we want to test the child component. First, we will test that it renders a "getting data" message when passed an empty array as a prop. Then we will rerender the component and pass down our actual data to simulate the parent component receiving data from the API and passing that data down to this child component.

Note that this means we don't have to test the async function or even the event that kicked off the API call. Instead, we render what this component looks like when it first mounts with no data and what it looks like when it receives new props and rerenders.

1.  Create test and pull in relevant matchers from react testing library.

```
//import libraries
import React from "react";
import { render } from "@testing-library/react";
import DoggoImages from "./DoggoImages";

test("renders dog images from API", () => {
  // Render the component with an empty array
  const { getAllByTestId, rerender } = render(<Doggos images={[]} />);

  // Assert that there are no dog images rendered yet
  expect(getAllByTestId(/doggo images/i)).toHaveLength(0);
});

```

2.  Update prop by passing a user input. Test updated prop using ```rerender```.

```
//import libraries
import React from "react";
import { render } from "@testing-library/react";
import DoggoImages from "./DoggoImages";

test("renders dog images from API", () => {
  const doggoUrls = [
    'url-one.jpg', 'url-two.jpeg', 'url-three.jpg'
  ]
  const { getAllByTestId, rerender } = render(<DoggoImages images={[]} />);

  expect(getAllByTestId(/doggo images/i)).toHaveLength(0);

  // We will rerender the component with our dummy data passed in as the new props
  rerender(<DoggoImages images={doggoUrls} />);

  // Assert that we now have dog images rendering!
  expect(getAllByTestId(/doggo images/i)).toHaveLength(3);
});

```

## Challenge

Find an example of updating props in a previous project. Then, design a ```rerender``` test that will assert one state after the component first renders and assert a different state after the component renders again with new props.




[Previous](../README.md) | [Next](./Object_2.md)
