#   Objective 1 -Describe What a Component is and Identify Different Parts of a Component

## <span style="color:red">Overview</span>

### Components
A component comprises several parts: HTML, CSS, or JavaScript brought together for reuse in a website or application.

####    Components - HTML:
When building HTML with a component mentality, you need to ask the question: "What am I trying to display from my data?"

Because we are focused on user interface concepts, we don't need to access a database at this point. For us, static HTML is data since it is, after all, what we're trying to display.

Review the following code:

```
<div class="custom-buttons">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
  <button>Button 4</button>
</div>
```

Notice we have repeating <button></button> tags. This is an opportunity for us to think about using our CSS and JavaScript to create multiple buttons regardless of how many buttons we have to work with. The HTML gives us a great starting point for a button component, but we need to style it for reuse.

### Components - CSS:
Writing CSS for components is more about rationale than syntax. Components should be modular or stand-alone. With that in mind, you should try to think of your component CSS in a way that could be moved around at any moment and not reliant on any other styles being in place.

One way that can help you control your styles is to use a specificity chain that only matches up with your component. You could use a specific class name to accomplish this:

```
<div class="custom-buttons">
  <button class="custom-btn">Button 1</button>
  <button class="custom-btn">Button 2</button>
  <button class="custom-btn">Button 3</button>
  <button class="custom-btn">Button 4</button>
</div>
```
Naming conventions vary wildly in the workplace. The recommendation is to adjust to the standards decided on by your employer.

If you're using a preprocessor, a common practice is to have your preprocessed file named after the component. You could then import your component name into the main file. Here is an example of the import you could use and then what the file could look like:

```
@import custom-btn.less
```
```
.custom-btn {
  // custom styles here
}
```

You may be thinking, "wait, that's it?" Yep! Using components is as simple as building styles so that they don't rely on any other element on the page and don't bleed over into another component.

### Components: JavaScript:

JavaScript is used to consume the data and output the content into the DOM. JavaScript's involvement in components is the glue that ties everything together. We can use Javascript to consume the HTML and return a component version of it! The how-to of JavaScript will be explained in greater detail throughout the rest of our objectives.

## Follow Along

Let's identify component patterns in the wild. Let's go to a social media platform and discuss how components are used.

## Challenge

Go to your favorite social media platform and practice identifying how components are used throughout the app. Screenshot a component and try recreating the HTML, CSS. You could even try to create simple DOM interactions in JavaScript.




[Previous](../README.md) | [Next](./Object_2.md)