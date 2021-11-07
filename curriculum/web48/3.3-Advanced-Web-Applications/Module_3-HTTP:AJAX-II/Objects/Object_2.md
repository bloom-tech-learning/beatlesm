#   Objective 2 - Make DELETE Requests to an External API Using Axios

##  Overview

The ```DELETE``` ```HTTP request``` method is the "D" in CRUD. We use this to delete or destroy data that lives away from our webpage. When we call .delete, we're instructing the server to remove some information somewhere. Typically we initiate deletion by sending some identifying information on the URL parameter along with our requested URL string. The URL string will be a dynamic field that we'll need to ensure matches the resource we want to destroy.

REMEMBER body objects (or data) objects are to be used with PUT, POST, and PATCH (we don't need to go into patch here). Don't expect the ```axios.delete()``` method to be able to take in a data object

```
axios
    .delete(`http://somecoolurl.com/${someDynamicId}`)
       .then(response => {
         response is the response we get back from the server
         usually on a positive response, we either re-set the state in React OR we navigate to the next page etc.
       })
       .catch(err => {
         if something goes wrong, we handle any errors here
       });
```

## Follow Along

The last part of our app will be the delete functionality. Here is the [CodeSandbox](https://codesandbox.io/s/n4kx9lqx40)

We are going to work on deleting a quote. To set this up, we have a quote displayed in the delete tab. You would get to this page in real-world apps by clicking on a quote in some quotes list. There is a delete button on this page, and in that real-world app, there may also be a way to delete a quote straight from the quote list.

There is one final thing to note. Deleting is dangerous. Oftentimes, delete buttons invoke some confirmation message, usually in a modal, that asks if you are sure you want to delete that thing. We won't worry about that here, but consider it when you are implementing deletes in the future.

In ```index.js```, there is a ```deleteMessage``` function. Let's call ```axios.delete``` and pass in the URL. The endpoint will be ```/quote/:id```. Like the put function, ```:id``` here is a dynamic variable that will be the id of whatever item you are deleting. Just hardcode any number in there for this example. Also, add your ```.then()``` and ```.catch()``` and console.log the ```response``` and ```err``` inside those:

```
deleteMessage = () => {
  axios
    .delete(`https://lambda-school-test-apis.herokuapp.com/quotes/42`)
    .then(response => console.log(response))
    .catch(err => console.log(err));
};
```
Pass ```deleteMessage``` down to the ```DeleteMovieQuoteForm``` component. Then we'll go to ```DeleteMovieQuoteForm.js``` and invoke ```this.props.deleteMessage```.

index.js

```
<DeleteMovieQuoteForm deleteMessage={this.deleteMessage} />
```

DeleteMovieQuote.js

```
deleteMessage = e => {
  e.preventDefault();
  this.props.deleteMessage(this.state.movieQuote);
};
```

Now we can make some requests and check out the console logs. They are very similar to the logs we were getting in the POST and PUT sections above.

We are going to handle this request like we did with ```POST``` and ```PUT```. On state we have ```deleteSuccessMessage``` and ```deleteError```. Let's set our successMessage to state in our ```.then()``` and the error message to state in the ```.catch()```. Just like before, we'll clear out the opposite state property in each case:

```
deleteMessage = () => {
  axios
    .delete("https://lambda-school-test-apis.herokuapp.com/quotes/42")
    .then(response => {
      this.setState({
        deleteSuccessMessage: response.data.successMessage,
        deleteError: ""
      });
    })
    .catch(err => {
      this.setState({
        deleteSuccessMessage: "",
        deleteError: err.response.data.Error
      });
    });
};
```
Then pass down ```deleteSuccessMessage``` and ```deleteError``` to ```deleteMovieQuoteForm```, and make some requests!

```
<DeleteMovieQuoteForm
  deleteMessage={this.deleteMessage}
  deleteSuccessMessage={this.state.deleteSuccessMessage}
  deleteError={this.state.deleteError}
/>
```

## Challenge

With the app finished, you can open the dev tools one last time and watch the network requests going out to our server. Note the following:

### Header tab

- Request URL (notice the id there)
- Request method
- Status code
- Request Payload (or lack thereof)

### Preview tab

- Server response

### Reponse tab

- Raw server response

### Timing

- Total request time in ms







[Previous](./Object_1.md) | [Next](./Understanding.md)