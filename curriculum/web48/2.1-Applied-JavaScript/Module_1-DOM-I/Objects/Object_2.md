# Objective 2 - Use DOM Selectors, and Describe the Differences in the Behavior of Each

## <span style="color:red">Overview</span>

###  DOM Selectors
Now that we know how to access the DOM using Javascript, we need to select individual elements (or groups of them). Doing so will give us access to all live elements and allow us to manipulate them.

To manipulate elements on the DOM, we need to select them. There are many ways of doing this; for example, we can select the body and the head by asking for them (document.body, document.head). But, when we want to go deeper, that's where things get complicated. Thankfully, ```document``` has several built-in methods for accessing the exact element(s) we want.

**It is important to note that all of these methods are case-sensitive. If you are unsure of the case while using them, please refer to the official documentation.**

```getElement``` Methods

These are the original methods for selecting elements from the DOM. They each take a single string as the only argument, containing either the id or class you are looking for.

```
document.getElementsByTagName('p');
```

This method will take a single string as an argument containing the element name of the elements you want to select. It will return an array-like object called an ```HTMLCollection``` containing all the elements that contain the element name supplied. We will discuss what an HTMLCollection is after we talk about the rest of our selector methods.

```
document.getElementById('idName');
```
This method will take a single string as an argument containing the id of an element, search through the DOM, and return the matching element.

document.getElementsByClassName('className');
This method will take a single string as an argument containing the class of the elements you want to select. It will return an array-like object called an HTMLCollection containing all of the elements that hold the given class.

querySelector Methods
These are the newest element selection methods added to the DOM. These methods allow us to select element(s) based on CSS style selectors (remember . is class and # is id). Each method takes a string containing the selectors and returns the element(s). Note - we can select by element, id, class, or others with both methods.

document.querySelector('.custom-style');
This method will search for and return the first element that matches the value passed into the method. Remember that the biggest change from the older DOM selection methods is that we now need to pass the proper CSS selector into the argument.

If we passed ('custom-style') and not ('.custom-style') we would error out.

document.querySelectorAll('queryString');
This method will search for and return ALL elements matching the query string. This method returns these elements in an array-like object called a NodeList

The Difference between HTMLCollection, NodeList, and Array
When we use getElementsByClassName() or querySelectorAll() we get back either an HTMLCollection or a NodeList respectively. We refer these to as 'array-like objects.' We have seen an array-like object before (the arguments object in a function). They both have numerical zero-based indices and the length property, but that is all they share with an Array. NodeList does take it one step further, and has access to .forEach. There are no .reduce or .map or any other array method.

Pro tip: The Array class contains a method we can use to create an array from an array-like object, called .from(). To use this, we would give .from the array-like object as its only argument.

Array.from(arrayLikeObject)

## Follow Along

### DOM Investigation

Let's investigate the DOM together by visiting a live website and updating the DOM. Follow these steps in order:

**Prerequisite:** This tutorial assumes you are using Google Chrome. You can get similar results in any other browser, but these steps were tailored for a chrome experience.

1.  Navigate to [lambdaschool.com](https://www.bloomtech.com/)
2.  [(Links to an external site.)](https://www.bloomtech.com/)
3.  Right-click on the main heading, and you should see a dropdown with an option to inspect element. Click that option, and chrome developer tools should activate.
4.  The developer tools should be showing the selection you made when you right-clicked. Double click the content of the heading. You should now be able to edit the text of the header.
5.  Update the text with anything you'd like. For this example, I will update the text to say, "Hello there!" You won't see any changes until you deselect the content in the chrome developer tools.
6.  Now try updating the content and HTML of other elements on the page.

Notice that if you refresh the page, the changes you made are gone! That is because the elements you were editing existed in the DOM and were not permanent!

You now have experience editing the DOM without writing code. Go check out the challenge below to see the DOM inside the console!

## Challenge

Open the console in your web browser and enter console.log(document);.

This should make the document appear on the screen; play around with it for a minute. Notice how the document contains all HTML elements (otherwise known as DOM nodes) on the page. Hover over these nodes and notice how the element on the page is highlighted.





[Previous](./Object_1.md) | [Next](./Object_3.md)