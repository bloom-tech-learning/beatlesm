# Sprint Challenge: Advanced CSS and Intro to JavaScript - Influential Artists

-   [https://github.com/beatlesm/web-sprint-challenge-advanced-css-and-intro-js](https://github.com/beatlesm/web-sprint-challenge-advanced-css-and-intro-js)

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored advanced CSS and introductory JavaScript concepts. During this Sprint, you studied responsive web design, variable declaration, conditionals, loops, functions, arrays, and objects. In your challenge this week, you will demonstrate proficiency by creating a website of influential artists with data from an object.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. Your work reflects your proficiency in Responsive Design, and JavaScript Basics.


## Introduction

In this challenge, you will use a data set of artists to build an "influential artists" webpage. This data comes from a set of "50 influential artists" on [Kaggle](https://www.kaggle.com/ikarus777/best-artworks-of-all-time). We have reduced the data to just 20 artists to make it slightly easier to work with.

### Commits

Commit your code regularly and meaningfully. 

## Interview Questions
### (please edit this file and write your answer below each question.)

Please answer the following questions below, you may edit the readme file to include your answers below the question.

1. How would you describe acessibility on the web to someone new to programming?
  - By making your website accessible, you are ensuring that all of your potential users, including people with disabilities, have a decent user experience and are able to easily access your information. By implementing accessibility best practices, you are also improving the usability of the site for all users.
2. Talk about 3 different things you can do to ensure your website is accessible. 
  - Screen reader users can use heading structure to navigate content. By using headings (< h1 >, < h2 >, etc.) correctly and strategically, the content of your website will be well-organized and easily interpreted by screen readers.  
  - Alt text should be provided for images, so that screen reader users can understand the message conveyed by the use of images on the page. This is especially important for informative images (such as info graphics). 
  - Users with mobility disabilities, including repetitive stress injuries, may not be able to use a mouse or track pad. These people are able to access content through the use of a keyboard by pressing the "tab" or "arrow" keys, or through the use of alternative input devices such as single-switch input or mouth stick. As a result, the tab order should match the visual order, so keyboard-only users are able to logically navigate through site content.
3. How would you explain the concept of a variable to someone new to programming?
- Variables are one of the foundational building blocks of JavaScript. They are a way to store values that you can reference and retrieve later on in your program. There are 3 different ways to declare a variable in JavaScript: var (Can be redefined; Can be re-declared, Is function scoped), ES6 let (Cannot be redefined, Can be re-declared, Is block scoped), const (Cannot be redefined, Cannot be re-declared, Is block scoped). General Rule: use const until you can’t and then use let but avoid var
4. What is the purpose of using functions in code?
- Functions are a good alternative to having repeating blocks of code in a program. Functions also increase the reusability of code. 
5. How do you access a key inside of an object inside of an array?
- arrayName[index].key 

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade. 

## Instructions

### Task 1: Project Set-Up

Follow these steps to set up your project:

1. Fork the repo
2. Clone your forked version of the repo
3. cd into your repo and work on the main branch
NOTE: Tests will run for the JavaScript portion of this challenge only
4. connect to codegrade
5. open the terminal in your vs code and type `npm install`
6. next type `npm run test` in your terminal
7. Complete your work making regular commits, once you have all your tests passing and you are ready to submit your work please see canvas for instructions on how to submit

### Testing & Debugging

Open a second terminal inside of your project by clicking on the split terminal icon
![alt text](assets/split_terminal.png "Split Terminal")

Inside of your second terminal type `npm start` 
![alt text](assets/npm_start.png "type npm start")

You will be running your tests in one terminal and debugging in the other. As you work on your code you should make use of `console.log` to check your progress and debug.
![alt text](assets/tests_debug_terminal_final.png "your terminal should look like this")

### Task 2a:  Minimum Viable Product - Responsive Design

*Before you jump in, take 10 minutes to review the code that has already been provided for you. Take time to see how the home page was built. During this time, [Review the provided design files](design/). You have been provided all content necessary in the [index.html file](index.html) and basic styling in the [index.css file](css/index.css).*

* [ ] Ensure your website is responsive at 500px such that your styles match the [mobile design file](design/Mobile.png).

### Task 2b: Minimum Viable Product - JavaScript

Navigate to `index.js` and complete the MVP challenges. Note that you need to scroll past data (or collapse data in VScode) to find the challenges below.



## Resources

📚[Best Practices for Responsive Design](https://www.browserstack.com/guide/responsive-design-breakpoints)

🤝[W3 Schools - Responsive Design](https://www.w3schools.com/html/html_responsive.asp)

👀 [Styling with HTML and CSS](https://www.w3schools.com/html/html_css.asp)

🦄 [Sprint Challenge Study Guide](https://www.notion.so/lambdaschool/Unit-1-Sprint-2-Study-Guide-16f656025c8744458addb068e6348101)





