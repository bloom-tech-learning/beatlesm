#   Objective 1 - Understand and Utilize Asynchronous Javascript and Promises

## <span style="color:red">Overview</span>

### Asynchronous code

In JavaScript, we have the concept of 'asynchronous' code. This means code that does not run instantly in line. Instead, perhaps the code needs to wait a moment, wait for something to happen, or in this case, we will explore today, wait until data comes back from a server. Using asynchronous code can be challenging at first because we need to recognize which code will be asynchronous and which will run instantly. Take the following example, which will run instantly and which will wait to run?

```
setTimeout( () => {
    console.log('Hello!');
}, 1000);

console.log('Over here!');
```

Even if you have never seen `setTimeout` before, you probably realized that it will wait a moment to run, where console.log will run instantly. If you run this code in your console you should see `Over here!` print first because setTimeout will wait 1 second (1000 ms) to run.

Asynchronous code is everywhere in JavaScript. It is an important concept to understand.

### Promises

We have a few different ways to approach asynchronous code; in the last example, we saw callbacks (which you already understand). Other concepts are ```async/await``` and ```Promises```. Today we will be using Promises.

Promises are a design pattern for use when handling asynchronous code in JavaScript. We use them as an alternative to nesting multiple callbacks. You may have heard of a problem called ```callback``` hell. Promises are a way to avoid this problem.

Implementing promises is not something you'll need to do very often, especially in front-end development. However, understanding how they work under the hood will help you deal with them when requesting data from web servers.

Learning how to handle promises is pretty straight forward. In fact, on a ```Promise``` object there are really only two methods that we need to use to handle promises ```then``` and `catch`. For what we're trying to accomplish in terms of transferring data between our apps and some server somewhere, we will actually be using what is called a `Promise Library`. I want to ensure that you understand that the built in `Promise` object you're about to see, is NOT a promise library, rather it is a feature built into the JavaScript language as of ES6. Now, let's dig in.

Consider the following code and what it is doing here.

```
let time = 0;
const timeMachine = () => {
  return setTimeout(() => {
    return time += 1000;
  }, 1000);
};

timeMachine();
console.log(time); --> OUTPUTS: 0;
```

We have seen here that the setTimeout function (1 second later) will manipulate the `time` variable. However, when we `console.log` time we get `0`. The reason for this, is because of the way the `time` variable is defined. It is happening inside of a `setTimeout` block, which waits 1000ms to do its thing. This is an important concept to grasp here. Even though we've manipulated the data, we don't have access to the data that was manipulated quite yet. In a nutshell, this is asynchronous JavaScript.

Ok, so the problem, is that we're expecting `time` to be equal to `1000` by the time we want to work with it. One way we can solve this is by using Promises. Before we do that let's figure out what a `promise` is first.

####  Straight from MDN:

> A promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods. However, instead of immediately returning the final value, the asynchronous method returns a promise to supply the value in the future.

A promise is just that, a promise from the object that it will let us know when it has completed (or errored) what we have asked it to do. A promise can exist in one of three states:

- `Pending:` a state where the promise is neither rejected nor fulfilled (this is the state it is in when we first call it).
- `Fulfilled:` a state where all's well and a resolved value can be used by our code.
- `Rejected:` a state where something went wrong and an error will need to be dealt with.

If the promise succeeds, it will return the value as a parameter into a callback passed into `.then()`. If the promise fails, the callback passed into the `.catch()` runs, taking an error as its argument.

## Follow Along

Ok that's a lot of words, now lets see some code.

- Reminder, we are building our promise here, although you will not need to do this on your own today.

```
let time = 0;
const timeMachine = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve((time += 1000));
    }, 1000);
  });
};
```

Notice here that we've now wrapped our `setTimeout` function in a `new Promise` and we're resolving the addition of the `time += 1000` and passing that resolved result. This allows us to do what we call `promise chaining` when we invoke our `timeMachine` function. Remember that every promise ships with `then and catch` methods and we can use those methods to either receive a `resolved promise` or a `rejected promise`. Lets find out how!

