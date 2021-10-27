// Scope 
// scope answers the question of where are my functions and variable available to me

// Global variables - available anywhere in your program

const cohort = 'web48';

// let and const can be global within your program but var is the only variable declearation attached the window object 

/*
var 
- can be redefined 
- can be updated 
- function scoped

let 
- cannot be redefined
- can be updated 
- block scoped

const 
- cannot be redefined
- cannot be updated 
- block scoped
*/

// Function Scope 
// when a varibale is created inside a function that variable is only ever available inside that function unless we explicitly return it 

// const track = 'UX';

// function lambda(){
//   const cohort = 'web48';
//   const track = 'web';
  
//   console.log(cohort);
//   console.log(track);
// }

// lambda();

// Scope look up - it looks inside the function first - then it looks up a level then it looks up another level if it can't find a value 


// shadow variables when you have two variables with the same name in different scopes // not great practice

// Block Scope 
// let and const are block scoped 
// if(1 === 1){
//   var answer = true;
// }

// console.log(answer);


// for(let i = 0; i < 5; i++){
//   console.log(i);
// }

// console.log(i);

// use const until you can't and then let but stay away from var 

// let dog = 'Ada'; // global

// function callDog(dog){
//   console.log(dog);
// }

// function puppy(){
//   dog = 'Noa'; // function scoped
//   callDog('Fido');
//   // console.log(dog)
// }

// puppy();

// Best Practices 
// try not to create global variables - when we get into modules it's difficult to do this unless we explicitly attach it to the window object 
// having global variables can lead to bugs - especially if there is more than 1 dev working on a program 


// Function are scoped in the same way variables are scoped 

// function sayHi(name){
//   function yell(){
//     console.log(name.toUpperCase());
//   }
//   yell();
// }

// sayHi('David');

// yell(); // will this work? 

// if you create a function within another function that function will only ever be available inside of it's parent function 

//HOISTING 
// allows you to access functions and variables before they have been created 
// two thing in javaScript are hoisted - function declearations and var 

// console.log(working());
// function declearation 
// function working(){
//   return 'its working!!!!';
// }

// console.log(working());

// // function expression - NOT HOSITED 
// const working = function(){
//   return 'its working!';
// }

// console.log(working());
// // arrow function - NOT HOISTED! 

// const working = () => 'its working';
// console.log(myName); // I can see that this exists but I don't have a value yet = undefined 

// var myName = 'Brit';

// console.log(myName); // our value is given to us

// Hoisting not great practice but some devs set up their files like this 

// what this file does 
// invoke all functions 

// how this file does it 
// write all functions 

// Closures (maybe one of the scariest words in JS)
// closures give us the ability to put functions together
// code that has been identified elsewhere that we can use later 
// we can pass variables down but not back up 
// when a function reaches into it's outer scope to grab a value defined elsewhere

// function country(countryName){
//   const lang1 = 'French';
//   const lang2 = 'English';
//   console.log(`${lang1} and ${lang2} are the official languages of ${countryName}`);
//   debugger;
//   function province(provName){
//     const food = 'maple syrup';
//     console.log(`${lang1} and ${lang2} are the official languages of ${countryName} the offical food is ${food} and the province with the biggest population is ${provName}`);
//     debugger;
//     function city(cityName){
//       console.log(`${cityName} is the capital of ${provName} but not the capital of ${countryName}`);
//       debugger;
//     }// this closes the city function 
//     city('Toronto');
//   }// this closes the function of province
//   province('Ontario');
// }// this closes the function of country
// country('Canada');

// A closure happens when a inner function reaches into an outer function to grab a value defined in the outer function 

function game(sport){
  let score = 0; 
  return function win(){
    score ++;
    return `Your ${sport} game score is ${score}`;
  }
}

// where are my closures happening?

// create a game 

const hockeyGame = game('hockey');

console.log(hockeyGame());
console.log(hockeyGame());

const tennis = game('tennis');

console.log(tennis());
console.log(tennis());
console.log(tennis());

// closures are the ability for a child function to access variables from a higher level scope even after the variables have been called or closed or terminated 

// Callback Functions VS Higher Order Functions 
// Higher Order Functions - receive other functions as parameters 
// callback functions - are passed into other functions as arguments 
// HOF - receive / callback - passed in 

function kitchen(ing1, ing2, chefcb){
  return chefcb(ing1, ing2);
}

// callback functions

function pastaChef(ing1, ing2){
  return `I took ${ing1} and ${ing2} and I made you a 🍝 - 👩‍🍳`;
}

function pizzaChef(ing1, ing2){
   return `I took ${ing1} and ${ing2} and I made you a 🍕 - 👩‍🍳`;
}

console.log(kitchen('sauce', 'dough', pizzaChef));

console.log(kitchen('sauce', 'dough', pastaChef));

// create a score function that will return a random number between 0 and 5

function score(){
    return Math.floor(Math.random() * 6);
  }
  
  // create a hockey game function that takes score as a callback and returns a score for a home team and away team in the form of an object 
  /* 
  function hockeyGame(scorecb){
    return {
      Home: scorecb(),
      Away: scorecb()
    }
  }
   */
  console.log(hockeyGame(score)); // line 33 in the function below
   
  // create a function called totalGameScore - it should take score and hockeyGame as callbacks and it should return an array with the score for each period as a string `Period #: Away: score - Home: score`
  
  function totalGameScore(scorecb, gamecb){
    // first step 
    const totalScore = [];
    // I'm going to create some variables that will be updated 
    let homeScore = 0;
    let awayScore = 0;
    // create a loop that loops for each period of the game when it loops it's going to add a score for home and away for that period to the array
    for(let i = 0; i < 3; i++){
      // invoking hockeyGame on this line and that's going to give me an object with a score for home and a score for away 
      const currentScore = gamecb(scorecb);
      // updating my variables from lines 28 and 29
      homeScore = homeScore + currentScore.Home; // .Home and .Away is how I am grabing the score value from the object that's returned when I invoke the hockeyGame on line 33
      awayScore = awayScore + currentScore.Away; 
      // push these scores into an array in the form of a string
      totalScore.push(`Period ${i + 1}: Away ${awayScore} - Home: ${homeScore}`);
    }
    // outside of the loop I want the array back 
    return totalScore;
  }
  
  console.log(totalGameScore(score, hockeyGame));
