console.log('----------------REVIEW  Web 1.3 Project 4 Note -----------------------');

// a list of stuff where the order matters
const arr = [1, 2, 3, 4, 5];
const objArr = [
  {
    id: 1,
    name: 'Keiran',
    type: 'teacher'
  },
  {
    id: 2,
    name: 'Brian',
    type: 'student'
  },
  {
    id: 3,
    name: 'Deepak',
    type: 'student'
  },
  {
    id: 4,
    name: 'Alex',
    type: 'student'
  }
];

// accessing arrays
// index
arr[arr.length - 1];
arr[4];

// array methods
// .map, .filter, .reduce
// foreach loops
const mappedArr = arr.map((num, index, array) => {
  // console.log(num);
  // console.log(index);
  // console.log(array);
  
  // if (num % 2 === 0) return num;
  // else return null;
  
  return num * 10;
});

const mappedObjArr = objArr.map((obj) => {
  return {
    name: obj.name
  };
  // return obj.name;
});

// console.log(mappedArr);
// console.log(mappedObjArr);

const filteredArr = arr.filter((num, index, array) => {
  return num % 2 === 0;
});

// console.log(filteredArr);

// accumulator is your bucket that you're putting values into
// current is the current index value of the array that you're reducing
const reducedArr = arr.reduce((accumulator, current) => {
  // console.log(accumulator);
  return accumulator + current;
}, 0);
// const reducer = (previousValue, currentValue) => previousValue + currentValue;
// console.log(reducedArr);

arr.forEach((num, index, array) => {
  // console.log(num);
  // num * 10;
});

// objects
const obj = {
  name: 'Keiran',
  city: 'Gainesville',
  previousCities: [
    {
      id: 1,
      name: 'Nashua',
      funStuff: [
        {
          id: 1,
          name: 'The Faire'
        },
        {
          id: 2,
          name: 'Forest walks'
        },
        {
          id: 3,
          name: 'Dog walking'
        },
      ]
    },
    {
      id: 2,
      name: 'Cape',
      funStuff: [
        {
          id: 1,
          name: 'The Faire'
        },
        {
          id: 2,
          name: 'Forest walks'
        },
        {
          id: 3,
          name: 'Dog walking'
        },
      ]
    },
    {
      id: 3,
      name: 'Orlando',
      funStuff: [
        {
          id: 1,
          name: 'The Faire'
        },
        {
          id: 2,
          name: 'Forest walks'
        },
        {
          id: 3,
          name: 'Dog walking'
        },
      ]
    }
  ],
  address: {
    number: 123,
    street: 'Main St'
  }
};
// console.log(obj.previousCities[0].funStuff[0]);

// Constructors
function Pet(attr) {
  this.name = attr.name || '';
  this.owner = attr.owner || '';
  this.phrase = attr.phrase || '';
}

// Prototypes
// see param and arg in invocation
Pet.prototype.speak = function(term) {
  return `${this.name} says ${term}.`;
};

// Inheritance
// make a new constructor for BabyPet that derives from Pet
// should have all the same properties as Pet as well as favToy
// should have all the same prototype methods as Pet as well as play
function BabyPet(babyAttr) {
  Pet.call(this, babyAttr);
  // this is equivalent ^
  // this.name = attr.name || '';
  // this.owner = attr.owner || '';
  // this.phrase = attr.phrase || '';
  this.favToy = babyAttr.favToy;
}

// console.log(Pet.prototype);
BabyPet.prototype = Object.create(Pet.prototype);
BabyPet.prototype.play = function() {
  return `${this.name} likes to play with ${this.favToy}.`;
}


const whatever = {
  name: 'Lilly',
  owner: 'Keiran',
  phrase: 'bark bark'
}
const lilly = new Pet(whatever);

// console.log(lilly);
// console.log(lilly.speak('I am a dog'));

const babyPetAttrs = {
  name: 'Spook',
  owner: 'Keiran',
  phrase: 'meow',
  favToy: 'sparkly plastic thing'
}
const spook1 = new BabyPet(babyPetAttrs);
const spook2 = new BabyPet(babyPetAttrs);
const spook3 = new BabyPet(babyPetAttrs);
const spook4 = new BabyPet(babyPetAttrs);
// console.log(spook1);

console.log(BabyPet.prototype.constructor)

// function BabyPet(babyAttr) {
//   Pet.call(this, babyAttr);
//   // this is equivalent ^
//   // this.name = attr.name || '';
//   // this.owner = attr.owner || '';
//   // this.phrase = attr.phrase || '';
//   this.favToy = babyAttr.favToy;
// }

// Classes
class Pet {
  constructor(attrs) {
    // properties go here
    this.name = attrs.name;
    this.owner = attrs.owner;
    this.phrase = attrs.phrase;
  }
  
  // methods go here
  speak() {
    return `${this.name} says ${this.phrase}.`;
  }
}

// extends keyword replaces the Object.create() part
// gets whatever methods are on the parent class
class BabyPet extends Pet {
  constructor(babyAttrs) {
    // super replaces Pet.call()
    // takes all the attributes from our parent class and copies them here
    super(babyAttrs);
    this.favToy = babyAttrs.favToy;
  }
  
  // methods go here
  play() {
    return `${this.name} likes to play with ${this.favToy}.`
  }
}

class GrandBabyPet extends BabyPet {
  constructor(gBabyAttrs) {
    super(gBabyAttrs);
    this.bottle = gBabyAttrs.bottle;
  }
  
  // methods
  isBottlefed() {
    return this.bottle;
  }
}

const whatever = {
  name: 'Lilly',
  owner: 'Keiran',
  phrase: 'bark bark',
  favToy: 'ball'
}
const lilly = new BabyPet(whatever);

console.log(lilly);
console.log(lilly.speak());
console.log(lilly.play());

// make a GrandBabyPet class
// deriving from both BabyPet and Pet
// add one new property and one new method

