## 3.1 - Interview Questions and Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. Add your answers to the questions within `interview_answers.md` file. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

> A stateful component render depends upon the value of the state. A functional component is always means a stateless component, which (a stateless component) renders output which depends upon props value. 

2. When does a componentWillMount function be called? What about a componentWillUpdate?

> A componentWillMount is called before the render method is executed. One of the primary usages of componentWillMount() is to make API calls once the component is initiated and configure the values into the state. In react js the function componentWillUpdate() is play a vital role while rendering the components. It allows us to decide for the rendering of the component.  This function takes two parameters the first parameter is the nextProps and the second parameter is nextState.

3. Define stateful logic.

> Stateful logic refers to a form of computational logic in which the same devices both store logic values and perform logical operations. 

4. What are the three step of creating a successful test? What is done in each phase?

> The test cases should work in three phases: Arrange, Act and Assert. First, setup the react component which will be testing (“Arrange”) Then; execute the behavior (if there is one) (“Act”) Then; you make sure that what you expected to happen, actually happened (“Assert”) Then.