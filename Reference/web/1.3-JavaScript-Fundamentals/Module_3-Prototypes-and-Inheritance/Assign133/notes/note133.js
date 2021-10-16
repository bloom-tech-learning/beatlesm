console.log('------------------ note.js -----------------------');
// "this"

// window binding
// console.log(window);
// console.log(this);

'use strict';
// const dog = 'Lilly';
// console.log(dog);

// implicit binding
// the most common kind of binding you'll use, probably at least 80% of the time

const aGhost = {
  name: "Casper",
  phrase: 'Booo!',
  ghost: function() {
    console.log(this);
    return this.phrase;
  }
}
// console.log(this);

// when we invoke the function, "this" is whatever is to the left of the dot
// this only applies to objects with methods

// in this scenario, "this" === aGhost

 console.log('call function ghost(): ', aGhost.ghost());
 console.log('typeof ghost(): ', typeof(aGhost.ghost()));
 console.log('call function ghost: ', aGhost.ghost);
 console.log('typeof ghost: ', typeof(aGhost.ghost));


// BREAKOUT 1:
// Build a Person object
// it should ahve a name, age, location property
// it should have a greet method that returns something like "hi, i am name from location and i am x years old"
// get the greet method console logging without undefineds or other issues

const person = {
  name: 'Keiran',
  age: 28,
  location: 'Florida',
  greet: function() {
    console.log(`${this.name} is ${this.age} and lives in ${this.location}`);
  }
}
person.greet();

const petOne = {
  name: 'Lilly',
  species: 'dog',
  favFood: 'hydrolyzed protein',
  eat: function() {
  console.log('this1', this);
  console.log(`${this.name} is a ${this.species} who likes to eat ${this.favFood}.`);
  return `${this.name} is a ${this.species} who likes to eat ${this.favFood}`;
  }
}

const petTwo = {
  name: 'Spook',
  species: 'cat',
  favFood: 'treats',
  eat: function() {
    console.log('this2', this);
    console.log(`${this.name} is a ${this.species} who likes to eat ${this.favFood}.`)
  }
}

const petThree = {
  name: 'Chloe',
  species: 'dog',
  favFood: 'steak',
  eat: function() {
    console.log('this3', this);
    console.log(`${this.name} is a ${this.species} who likes to eat ${this.favFood}.`)
    // return `${this.name} is a ${this.species} who likes to eat ${this.favFood}.`;
  }
}

console.log('petOne.eat(): ',petOne.eat());
// petOne.eat();
// petTwo.eat();
// petThree.eat();

// explicit binding
// .call() is a function that will allow you to pass in individual arguments to use as "this"

function ghost(shirt, boots) {
  console.log(this);
  console.log(`${this.name} wears ${shirt} shirts and ${boots}.`)
  console.log(`${this.name} says ${this.boo}`);
}

const ghostObj1 = {
  name: 'Casper',
  boo: 'booooooooooo!'
}
const ghostObj2 = {
  name: 'Ghost',
  boo: 'booooooooooo!'
}

// think of .call as sending the given function a list of stuff to use as context, or "this"
ghost.call(ghostObj1, 'polkadotted', 'a single boot');
ghost.call(ghostObj2);

console.log('------------------note.js new -----------------------');

const myGhost1 = new Ghost('Casper the Friendly Ghost!');
const myGhost2 = new Ghost('Slimer the Unfriendly Ghost!');
console.log(myGhost1.phrase);
console.log(myGhost2.phrase);

// when you .call on a function, think of it like this:

/* 
function ghost() {
  the properties from ghostObj1 get transferred into here
  const name = 'Casper',
  const boo = 'booooooooooo!'
  
  console.log(this);
  console.log(`${this.name} says ${this.boo}`);
}
const ghostObj1 = {
  name: 'Casper',
  boo: 'booooooooooo!'
} 
*/

console.log('------------------Note.js .apply -----------------------');

// .apply
// immediately invokes the function you call it on
// you can pass in args as an array

function ghostA(shoes, shirt, color, otherParam) {
  console.log(this);
  console.log(`${this.name} says ${this.boo}`);
  console.log(`${this.name} wears ${shirt} shirts and ${shoes}`);
  console.log(otherParam);
}
const ghostObj1A = {
  name: 'Casper',
  boo: 'booooooooooo!'
}

ghostA.apply(ghostObj1A, ['a single boot', 'polkadotted', 'white']);

console.log('------------------Note.js .bind -----------------------');


function ghostB(shoes, shirt, color, otherParam) {
  console.log(this);
  console.log(`${this.name} says ${this.boo}`);
  console.log(`${this.name} wears ${shirt} shirts and ${shoes}`);
  console.log(otherParam);
}
const ghostObj1B = {
  name: 'Casper',
  boo: 'booooooooooo!'
}

const boundGhost = ghostB.bind(ghostObj1B, 'polkadotted', 'a single boot', '');
boundGhost();

console.log('------------------break 2 -----------------------');

// BREAKOUT 2:
// create a function and use call to make an animal say a sound
// create an animal obj, give it a name, species, and sound


function animalSounds() {
  console.log(`${this.name} says ${this.sound}!`);
}

const animal = {
  name: 'Betsy',
  species: 'cow',
  sound: 'mooooo'
}

animalSounds.call(animal);

// new binding
function Ghost(saying) {
  this.phrase = saying;
}


