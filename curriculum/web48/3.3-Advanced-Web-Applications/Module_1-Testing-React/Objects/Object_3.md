# Objective 3 - Test Asynchronous API Calls That Are Made in a Component

##  Overview

An asynchronous test is a special kind of test that does not complete right away, as it needs to wait for the results of one or more asynchronous operations. When writing asynchronous code, like when dealing with APIs, it's important to write asynchronous tests because other tests won't work as expected.

React testing library has a couple of helper functions for us to write these tests. The ```waitFor``` function from React testing library lets us tell the test that we need to wait for the async call to finish before continuing our assertions.

As mentioned before, we will also use the ```jest.mock``` function to make mocks of the asynchronous functions so we won't have to wait for the actual call to be made.

In the following tutorial, we'll walk through an example using API data. Like we did with non-asynchronous tests, we need to import components, render components, simulate an event, and run the test - the difference here is simply a few added functions to make calls asynchronous.

## Follow Along

Let's say we have a component that fetches data from the dog.ceo API when the user pushes a "Fetch Doggos" button. The component uses a function called ```fetchDoggos``` to make the API call. We have pulled this function out of the component and into an ```/api``` directory in our file structure to make it easier to test. We would write a test for this component following these steps:

### Imports

As usual, we need to import the required libraries for testing. In addition to our normal libraries, we'll import 'waitFor' to make our function run asynchronously, and we'll import our component ```fetchDoggos``` as ```mockFetchDoggos``` so that we don't have to wait for the actual call to be made.

- Import the regular ```react``` and ```@testing-library/react``` dependencies
- Also import ```waitFor``` from rtl
- Import ```fetchDoggos``` from the ```/api``` directory, and rename it to ```mockFetchDoggos``` so we know that it will be mocked - remember that a mock allows us to isolate a function from its dependencies.

```
// import libraries

import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { fetchDoggos as mockFetchDoggos } from "../api/fetchDoggos";
import Doggos from "./Doggos";

// set up test
test("renders dog images from API", async () => {});

```
### Mocking the Async Function

Next we need to set up the mock. Like before, we will create the mock outside of the ```test``` block to mock the fetchDoggos async function. Then, inside the ```test``` block we will tell the mock function with what data it should resolve. When the component makes the async request using our mocked function, it will resolve quickly with that data.

```
// import libraries
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { fetchDoggos as mockFetchDoggos } from "../api/fetchDoggos";
import Doggos from "./Doggos";

//create mock *before* setting up test
jest.mock("../ap/fetchDoggosi");

// set up test
test("renders dog images from API", () => {
  //mock resolved results
  mockFetchDoggos.mockResolvedValueOnce({
    message: [
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg"
    ]
  });
});
```
### Render, Query, and Fire Events

Render the component, query for the necessary elements, and fire the onClick event with ```userEvent```. This step should look familiar from our first lessons on react testing library as we haven't added any of the async functionality yet (other than importing ```waitFor```).

```
//import libraries
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { fetchDoggos as mockFetchDoggos } from "../api/fetchDoggos";
import Doggos from "./Doggos";

//set up test
jest.mock("../api/fetchDoggos");

test("renders dog images from API", () => {
  mockFetchDoggos.mockResolvedValueOnce({
    message: [
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg"
    ]
  });

  const { getByText } = render(<Doggos />);

  const fetchDoggosButton = getByText(/fetch doggos/i);
  fireEvent.click(fetchDoggosButton);
});

```
### Async/Await

At this point, the async call has been made. We need to tell our test that it is going to handle an async function by adding ```async``` right after the test name string, and before the callback function. This is using JavaScript's ```async/await``` syntax! Basically this will tell the function that it's going to do an async operation.

```
// add async function
test("renders dog images from API", async () => {
  //mock resolved results
  mockFetchDoggos.mockResolvedValueOnce({
    message: [
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg"
    ]
  });

  const { getByText } = render(<Doggos />);

  const fetchDoggosButton = getByText(/fetch doggos/i);
  fireEvent.click(fetchDoggosButton);
});
```

### await and the waitFor Function

Tell the function which async operation it needs to wait for. There are two related parts we need to set up here, then we'll be able to make our assertion.

- Use the ```await``` keyword to tell the function we're awaiting for the async operation to finish
- Use the ```waitFor&nbsp;function``` from RTL to wait for RTL to update the DOM so we can query for the dog images.
- Write an assertion in the ```waitFor``` functions callback function. Note that wait is usually required but certain assertions can work without it, you'll need to do research on a case by case basis to determine wither or not wait is required.

```
test("renders dog images from API", async () => {
  mockFetchDoggos.mockResolvedValueOnce({
    message: [
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg"
    ]
  });

  const { getByText, getAllByTestId } = render(<Doggos />);

  const fetchDoggosButton = getByText(/fetch doggos/i);
  fireEvent.click(fetchDoggosButton);
  // add await
  await waitFor(() => expect(getAllByTestId(/doggo-images/i)).toHaveLength(3));
});

```
### One Last Assertion

Finally, we will make sure that the correct function was called by adding an extra assertion, ```expect(mockFetchDoggos).toHaveBeenCalledTimes(1);```.

```
test("renders dog images from API", async () => {
  mockFetchDoggos.mockResolvedValueOnce({
    message: [
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg"
    ]
  });

  const { getByText, getAllByTestId } = render(<Doggos />);

  const fetchDoggosButton = getByText(/fetch doggos/i);
  fireEvent.click(fetchDoggosButton);

  // add new assertion
  expect(mockFetchDoggos).toHaveBeenCalledTimes(1);

  await waitFor(() => expect(getAllByTestId(/doggo-images/i)).toHaveLength(3));
});
```

## Challenge

Research on your own how to test async code using ```jest-axe``` and ```toHaveNoViolations``` for accessibility.





[Previous](./Object_2.md) | [Next](./Understanding.md)