```
timeMachine()
    .then(newTime => {
       console.log(newTime); --> OUTPUTS: 1000
    });
```

Ok, in the above code, the `thenified` timeMachine invocation is now receiving a callback itself, (this is how all promise chains should look) with some item being received as a parameter. We can chain multiple `thens` together. Inside of each `then` block when/if we return something new, we can be directed into a new `then` block which is really neat. Or maybe we're `resolving` more than one process, and we want to see the next result in the next `then` block. Lets manipulate the data in the `.then` block we have now, and see what happens when we use another `then`.

```
timeMachine()
  .then(newTime => {
    const myTime = newTime / 1000;
    return `${myTime} seconds have passed`;
  })
  .then(newString => {
    console.log(newString); --> OUTPUTS ​​​​​"1 seconds have passed​​​​​"
  });
```

In our first `then` block we are manipulating the time that is originally being resolved by the `Promise` and then sequentially returning it with some text concatenated onto the time. Because we are returning a value from our first `then` statement, we can now chain on another `then`. And thus we have achieved some promise chaining. This isn't a terribly useful program at this point. But we're about to see some power.

Now let's make another function that we can use to return yet another promise. This is where some of the `then chaining` starts to come in handy. We're going to have to refactor our code, ONLY where we're calling timeMachine. The function we're going to write is calling `timeMachine`. The function we're going to write is called `parseTime` and it will receive a `ms` milliseconds parameter that we can use to reject a promise in the future.

```
const parseTime = ms => {
  return new Promise((resolve, reject) => {
    const timeString = time / 1000;
    resolve(`${timeString} seconds have passed`);
  });
};
```

Ok! Now we've offloaded some work from our `then` block into a function that resolves a promise. We can now use it like above, but this time, when we call our `timeMachine` function we'll pass this `parseTime` function as an argument to our first `then` block.

```
timeMachine()
  .then(parseTime)
  .then(timePassed => {
    console.log(timePassed); --> OUTPUTS: "1 seconds have passed​​​​​"
  });
```

We've effectively achieved the same thing, but now we're chaining promises and their resolves together. This is Promise chaining. Now the last thing we need to cover is a `rejected promise` because up until now all the things have just… worked. That is not the case in the real world, so because of that, we need to learn how to handle rejections. Lets tweak our `parseTime` function so that we can reject a promise instead of resolving a promise that is, if a certain condition matches.

```
const parseTime = ms => {
  return new Promise((resolve, reject) => {
    const timeString = time / 1000;
    if (ms > 999) {
      resolve(`${timeString} seconds have passed`);
    } else {
      reject(new Error(`ms is less than 1 second promise rejected!`));
    }
  });
};
```

Here's what's going to be sweet, when this function runs, ms will be 1000. So our condition will resolve the promise, but let's remember where we're using this function; it's within a `then` block on the resolve of another promise. If we tweak our `timeMachine` function to resolve under `1000 ms`, we'll get a rejection. So lets change the `timeMachine` function in such a way that breaks our promise chain so that we can deal with it.

```
resolve((time += 999));
```

Now we should hit our condition, and our promise will then be rejected. So we have a `catch` block for this purpose.

```
timeMachine()
  .then(parseTime)
  .then(timePassed => {
    console.log(timePassed); --> OUTPUT: DOES NOT RUN
  })
  .catch(err => {
    console.log(err); --> OUTPUT: ​​​​​[Error: ms is less than 1 second promise rejected!]​​​​​
  });
```

And that is that! We have successfully built out a promise chain that allows us to see the benefit of writing them in the first place. So now, when you're dealing with Promises in the future, the `.then` and `.catch` won't be all that scary! That last part is the part to remember. HOW we handle promises is what is important for us in the future. Not HOW we implement them. We will be using Axios for that and we're going to teach you what that is soon.

## Challenge

Using the time machine example you just built, build one more function from scratch that returns a `Promise` that has a setTimeout inside it. In the `.then()` console.log what is resolved from inside the setTimeout.




[Previous](../README.md) | [Next](./Object_2.md)