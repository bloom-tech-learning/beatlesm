# Web48 - 2.1 Sprint Assessment

## Question 1

####  Fill in the missing code to select all elements in the class 'card-title'.

```
cardTitles = __________('.card-title');
```

- `document.getElement`
- `document.getElementById`
- `document.select`
- `document.querySelectorAll`

#### Answer:   (D) 

## Question 2

####  True or false: A child can have many parent elements

- TRUE 
- FALSE 

#### Answer:   (B) 

## Question 3

####  In what order does event flow occur after a 'click'?

- Capture, Bubbling, Target 
- Capture, Target, Bubbling 
- Bubbling, Target, Capture 
- Bubbling, Capture, Target 

#### Answer:   (B) 

## Question 4

####  Add the missing code to be able to use the createPanel function later on in your code.

```
function createPanel(title, content) {
      // define new elements
      const panel = document.createElement('div');
      const panelBar = document.createElement('div');
      const panelTitle = document.createElement('h3');
      const buttonPanel = document.createElement('div');
      const buttonOpen = document.createElement('button');
      const buttonClose = document.createElement('button');
      const panelContent = document.createElement('div');

      // Setup structure of elements
      panel.appendChild(panelBar)
      panel.appendChild(panelContent)
      panelBar.appendChild(panelTitle)
      panelBar.appendChild(buttonPanel)
      buttonPanel.appendChild(buttonOpen)
      buttonPanel.appendChild(buttonClose)
      return __________;
    }
```

- panel 
- buttonPanel 
- panel.append 
- createPanel 

#### Answer:   (A)

## Question 5

####  What type of data does the following code initially return?

```
axios.get('http://serverlocation.com/data')
```

- JSON 
- promise 
- object 
- array 

#### Answer:   (B) 

## Question 6

####  Which of the following is not a DOM event name?

- click 
- scroll 
- mouse 
- load 

#### Answer:   (C) 







[Previous](./Object_2.md) | [[Module 1](../../Module_1-Class-Components/README.md)
