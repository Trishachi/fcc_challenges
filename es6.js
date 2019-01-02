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
const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
