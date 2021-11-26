# Objective 3 - make POST requests to pass data collected from a form to a database

## <span style="color:red">Overview</span>

When our client applications need to work with data from a server and database, we transmit that data back-and-forth using [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP). This is a protocol that allows communication between web browsers and web servers.

You've previously learned how to use a `GET` request, but we're going to take it a step further today by submitting data to a web server. Within the HTTP protocol, a `POST `request is a [HTTP Request Method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods). To be precise, it is the method that allows us to "post" (or create) information on a web server. When a user makes a `POST` request, they are adding data to the server's database.

We'll look at some examples of how to make a `POST` request by extending the functionality of the form that we built above.

To make our `POST` request to our database, we're going to bring in [axios](https://www.npmjs.com/package/axios), a promise-based library that makes it easy for us to transmit data to-and-from our web server.

First, we need to install our `axios` dependency. We can do that using npm:

```
npm install axios
```
Now we can write a post request anywhere in our component. Let's look at the code we'll write to do this.

First, here's what an `axios` call looks like for `POST` request:

```
const sentData = { data: "Hello World!" };

axios
  .post("https://yourdatabaseurlgoeshere.com", sentData)
  .then(res => {
    console.log(res.data); // Data was created successfully and logs to console
  })
  .catch(err => {
    console.log(err); // There was an error creating the data and logs to console
  });
```

Notice that we are calling the `axios` library but using a `.post()` call instead of a `.get()` after it. We then follow that up with a URL passed in as an argument. Unlike the `.get()` requests that you've done before, we also pass in the data that we want to send to our web server as the second argument. In this example, the data that we're sending is our `sentData` variable, which is an object. This would be sent to our web server.

The promise created by `axios` will then resolve into a successful response or reject with an error. We're using `console.log()`s here, but you will typically write logic inside of `.then()` and `.catch()` that may include:

1.  Setting data into state in your component
2.  Alerting the user to an error
3.  Use the new data to create side effects in your component(s) that modify the interface for your user in some way

For instance, a `POST` request, such as the one above, might return a response (or `res`) like the following:

```
{
  error: false,
  data: { data: "Hello World!" },
  message: "Your data was successfully created."
}
```

This is just a rough example, and every server works differently. You will need to initially `console.log()` the server's response to find out what kind of data you're receiving back in your response. This is super important - always console log the server's response!

## Follow Along

Let's take a look at how we would integrate this `POST` request into our Yup form. In particular, notice what we're doing in our `handleSubmit` function down towards the bottom:

1.  **Create a new state called ** `setPost`. This will be where we're going to store data on a valid form submit. Once we have the data we'll work to `console.log` it and display it to the screen.

```
  // new state to set our post request too. So we can console.log and see it.
  const [post, setPost] = useState([]);

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      // console.log(valid);
      setButtonDisabled(!valid);
    });
  }, [formState]);
```

2.  **Post to a database from** `req, res`. Inside of our form submit event handler, we're going to add a `post` request with `axios` and update formState. Once form state is filled out, this posts all of the input information to `setPost`.

For all of our examples together we are going to make use of the `reqres` API. This API allows us to make real POST requests to a real server and get real responses. Until you learn to set up your own backend in Unit 4, this will be a powerful development tool. The post to `https://reqres.in/api/users` accomplishes that.

```
// this handles what happens when we submit the form. We want to prevent the default
  //form submission from the browser and control what happens when we submit.
  const formSubmit = e => {
    e.preventDefault();
    console.log("submitted!");
    axios
      .post("https://reqres.in/api/users", formState)
      .then(res => {
        setPost(res.data); // get just the form data from the REST api
        console.log("success", res);
      })
      .catch(err => console.log(err.response));
  };
```

3.  **Display Data**. For our purposes, we'll just display data to the DOM, instead of doing something with it on a server. For that we will use JSON.stringify to display our data in both the DOM and the console.

```
/* displaying our post request data */
      <pre>{JSON.stringify(post, null, 2)}</pre>
```

In this example, our axios call to `https://reqres.in/api/users` now runs whenever we submit the form and run the `handleSubmit` function. Our form now takes in user data and, when the user clicks the "submit" button, it will `POST` the user's data to the webserver.

This `POST` functionality will be reused innumerable times throughout your developer journey, so it will pay to get a handle on how you do post requests now. For further review, feel free to read through the official documentation from [axios](https://github.com/axios/axios).

## Challenge

Go review your `GET` requests in previous homework assignments and think about how you convert them over to a `POST` request. What code would you change? How would you send your data over HTTP once you've converted them? What code do you need to re-write to make this happen? How do your new `POST` requests differ from your old `GET` requests?




[Previous](./Object_2.md) | [Next](./Understanding.md)


