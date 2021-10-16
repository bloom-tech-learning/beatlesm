// arrays are a list of items where the order matters


// console.log(cities);

// how to reference a specific index
// console.log(cities[0]);

// array.length property
// console.log(cities.length);

// get the last index of an array
// console.log(cities[cities.length - 1]);

// arrow syntax for function
const exampleFunction = (arr) => {
    return arr.length;
  };
  
  // console.log(exampleFunction(cities));
  
  // mutability / immutability
  
  // mutable example
  const numbers = [1,2,3,4,5,6,7,8,9,10];
  // const numbersBackwards = numbers.reverse();
  // console.log(numbers);
  // console.log(numbersBackwards);
  
  // immutable example
  const someNums = numbers.slice(0);
  const someNumsSliced = numbers.slice(0, 2);
  // console.log(someNums);
  // console.log(someNumsSliced);
  
  const backwardNumbers = [...numbers];
  // console.log(backwardNumbers);
  backwardNumbers.reverse();
  // console.log(numbers);
  // console.log(backwardNumbers);
  
  
  
  // console.log(cities);
  // add items to the beginning
  // cities.unshift('Daytona');
  
  // add items to the end
  // cities.push('Tallahassee');
  // console.log(cities);
  
  // removing the first item from an array
  // cities.shift();
  
  // removing the last item
  // cities.pop();
  // console.log(cities);
  
  
  // BREAKOUT ROOM TIME!!!!
  // Create a new array called myFavouriteCity
  // add your favourite city to the beginning of this array 
  // do not manipulate the original array
  // console.log the new array
  // console.log your favourite city
  // const newCities = [...cities];
  // newCities.unshift('Gainesville');
  // console.log(newCities);
  // console.log(newCities[0]);
  
  
  const cities = ['Orlando', 'Chicago', 'Gainesville', 'Nashua'];
  
  // can use splice to remove things at specific indexes
  // can also use for replacements
  cities.splice(1, 1);
  // cities.splice(1, 2, 'Boston', 'Seattle');
  // console.log(cities);
  
  // .includes
  // if(cities[0].includes('Orlando')) {
  //   console.log('It includes Orlando!');
  // } else {
  //   console.log('It does not include Orlando!');
  // }
  
  const apples = ['Golden Delicious', 'Red Delicious', 'Gala', 'Macintosh', 'Fuji', 'PaulaRed', 'Redfree', 'IdaRed'];
  
  // for (let i = 0; i < apples.length; i++) {
  //   console.log(`index ${i}`, apples[i].includes('Delicious'));
  // }
  
  // BREAKOUT
  // write a function to find if any apples include the string 'Red' and if they do, return the value (name of the apple/index of the array)
  
  function appleType(arr, string) {
    const returnArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //   if(arr[i].includes(string)) {
    //     returnArr.push(arr[i]);
    //   }
    // }
    
      return returnArr;
  }
  
  console.log(`${apples}`);
  
  // console.log(appleType(apples, 'Fuji'));
  
  