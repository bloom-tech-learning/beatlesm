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

```
document.getElementsByClassName('className');
```

This method will take a single string as an argument containing the class of the elements you want to select. It will return an array-like object called an ```HTMLCollection``` containing all of the elements that hold the given class.
```
querySelector Methods
```
These are the newest element selection methods added to the DOM. These methods allow us to select element(s) based on CSS style selectors (remember . is class and # is id). Each method takes a string containing the selectors and returns the element(s). Note - we can select by element, id, class, or others with both methods.
```
document.querySelector('.custom-style');
```
This method will search for and return the first element that matches the value passed into the method. Remember that the biggest change from the older DOM selection methods is that we now need to pass the proper CSS selector into the argument.

If we passed ```('custom-style')``` and not ```('.custom-style')``` we would error out.
```
document.querySelectorAll('queryString');
```
This method will search for and return ALL elements matching the query string. This method returns these elements in an array-like object called a ```NodeList```

The Difference between ```HTMLCollection```, ```NodeList```, and ```Array```

When we use ```getElementsByClassName()``` or ```querySelectorAll()``` we get back either an ```HTMLCollection``` or a ```NodeList``` respectively. We refer these to as 'array-like objects.' We have seen an array-like object before (the ```arguments``` object in a function). They both have numerical zero-based indices and the length property, but that is all they share with an Array. ```NodeList``` does take it one step further, and has access to ```.forEach```. There are no ```.reduce``` or ```.map``` or any other array method.

Pro tip: The ```Array``` class contains a method we can use to create an array from an array-like object, called ```.from()```. To use this, we would give ```.from``` the array-like object as its only argument.
```
Array.from(arrayLikeObject)
```
## Follow Along

##  Selector Tutorial

Let's get some practice using different selector methods. You can use this code (Links to an external site.) (Links to an external site) (Links to an external site.) or write your own.

Study this HTML first:
```
 <header>
    <h1 class="main-header">Selectors!</h1>
    <nav class="main-nav">
      <a href="#" class="nav-item">Home</a>
      <a href="#" class="nav-item">About</a>
      <a href="#" class="nav-item">Blog</a>
      <a href="#" class="nav-item">Contact</a>
    </nav>
  </header>
```
```
querySelector()
```
What if we wanted to select all the first a tags within our navigation? There are several ways to accomplish this task, but let's use ```querySelector()``` to get started.

When working with the DOM, we may want to re-use the reference several times in our code. Let's declare a ```const``` to hold our DOM reference:
```
const mySelection = document.querySelector('a');
```
Notice we had to use ```document``` in front of ```querySelector()``` that is because querySelector is a method of the document object.

Next, let's log the result of our selection.
```
const mySelection = document.querySelector('a');
console.log(mySelection);
```
We should see this log in the console:

```
"<a href='#' class='nav-item'>Home</a>"
```
We now have access to that element node in the DOM! What if we wanted to select multiple elements at once? We have just the method for that: 
```
querySelectorAll().
```
```
querySelectorAll()
```
If you recall from the introduction to selectors, ```querySelectorAll()``` will allow us to return an array-like object called a ```NodeList```. Let's set up a new const for our new selection:
```
const multipleSelections = document.querySelectorAll('a');
```

Notice that all we changed on the right side of the operator was adding an "All" to "querySelector." The returned value is very different though, check your console's log to see what happened. If you are using chrome developer tools, you will see something like this in your console:
```
NodeList(4)
  0: a.nav-item
  1: a.nav-item
  2: a.nav-item
  3: a.nav-item
  length: 4
  __proto__: NodeList
```

Wow, that is totally different than our result from ```querySelector()``` in the first example! We now have a ```NodeList``` and all of the nodes matching the ```a``` elements.

What can we do with a ```NodeList```? You can [dig deeper into the documentation](https://developer.mozilla.org/en-US/docs/Web/API/NodeList), but for our tutorial, let's see how it is "array-like."

Study this code:
```
const multipleSelections = document.querySelectorAll('a');
console.log(multipleSelections[2]);
```
Notice the multipleSelections[2]. That looks very similar to how we can use indices in arrays. The log result from the code above should read as follows:
```
"<a href='#' class='nav-item'>Blog</a>"
```
Accessing elements in this way is extremely powerful and will allow you to be creative if an HTML solution is not possible. For example, imagine you didn't have a class or ID to hook into; you could use the ```NodeList``` index to get the job done!

####  Don't Forget The Selector

When using ```querySelectorAll()``` don't forget it requires you to use the proper CSS selector. Using the same HTML example:

```
<header>
  <h1 class="main-header">Selectors!</h1>
  <nav class="main-nav">
    <a href="#" class="nav-item">Home</a>
    <a href="#" class="nav-item">About</a>
    <a href="#" class="nav-item">Blog</a>
    <a href="#" class="nav-item">Contact</a>
  </nav>
</header>
```
Use querySelectorAll() to select all the ```nav-item``` classes:

```
const multipleClasses = document.querySelectorAll('.nav-item');
```
Note that we had to type out the . in .nav-item. This trips up new developers to JavaScript all the time. If you were to log out the results of this session, you would see it's just a NodeList like before, but now it's using classes instead of the a element. Push yourself further by using the challenge below

###  Challenge

Finish the DOM selector requests based on given HTML, LESS, and JS - follow this link for the challenge. (Links to an external site.)

When the DOM is built, and the webpage is loaded, developers access it in the global Javascript object document. Document contains the entire hierarchy of the page, each element (or DOM node), and it also contains dozens of built-in methods and properties. We can use these methods and properties to manipulate what we see on the screen.

- Note: There are so many methods and properties on document (and its subsequent elements and collections) that it would take a lot longer to cover them all adequately. We will only be covering the few most commonly used. From this point forward, you will be expected to reference the official documentation to learn more about the different methods and properties available when your need arises for something other than what we have taught. This is an excellent habit to get into as we progress deeper into the course.

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