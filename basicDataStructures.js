//Notes
//Multidimensional array = arrays with 1 or more arrays nested within.
//Arrays are mutable and can be programatically modified using methods like shift(), push()etc
//splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:

//Check if an object has a property - using hasOwnProperty() or in
// Objects.keys(); - Generates an array containg all keys stored in an object. passes in an object as arguement

//Array methods
//array.push(element/s) - adds elements to the end of an array
//array.unshift(element/s) - adds elements to the beginning of an array
//array.pop() - removes the last element from an arrays - takes no parameters
//array.shift() - removes the first element in an array - takes no parameters
//splice(start, no of elemets to remove, new element) - removes any number of consecutive elements from anywhere in an array.
        //modifies the original array
//slice(start, stop) -  rather than modifying an array, copies, or extracts, a given number of elements to a new array, leaving the array it is called upon untouched.



//Codes
// Basic Data Structures - 1: Add Items to an Array with push() and unshift()
//We have defined a function, mixedNumbers, which we are passing an array as an argument.
//Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of
//the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.
// function mixedNumbers(arr) {
//   // change code below this line
//   arr.unshift('I', 2, 'three');
//   arr.push(7, 'VIII', 9);
//   // change code above this line
//   return arr;
// }
// // do not change code below this line
// console.log(mixedNumbers(['IV', 5, 'six']));

// Basic Data Structures -2: Remove Items from an Array with pop() and shift()
// Modify the function, using pop() and shift(), to remove the first and last elements
//of the argument array, and assign the removed elements to their corresponding variables,
//so that the returned array contains their values.
// function popShift(arr) {
//   let popped = arr.pop(); // change this line
//   let shifted = arr.shift(); // change this line
//   return [shifted, popped];
// }
// // do not change code below this line
// console.log(popShift(['challenge', 'is', 'not', 'complete']));

// Basic Data Structures - 3 : Remove Items Using splice()
//We've defined a function, sumOfTen, which takes an array as an argument and returns the sum of that array's elements.
// Modify the function, using splice(), so that it returns a value of 10.
// function sumOfTen(arr) {
//   // change code below this line
//   arr.splice(2,2);
//   // change code above this line
//   return arr.reduce((a, b) => a + b);
// }
// // do not change code below this line
// console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

// Basic Data Structures - 4: Add Items Using splice()
//We have defined a function, htmlColorNames, which takes an
//array of HTML colors as an argument. Modify the function using
//splice() to remove the first two elements of the array and add
//'DarkSalmon' and 'BlanchedAlmond' in their respective places.
// function htmlColorNames(arr) {
//   // change code below this line
//   arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
//   // change code above this line
//   return arr;
// }
// // do not change code below this line
// console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));


// Basic Data Structures - 5: Copy Array Items Using slice()
//Modify the function using slice() to extract information from the argument array and return a new array that contains the elements 'warm' and 'sunny'.
// function forecast(arr) {
//   // change code below this line
//     let todaysWeather = arr.slice(2,4);
//     return todaysWeather;
// }
// // do not change code below this line
// console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// Basic Data Structures 6: Copy an Array with the Spread Operator
//The function is supposed to return a new array made up of num copies of arr.
//We have done most of the work for you, but it doesn't work quite right yet.
//Modify the function using spread syntax so that it works correctly
// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // change code below this line
//     newArr.push([...arr]);
//     // change code above this line
//     num--;
//   }
//   return newArr;
// }
// // change code here to test different cases:
// console.log(copyMachine(["it works"], 3));

// Basic Data Structures - 7: Combine Arrays with the Spread Operator
//modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].
// function spreadOut() {
//   let fragment = ['to', 'code'];
//   let sentence = ['learning', ...fragment, 'is', 'fun']; // change this line
//   return sentence;
// }
// // do not change code below this line
// console.log(spreadOut());

// Basic Data Structures - 8: Check For The Presence of an Element With indexOf()
//Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.
// function quickCheck(arr, elem) {
//   // change code below this line
// if(arr.indexOf(elem) == -1){
//   return false;
// }
// else {
//   return true;
// }
//   // change code above this line
// }
// // change code here to test different cases:
// console.log(quickCheck(["squash", "onions", "shallots"], "onions"));

