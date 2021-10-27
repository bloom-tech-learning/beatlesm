// variables

// var is a global variable
var name = 'Keiran';
// console.log(name);
// reassigning - give a new value
name = 'Kozlowski';
// console.log(name);
// redeclaring
// var name = '';

// const
// value can't be changed
// cannot be redeclared
const array = [];
array.push('hello');
// console.log(array);

// let
// value can be changed
// cannot be redeclared
let value = 1;
value++;
// console.log(value);


// primitive data types

// strings
// what we think of as words/letters
const string1 = "2";

// numbers
const num = 1;

// booleans
let jsLove = true;
// console.log('this is hard');
jsLove = false;

// undefined and null
// null is like the concept of nothing
// undefined is like the concept of "i don't know"
let val1 = null;
let val2 = undefined;

//////// MATH STUFF
// regular math operators work the same in JS
// + - * /
// modulo: %
const mod = 4 % 3;
// console.log(mod);

// first argument is the number you're raising
// second argument is the power of the exponent
// console.log(Math.pow(10, 2));

// rounds to nearest whole number
// console.log(Math.round(6.75));

// rounds down to the nearest whole number
// console.log(Math.floor(6.75));

// rounds up to the nearest whole number
// console.log(Math.ceil(6.75));



// truthiness
// truthy and falsy

// values that evaluate to true
// true
// 1
// ' '
// []
// {}

// values that evaluate to false
// false
// 0
// undefined
// null
// ''

// comparison and logical operators
// > < >= <= work as expected
// == vs ===
// == is not strict equality
// === is strict equality

// if (3 == '3') {
//   console.log('it is true');
// } else console.log('it is not true');

// && means and
// || means or
// ! means not

// if ((!true === false && false === false) && (true === false)) {
//   console.log('both are true');
// } else console.log('both are false');

// if statement has a test in the paren
// if (name === 'Keiran') {
//   // if your test passes, it runs whatever code is in here
//   console.log(`Hello ${name}`)
// } else if (name === 'Kozlowski') {
//   console.log(`Hello Mr. ${name}`)
// } else {
//   // if your test fails, it runs whatever code is in here
//   console.log('No name :(')
// }

// write for and while loops

// declare variable i as 0
// continue to run while i < 10
// increment i after each loop
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// const arr = ['cat', 'dog', 'rabbit'];
// console.log('length', arr.length);
// console.log('arr[2]', arr[2]);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// runs while the condition param is true
let truthy = true;
while (truthy === true) {
  console.log(true);
  truthy = false;
}

// functions
function hungryDog(age, weight) {
  if (age >= 1 && weight <= 5) {
    console.log('Dog food:')
    return weight * .05;
  } else if (age < 1) {
    console.log('Puppy food:')
    return weight * .1;
  } else if (age >= 1 && weight > 5) {
    console.log('Big dog food:')
    return weight * .15;
  } else {
    return 'Please enter proper arguments';
  }
}

// const puppyFood = hungryDog(.5, 3);
// console.log(puppyFood);
// const dogFood = hungryDog(1, 3);
// console.log(dogFood);

// console.log(hungryDog(.5, 3));
console.log(hungryDog(1, 15));


// finish the rest of the functions
// do some math with saved values
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

const math = add(1, 2);
