// Objects 
// another fundamental building block of JS 
// allows us to group together properties and values or key/value pairs 
// the order doesn't matter 
// it give us the ability to create methods - which are functions that belong to an object - DO NOT USE ARROW FUNCTIONS
// used for collections of data 

// anatomy of an object 

// const dog = {
//   // key value pairs 
//   name: 'Ada',
//   breed: 'Bali Dog',
//   age: 4,
//   colour: 'brindle',
//   favFood: 'Salmon',
//   // methods
//   eat: function(){
//     return `${this.name} is a ${this.breed} and their favourite food is ${this.favFood}`;
//   }
// }

const dog = {
    // key value pairs 
    'name': 'Ada',
    'breed': 'Bali Dog',
    'age': 4,
    'colour': 'brindle',
    'fav Food': 'Salmon',
    // methods
    eat: function(){
      return `${this.name} is a ${this.breed} and their favourite food is ${this.['fav Food']}`;
    }
  }
  console.log(dog['fav Food']);
  console.log(dog.name);
  
  // // dot notation
  // console.log(dog.name);
  // // bracket notation - we have to use this if our keys are strings with spaces in them
  // console.log(dog['name']);
  
  // //invoke the eat function
  // console.log(dog.eat());
  
  // This keyword in javaScript 
  
  // window binding 
  // if none of the other rules apply this will return the window, the global object in node or undefined in strict mode 
  
  // implicit binding 
  // applies to objects with methods, its about 80% of use cases and it says when the function is invoked, look to the left of the dot, that's what 'this refers to'
  
  const places = [
    {city: 'Toronto', country: 'Canada', region: 'North America'},
    {city: 'Portland', country: 'USA', region: 'North America'},
    {city: 'Tokyo', country: 'Japan', region: 'Asia'},
    {city: 'Cairo', country: 'Egypt', region: 'North Africa'},
    {city: 'Rio', country: 'Brazil', region: 'South America'},
    {city: 'Talouse', country: 'France', region: 'Europe'},
    {city: 'Moscow', country: 'Russia', region: 'Europe'},
    {city: 'Manila', country: 'Philippines', region: 'Asia'},
  ];
  
  // console.log(places);
  
  // loop through this array - find all of the cities in Europe and return the array with the cities in Europe 
  
  // creating an empty array to push our results to
  const europe = [];
  
  // looping through the entire array and checking the region at each index
  for(let i = 0; i < places.length; i++){
    // if the region at this index matches the string of Europe then push the city to the europe array
    if(places[i].region === 'Europe'){
      europe.push(places[i].city);
    }
  }
  
  // console.log(europe);
  
  // How could I turn this into a function so that I could check any region inside of any array?? 
  
  function checkRegion(array, region){
    const newArray = [];
    for(let i = 0; i < array.length; i++){
      if(array[i].region === region){
        newArray.push(array[i].city);
      }
    }
    return newArray;
  }
  
  console.log(checkRegion(places, 'North Africa'));
  console.log(checkRegion(places, 'Europe'));