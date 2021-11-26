# Objective 2 - Describe Props and How Data Flows in a React Application

## <span style="color:red">Overview</span>

### What are props?

When we want to pass information held on state inside one component to another, we pass them as props. We'll learn plenty about the how and why of props, but for now, the important thing to remember is that we never make changes to props data - props are read-only. This helps ensure that our data flow remains clean and organized. This way, we know exactly where changes are made to our application. And if something goes wrong, we can find the issue and fix it. Imagine an application with data changes occurring in every file. How easy would it be to understand how it worked, and how long would it take to locate a problem with the code?

### Managing state and props within components

A stateful component is one that holds state data, either as an object placed inside the constructor function, or a function component that includes the `.useState` function made available in the React v16.8 release (the one with hooks). We'll be learning about function components for now; later in the curriculum, you'll see class components.

When data comes into our application, it is loaded and stored in a centralized component specifically for state management or a component rendering other components. When data is consumed in multiple components, it is probably best to centralize that data in state in a top-level component. Other data that is specific to a certain component can live locally, just inside that component. Components rendered in a stateful component can receive state data via a props attribute. Here, it can be sent down on the props object to the child component, and there we can access it just like we would with most any other object. However, if we decide we want to change our data, we do not change the prop data itself. Instead, we send back what changes we should make to our state holding component; often, stored changes are sent back up to the parent container as enclosed information in a called function. You'll learn plenty more about sending data in the coming days and weeks. For now, let's take a closer look at class components and function components and how they differ for holding state.

## Follow Along


## Challenge





[Previous](./Object_1.md) | [Next](./Object_3.md)