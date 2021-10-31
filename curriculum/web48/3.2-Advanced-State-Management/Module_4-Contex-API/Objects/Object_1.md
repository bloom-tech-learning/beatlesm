#   Objective 1 - Describe What the Context API is and the Problem it Solves

##  Overview

***The React docs give us a good explanation of what context is:***

> In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

We use the context API when we have global data that many components share (things like user or theme) or when we have to pass data through intermediate components. The API can help keep your state relatively clean.

One caveat here is that it can make components harder to reuse. Therefore, another architectural pattern you may want to look at is [a component composition](https://reactjs.org/docs/composition-vs-inheritance.html)


## Follow Along

Read through [this article](https://hackernoon.com/everything-you-need-to-know-about-reacts-context-api-e5c8c32ef202) and write out a simple explanation of context. Then, send your description to your TL in Slack.

## Challenge

Read through the [Context API docs](https://reactjs.org/docs/context.html) and be able to explain what the provider and consumer methods are to someone in your TL group.



[Previous](../README.md) | [Next](./Object_2.md)