// Basic Data Structures - 9: Iterate Through All an Array's Items Using For Loops
// elem represents an element that may or may not be present on one or more of the
//arrays nested within arr. Modify the function, using a for loop, to return a filtered
//version of the passed array such that any array nested within arr containing elem has been removed.
// function filteredArray(arr, elem) {
//   let newArr = [];
//   // change code below this line
//  for (let i = 0; i < arr.length; i++) {
//    if (arr[i].indexOf(elem) == -1) {
//      newArr.push(arr[i]);
//    }
//  }
//   // change code above this line
//   return newArr;
// }
// // change code here to test different cases:
// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


// Basic Data Structures -10: Create complex multi-dimensional arrays
//Modify myNestedArray, using any combination of strings, numbers, and
//booleans for data elements, so that it has exactly five levels of depth
//(remember, the outer-most array is level 1). Somewhere on the third level,
//include the string 'deep', on the fourth level, include the string 'deeper',
//and on the fifth level, include the string 'deepest'.
// let myNestedArray = [
//   // change code below this line
//   ['unshift', false, 1, 2, 3, 'complex', 'nested'],
//   ['loop', 'shift', 6, 7, 1000, 'method'],
//   ['concat', ['deep', ['deeper', ['deepest'],true], 2], false, true, 'spread', 'array'],
//   ['mutate', 1327.98, 'splice', 'slice', 'push'],
//   ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
//   // change code above this line
// ];
// console.log(myNestedArray[2][1][1][1]);

// Basic Data Structures -11: Add Key-Value Pairs to JavaScript Objects
//Using the same syntax, we can also add new key-value pairs to objects.
//We've created a foods object with three entries. Add three more entries:
// bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.
// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28
// };
// // change code below this line
// foods.strawberries = 10;
// foods.grapes = 13;
// foods.carrots = 5;
// // change code above this line
// console.log(foods);

// Basic Data Structures - 12: Access Property Names with Bracket Notation
//We've defined a function, checkInventory, which receives a scanned item as an argument.
//Return the current value of the scannedItem key in the foods object. You can assume that
//only valid keys will be provided as an argument to checkInventory.
// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27
// };
// // do not change code above this line
// function checkInventory(scannedItem) {
//   // change code below this line
//   return foods[scannedItem];
// }
// // change code below this line to test different cases:
// console.log(checkInventory("strawberries"));

// Basic Data Structures -13: Use the delete Keyword to Remove Object Properties
//Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object.
// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27
// };
// // change code below this line
// delete foods.oranges;
// delete foods.plums;
// delete foods.strawberries;
// // change code above this line
// console.log(foods);

// Basic Data Structures - 14: Check if an Object has a Property
// Finish writing this function so that it returns true only if
//the users object contains all four names, Alan, Jeff, Sarah,
//and Ryan, as keys, and false otherwise.
// let users = {
//   Alan: {
//     age: 27,
//     online: true
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: true
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };
// function isEveryoneHere(obj) {
//   // change code below this line
//   if (users.hasOwnProperty('Alan', 'Jeff', 'Sarah', 'Ryan')){
//     return true;
//   } else {
//     return false;
//   }
//   // change code above this line
// }
// console.log(isEveryoneHere(users));

// Basic Data Structures - 15: Iterate Through the Keys of an Object with a for...in Statement
//use a for...in statement within this function to loop through the users in the users object
//and return the number of users whose online property is set to true.
// let users = {
//   Alan: {
//     age: 27,
//     online: false
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: false
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };
// function countOnline(obj) {
//   // change code below this line
//   let count = 0;
//   for (let user in obj) {
//     if (obj[user].online === true) {
//         console.log(user);
//         count++;
//     }
//   }
//   return count;
// }
// console.log(countOnline(users));

// Basic Data Structures - 16: Generate an Array of All Object Keys with Object.keys()
//Finish writing the getArrayOfUsers function so that it returns an array containing all
//the properties in the object it receives as an argument.
// let users = {
//   Alan: {
//     age: 27,
//     online: false
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: false
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };
//
// function getArrayOfUsers(obj) {
//   // change code below this line
//   return Object.keys(obj);
//   // change code above this line
// }
// console.log(getArrayOfUsers(users));


// Basic Data Structures - 17: Modify an Array Stored in an Object
//Finish writing it so that it takes a user object and adds the
//name of the friend argument to the array stored in user.data.friends and returns that array.
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};
function addFriend(userObj, friend) {
  // change code below this line
  (userObj.data.friends).push(friend);
  return userObj.data.friends;
   // change code above this line
}
console.log(addFriend(user, 'Pete'));
