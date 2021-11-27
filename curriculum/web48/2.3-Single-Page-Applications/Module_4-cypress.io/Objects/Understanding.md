# Module 2.3.4 - cypress.io Check For Understanding

## Question 1

####  Why do we use automated testing over manual testing?

-   Because automated testing mimics how the compiler interacts with the page 
-   To test more comprehensively and consistently 
-   Because it's good practice to write more code
-   All of the above 

#### Answer:   (B) 

## Question 2

####  Which of the following is the correct order for the "AAA" testing cycle?

-   Assert, Arrange, Act 
-   Assert, Act, Arrange 
-   Act, Arrange, Assert 
-   Arrange, Act, Assert 

#### Answer:   (D) 

## Question 3

####  What does the following test do?

```
describe('Link Navigation', function() {
  it('does a thing', function() {
    cy.visit('index.html')
    cy.contains('Contact').click()
    cy.url().should('include', '/contact')
```

-   checks that the route includes the string "contact"
-   Checks that some element links to the contact route 
-   Clicks every navigation button on the page 
-   n/a - this test isn't written properly

#### Answer:   (B) 

## Question 4

####  Write a test to type an email address into a form input field.

- 
```
it('can type an email address into an input field', () => {
    cy.get('input[type="email"]')
      .keydown('foo@bar.com')
      .should('exist')
  })
``` 
- 
```
it('can type an email address into an input field', () => {
    cy.get('input[type="email"]')
      .type('foo@bar.com')
      .should('have.value', 'foo@bar.com')
  })
``` 
- 
```
it('can type an email address into an input field', () => {
    cy.get('input[type="email"]')
      .should('have.value', 'foo@bar.com')
      .type('foo@bar.com')
  })
``` 
- 
```
 it('can type an email address into an input field', () => {
    cy.get('input[type="email"]')
      .enter('foo@bar.com')
      .should('read', 'foo@bar.com')
  })
``` 

#### Answer:   (B) 

## Question 5

####  The following test would pass if what condition(s) are met?

```
describe('Header Text', function() {
    it('Checks if header text exists', function () {
    cy.visit("index.html");
    cy.get('.logo-heading').contains('Fun Bus');
    })
})
```

There is a logo on the page 
The page loads 
An element with the class 'logo-heading' includes the string "Fun Bus"
The header exists 

#### Answer:   (C) 

## Question 6

####  How do you run tests in cypress from the command line?

npx cypress run -a 
npx cypress run "test_file.js"
npx cypress test 
npx cypress run -s 

#### Answer:   (B) 








[Previous](./Object_4.md) | [Module 1](../../Module_1-Class-Components/README.md)
