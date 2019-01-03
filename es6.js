// Notes
// objects (inc arrays and functions) assigned to a variable using const are still mutable.
// Using const only prevents reassignment of the variable identifier.

// To ensure you object does not change, use the Object.freeze(obj) function.Once the object is frozen, you can no longer add, update, or delete properties from it.
// Any attempt at changing the object will be rejected without an error.

// Arrow Function Syntax
// const myFunc = () => {
//   const myVar = "value";
//   return myVar;
// } or
// const myFunc = () => "value" ==> when there is no function body

// The map() method creates a new array with the results of calling a function for every array element.
// map() method calls the provided function once for each element in an array, in order.
// Syntax - array.map(function(currentValue, index, arr), thisValue)

// The filter() method creates an array filled with all array elements that pass a test (provided as a function).
// Synyax - array.filter(function(currentValue, index, arr), thisValue)

// The reduce() method reduces the array to a single value. It executes a provided function for each value of the array (from left-to-right).
// Syntax - array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

//Default parameters - sets in when a value is not specified for an arguement
//Rest Operator - With the rest operator, you can create functions that take a variable number of arguments.

// ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.
// The spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:
// const spreaded = ...arr; // will throw a syntax error

// Destructuring assignment is special syntax for neatly assigning values taken directly from an object to variables.
// One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list.
// Consequently, you cannot pick or choose which elements you want to assign to variables.
// Destructuring an array lets allows you to choose.
// We can also access the value at any index in an array with destructuring by using commas to reach the desired index:
// const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c); // 1, 2, 5

// The rest element only works correctly as the last variable in the list. As in, you cannot use the rest operator to catch a subarray that leaves out last element of the original array.

// Codes

// ES6- 1: Write Higher Order Arrow Functions
// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
// const squareList = (arr) => {
//   "use strict";
//   // change code below this line
//   const squaredIntegers = arr.filter( (num) => (Number.isInteger(num) && (num > 0)))
//                              .map((num) => Math.pow(num, 2) );
//   // change code above this line
//   return squaredIntegers;
// };
// // test your code
// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);

// ES6 - 2: Use the Rest Operator with Function Parameters
// const sum = (function() {
//   "use strict";
//   return function sum(...args) {
//     return args.reduce((a, b) => a + b, 0);
//   };
// })();
// console.log(sum(1, 2, 3)); // 6

// ES6 -3 : Use Destructuring Assignment to Assign Variables from Objects
// const AVG_TEMPERATURES = {
//   today: 77.5,
//   tomorrow: 79
// };
//
// function getTempOfTmrw(avgTemperatures) {
//   "use strict";
//   // change code below this line
//   const {tomorrow:tempOfTomorrow} = avgTemperatures;
//   // change code above this line
//   return tempOfTomorrow;
// }
//
// console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

// ES6 - 4: Use Destructuring Assignment to Assign Variables from Nested Object
// const LOCAL_FORECAST = {
//   today: { min: 72, max: 83 },
//   tomorrow: { min: 73.3, max: 84.6 }
// };
//
// function getMaxOfTmrw(forecast) {
//   "use strict";
//   // change code below this line
//   const { tomorrow: { max:maxOfTomorrow }} = forecast; // change this line
//   // change code above this line
//   return maxOfTomorrow;
// }
//
// console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

// ES6 - 5: Use Destructuring Assignment to Assign Variables from Arrays
// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
// let a = 8, b = 6;
// (() => {
//   "use strict";
//   // change code below this line
//   [a, b] = [b, a];
//   // change code above this line
// })();
// console.log(a); // should be 6
// console.log(b); // should be 8

// ES6 - 6: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
// Use destructuring assignment with the rest operator to perform an effective Array.prototype.slice() so that arr is a sub-array
// of the original array source with the first two elements omitted.
// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {
//   "use strict";
//   // change code below this line
//   const [a, b, ...arr] = list; // change this
//   // change code above this line
//   return arr;
// }
// const arr = removeFirstTwo(source);
// console.log(arr); // should be [3,4,5,6,7,8,9,10]
// console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

// ES6 - 7: Use Destructuring Assignment to Pass an Object as a Function's Parameters
// Use destructuring assignment within the argument to the function half to send only max and min inside the function.
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return function half({max, min}) {
    // use function argument destructuring
    return (max + min) / 2.0;
  };
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015
