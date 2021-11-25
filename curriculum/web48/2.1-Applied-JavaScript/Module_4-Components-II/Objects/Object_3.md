# Objective 3 - Iterate Over a List of Data Creating a New Component for Each Item and Attaching that Component to the DOM

## <span style="color:red">Overview</span>

In the next lesson, we will learn how to retrieve dynamic data, but we will build and use our array for now. Let's imagine that this data can change and may not always look like how we built it. We want a way to create components based on the data present. This data can come in many different forms. In this simple case, we are using an array of strings:
```
const data = [
    "Button One",
    "Button Two",
    "Button Three",
    "Button Four"
]
```
Let's use the buttonCreator function from the last objective:

```
function buttonCreator(buttonText){
    const button = document.createElement('button');

    button.textContent = buttonText;

    button.classList.add('button');

    button.addEventListener('click', (e) => {
        console.log('clicked!');
    });

    return button;
})
```

### .forEach

One of the simplest array methods is .forEach - it runs the array through a loop, passing each item to our callback function. It doesn't return a new array or mutate the data at all (unless we tell it to). .forEach is a simple way to iterate over the array, create components, and add them instantly to the DOM.
```
data.forEach((arrayItem) => {
  let newButton = buttonCreator(arrayItem);

  parent.appendChild(newButton);
});
```
That was super simple! Just like that, we created a new component for each item in the array and added it to the DOM. No matter how many items are in the array, it will still work. One downside to this method is that we instantly add the items to the DOM; what if we wanted to create the components and add them at a different time?

### .map
We know that .map returns a new array with the items transformed (by our callback). We can then do whatever we please with this array.
```
let newComponents = data.map((arrayItem) => {
  let newButton = buttonCreator(arrayItem);

  // Remember, we always need to return something when we use .map
  return newButton;
});
```
Now that we have an array of DOM elements (components), we can do whatever we'd like with them. We can wait to add the components to the DOM or manipulate them further; the sky's the limit! Let's add them to the DOM now, using .forEach
```
newComponents.forEach(component => {
  parent.appendChild(component);
});
```


[Previous](./Object_2.md) | [Next](./Understanding.md)

