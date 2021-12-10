# WEB - 3.2 - Advanced State Management

## [The Reducer Pattern](./Module_1-The-Reducer-Pattern/README.md)

-   [3.2.1 - Reducer Calculator](https://github.com/bloominstituteoftechnology/web-module-project-reducer)

-   [3.2.1 - Guided Project](https://github.com/bloominstituteoftechnology/web-guided-project-reducer)

[3.2.1 - Lecture Slides](https://docs.google.com/presentation/d/1XsvFOLkcYtTqXoldXzi5NPvVWwhoBn_JGDqplKDP4yc/edit?usp=sharing)

[3.2.1 - Check For Understanding](./Module_1-The-Reducer-Pattern/Objects/Understanding.md)

The difficulties of storing and efficiently performing logic on data within components become more and more apparent as the number of data increases. Consequently, as components grow and deal with larger sets of data, the storing and transportation of state across the entire application increasingly becomes more cumbersome. Reducers offer one possible way to address this problem within the component. At the level of the application, an elegant combination of the Context API with reducers provides one possible way that React developers can manage global state.

## [Redux](./Module_2-Redux/README.md)

-   [3.2.2 - Redux: Movie Database](https://github.com/bloominstituteoftechnology/web-module-project-redux)

-   [3.2.2 - Guided Project](https://github.com/bloominstituteoftechnology/web-guided-project-redux)

[3.2.2 - Lecture Slides](https://docs.google.com/presentation/d/1d1obD6mw8ZmUuvs5zYOvZvlhS5Nlo_cvI9oLbyx0Mow/edit#slide=id.g6e1547e6a2_0_88)

[3.2.2 - Check For Understanding](./Module_2-Redux/Objects/Understanding.md)

React is a very sophisticated UI-component library that can be used with a few other libraries to build large-scale single-page applications. But as our applications scale in size, so will the data we are concerned with within our applications. And you can only start to imagine how difficult it might be to manage all of that data inside React components. Redux is a library that can help solve this problem by providing a single source of truth for our data within our application. As your team grows and as your application scales, Redux can help offset the pains that can be brought on due to complexity.

## [Async Redux](./Module_3-Async-Redux/README.md)

-   [3.2.3 - Async Redux](https://github.com/bloominstituteoftechnology/web-module-project-async-redux)

-   [3.2.3 - Guided Project](https://github.com/bloominstituteoftechnology/web-guided-project-async-redux)

[3.2.3 - Lecture Slides](https://docs.google.com/presentation/d/1Pi7EPfPt2yp6-GykL_J-07ZEejnJqKVPy6_wO9kSGr8/edit?usp=sharing)

[3.2.3 - Check For Understanding](./Module_3-Async-Redux/Objects/Understanding.md)

By nature Redux is synchronous. Because of this, we need to apply some middleware to extend the functionality of our Redux package to allow for things like promises (which are asynchronous). This module will teach you how to set up Redux-Thunk as a middleware for Redux. You will also learn how to use the Redux-Thunk package to extend your actions so that you can consume promises.

## [Context API](./Module_4-Contex-API/README.md)

- [3.2.4 - Testing React: React Shopping Cart](https://github.com/bloominstituteoftechnology/web-module-project-context)

- [3.2.4 - Guided Project](https://github.com/bloominstituteoftechnology/web-guided-project-context)

[3.2.4 - Lecture Slides](https://docs.google.com/presentation/d/1xiN7mFjhVgJ0aHDvcQ7B4RwcftIODhlPEUlHJasLfag/edit?usp=sharing)

[3.2.4 - Check For Understanding](./Module_4-Contex-API/Objects/Understanding.md)

In this module, we will learn about automated testing and how to write unit tests with Jest and React-testing-library.

In your typical React application, state is passed top-down (parent to child) via props, but this can become very cumbersome quickly, especially when many components across your application require those props. However, with the introduction of React’s context API, you no longer have to pass props down from component to component - what React devs call "prop drilling." Instead, we can now store data on a context object and retrieve that data in the necessary components from the context object, not props!

## [Sprint Challenge](./Sprint)

-   [3.2 - Sprint Project](https://github.com/bloominstituteoftechnology/web-sprint-challenge-advanced-state-management)

#### [Sprint 3.2 - Interview Questions](./Sprint/solution/interview_answers.md)

#### [Sprint 3.2 - Assessment](./Sprint/Assessment.md)