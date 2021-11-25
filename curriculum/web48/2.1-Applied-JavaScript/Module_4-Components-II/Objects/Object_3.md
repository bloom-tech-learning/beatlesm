# Objective 3 - Iterate Over a List of Data Received From a Server, Creating a Set of Components and Adding Them to the DOM

## <span style="color:red">Overview</span>

Putting everything together, we can now build a component function, request dynamic data from a server, build components based on that data, and add those components to the DOM.

Let's see it in action:

First we will build our component creator function:

```
function buttonCreator(buttonTitle){
    let newButton = document.createElement('button');
    newButton.textContent = buttonTitle;
    newButton.classList.add('button');

    return newButton;
}
```

Next, let's grab some data. Once we receive the data, we will map over it and create components out of it. Then we can add it to the DOM:

- One important thing to note is that the data that comes back from the server will be formatted differently for every server. It is good practice to either read the documentation of the server you are using, or inspect the data yourself before attempting to use it. In this example the `response` object will have a key on it called `data` that key will have a value of an array with a list of strings.

```
axios.get('http://fakeserver.com/data')
    .then( response => {
        // Remember response is an object, response.data is an array.
        response.data.forEach( item => {
            let button = buttonCreator(item);
            parent.appendChild(button);
        })
    })
    .catch( error => {
        console.log("Error:", err);
    })
```

And there you have it! We have retrieved data, created new components based on that data, and added them to the DOM!


[Previous](./Object_2.md) | [Next](./Understanding.md)

