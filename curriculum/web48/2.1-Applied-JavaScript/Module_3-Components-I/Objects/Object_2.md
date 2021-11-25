# Objective 2 - Write a Function that Utilizes createElement and Returns a New DOM

## <span style="color:red">Overview</span>

Sometimes it makes sense to build several elements with similar functionality. For example, many components have click handlers that use the same callback, or a group of components shares the same style. This verbiage can be frustrating, but thankfully, it isn't necessary to repeat yourself in code. Utilizing a JavaScript function, we can create dynamic components on the fly and add them to the DOM.

### createElement

We know about the `.createElement` method in our previous lessons. We learned that it could build DOM elements that we can later add to the DOM.

We also learned that once we create an element, we can use any property or method on it as we use on an element selected from the DOM. We can even add event listeners to the newly formed element.

```
let button = document.createElement('button');

button.textContent = 'Button 1';

button.classList.add('button');

button.addEventListener('click', (e) => {
    console.log('clicked!');
});

parent.appendChild(button);
```

### functions

Now, sticking with that last example, let's imagine we want to create many buttons on our page. We could very quickly repeat the code for each button we want to create, appending them to the parent each time. Although from our knowledge so far, we know that repeating ourselves is something we want to avoid. We can easily compartmentalize all of the code into a function. Looking back on that last example, can you identify the pieces that might change? Anything that may change, we can add in as an argument; everything else will stay the same. This function will allow us to create components.

```
function buttonCreator(buttonText){
    const button = document.createElement('button');

    button.textContent = buttonText;

    button.classList.add('button');

    button.addEventListener('click', (e) => {
        console.log('clicked!');
    });

    return button;
}

let firstButton = buttonCreator('Button 1');

let secondButton = buttonCreator('Button 2');

parent.appendChild(firstButton);
parent.appendChild(secondButton);
```

And just like that, we can create as many new `button` components we want without repeating ourselves!




[Previous](./Object_1.md) | [Next](./Object_3.md)