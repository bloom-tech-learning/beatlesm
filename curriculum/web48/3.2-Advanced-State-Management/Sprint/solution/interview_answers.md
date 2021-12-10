# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

>-   The React context provides data to components no matter how deep they are in the components tree. The context is used to manage global data, e.g. global state, theme, services, user settings, and more.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

>-  Actions are the only source of information for the store as per Redux official documentation, which carries a payload of information from your application to store; A reducer is a pure function that takes an action and the previous state of the application and returns the new state, which describes what happened and it is the reducer's job to return the new state based on that action; A store holds the whole state tree of your application, which can be change by the only way is dispatch an action on it. In React-Redux applications, when your Redux is a single source of truth, it means that the only way to change your data in UI is to dispatch redux action which will change state within redux reducer. And your React components will watch this reducer and if that reducer changes, then UI will change itself too.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

>-  Redux Thunk is a middleware that allows you to call the action creators that return a function(thunk) which takes the store's dispatch method as the argument and which is afterwards used to dispatch the synchronous action after the API or side effects has been finished.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

>-  This a hard answer question for us in this level. My answer are: first answer: State / prop drilling, which is easy setup, and modify but can only use for smaller projects or when state is only used within one component. second answer: Reducers and Redux, which are separation of concerns, easy to read and add features and can connect to any state but lots of moving parts, syntax can be confusing and doesn't allow state over branches of components. second answer: Context API, which is simple to setup, can connect to any state and connect multiple context to different parts of the app but it is new, can also be messy if not used with restraint and less performant than Redux in some cases.