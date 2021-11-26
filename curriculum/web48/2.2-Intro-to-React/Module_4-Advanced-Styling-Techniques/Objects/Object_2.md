# Objective 2 - Understand How to Style React Components Using Reactstrap

## <span style="color:red">Overview</span>

This lesson is all about getting you up and running with Reactstrap, the `de-facto` Bootstrap Styling library for React Components.

What's great about this library is that you have some pre-built components already styled out for you using the Bootstrap styling library. So not only do you get a chance to use the Bootstrap styling library, but you also get interactive styled components that you can use for interactivity throughout your react application.

Let's figure out how to get this all installed and start playing around with it. If you head over to the documentation, you'll find that the installation process is pretty darn easy.

```
npm install reactstrap bootstrap
```

Notice that we're installing BOTH `Reactstrap` and `Bootstrap` here. Reactstrap is the component library that uses Bootstrap under the hood. So you'll need both. To get the stylesheet included to your React Application, you can either use the `script` tag option or, my preferred choice, import the bootstrap library into your `index.js` file.

```
import 'bootstrap/dist/css/bootstrap.min.css';
```

Adding that line to your index.js file will make the bootstrap style sheet available. Now how do we use the React Strap component library? Well, it's as simple as any other node package we're using. Wherever you want to include any of your Reactstrap components, you'll have to explicitly import them into any component that you'd like to use them in.

```
import React from 'react';
import { Alert } from 'reactstrap';
```

That `Alert` component is now available for use like any other component that you've worked with/built on your own. And we'll use it as such.

```
<Alert color="primary">
  This is a primary alert — check it out!
</Alert>
```

This example comes straight from the docs, and of course, there is a bit more to it than that. So we'll dive into an example and have you all follow along with me right now.

##  Follow Along

We will learn how to get this package installed into a React application from `Create React App`.

### Step 1 Build your application

- run `npx create-react-app reactstrap-project --use-npm`
- or if you have `CRA` installed globally run `create-react-app reactstrap-project --use-npm`
- cd into your project and run run `npm start` to start your `webpack-dev-server`
- navigate to `localhost:3000` to see your app

### Step 2 installing Reactstrap

- inside the root of your `reactstrap-project` run `npm install reactstrap bootstrap` to get both `bootstrap` and `reactstrap` installed

### Step 3 configuring your index.js file to use the Global `bootstrap.css stylesheet`

- inside of the `index.js` file add `import 'bootstrap/dist/css/bootstrap.min.css';`
This will install the bootstrap styling lib globally for your project.


## Challenge

Use Create React App to build a project from the ground up.

- Include the `Reactstrap, and bootstrap libraries` using `npm`
- Build out a Todo App using the styled components only provided to you by `Reactstrap`
- Feel free to use your previous Todo Project as a reference.





[Previous](./Object_1.md) | [Next](./Object_3.md)