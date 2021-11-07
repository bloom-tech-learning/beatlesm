# Objective 1 - Make PUT Requests to an External API Using Axios

## Overview

```PUT``` is the "U" in CRUD, and it stands for ```UPDATE```. We use the ```PUT``` method to change a resource's information. ```PUT``` takes in a body object like ```POST``` and identifies data that needs to be updated somewhere.

```
axios
    .put(`http://somecoolurl.com/${couldHaveDynamicId}`, updatedData)
       .then(response => {
         response is the response we get back from the server
         Whatever resource was changed should be reflected in our client
       })
       .catch(err => {
         if something goes wrong, we handle any errors here
       });
```

##  Follow Along

Let's build in the AJAX call for the same app. You can start with [this CodeSandbox](https://codesandbox.io/s/k353v1z79r) tutorial and follow along with the video.

We are going to work on updating a quote. To set this up, we built a form for the PUT request. Usually, you would be in charge of populating the form fields with whichever item you are updating, but we hardcoded a quote into state for this example. Keep in mind that populating the form fields in apps you build from scratch may take a bit of work.

Now, in ```index.js```, there is a ```putMessage``` function. Let's call ```axios.put``` and pass in the URL. This time the endpoint will be ```/quote/:id```. :id here is a lot like dynamic parameters in React Router. It is a dynamic variable that will be the id of whatever item you are updating. Just hardcode any number in there for this example. Also, add your ```.then()``` and ```.catch()``` and console.log the ```resonse``` and ```err``` inside those:

```
axios
  .put(`https://lambda-school-test-apis.herokuapp.com/quotes/76`)
  .then(response => console.log(response))
  .catch(err => console.log(err));
```

Also, pass in ```quote``` as a parameter to ```putMessage``` so we have the data we need to send to the server.

```
putMessage = quote => {
  axios
    .put(`https://lambda-school-test-apis.herokuapp.com/quotes/76`)
    .then(response => console.log(response))
    .catch(err => console.log(err));
};
```
Pass ```putMessage``` down to the ```PutMovieQuoteForm``` component. Then go to ```PutMovieQuoteForm```.js and invoke ```this.props.putMessage``` with the movie quote that is one state.

index.js

```
<PutMovieQuoteForm putMessage={this.putMessage} />
```

PutMovieQuote.js

```
putMessage = e => {
  e.preventDefault();
  this.props.putMessage(this.state.movieQuote);
};
```

Now we can make some requests and check out the console logs. They are very similar to the logs we were getting in the POST section above. So we are going to handle this request like we did the POST request. On state we have putSuccessMessage and putError. Let's set our successMessage to state in our .then() and the error message to state in the .catch(). And like before, we'll clear out the opposite state property in each case:

```
putMessage = quote => {
  axios
    .put("https://lambda-school-test-apis.herokuapp.com/quotes/76", quote)
    .then(response => {
      this.setState({
        putSuccessMessage: response.data.successMessage,
        putError: ""
      });
    })
    .catch(err => {
      this.setState({
        putSuccessMessage: "",
        putError: err.response.data.Error
      });
    });
};

```

Then pass down ```putSuccessMessage``` and ```putError``` to ```PutMovieQuoteForm```, and make some requests!

```
<PutMovieQuoteForm
  putMessage={this.putMessage}
  putSuccessMessage={this.state.putSuccessMessage}
  putError={this.state.putError}
/>
```

## Challenge

Open the project in the browser, click on the network tab. Make a successful request and a bad request. Then, click on the requests and explore the tabs that show up to the right again. Note the following:

### Header tab

- Request URL (notice the id there)
- Request method
- Status code
- Request Payload

###  Preview tab

- Server response

###  Reponse tab

- Raw server response

### Timing

- Total request time in ms




[Previous](../README.md) | [Next](./Object_2.md)
