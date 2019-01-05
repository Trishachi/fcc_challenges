// Notes
// objects (inc arrays and functions) assigned to a variable using const are still mutable.
// Using const only prevents reassignment of the variable identifier.
//
// To ensure you object does not change, use the Object.freeze(obj) function.Once the object is frozen, you can no longer add, update, or delete properties from it.
// Any attempt at changing the object will be rejected without an error.
//
// Arrow Function Syntax
// const myFunc = () => {
// //const myVar = "value";
// return myVar;
// //} or
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

// Template literals allow you to create multi-line strings and to use string interpolation features to create strings.
// Template literal with multi-line and string interpolation
// const greeting = `Hello, my name is ${person.name}!
// I am ${person.age} years old.`;

// Getters and Setters - they hide internal implementation details.
// Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.
// Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function.

// Import vs Require
// with import, we can choose which parts of a module or file to load into a given file, saving time and memory.
// import won't work on a browser directly. However, we can use various tools to create code out of this to make it work in browser.
// In most cases, the file path requires a ./ before it; otherwise, node will look in the node_modules directory first trying to load it as a dependency.
//import and export are non-browser features

// with export,  we can import any code we export into another file with the import syntax
//export default is used to export only one value from a file.  It is also used to create a fallback value for a file or module.
// Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file.
// Additionally, you cannot use export default with var, let, or const

//Importing a default export uses a different syntax
// The syntax differs in one key place - the imported value, add, is not surrounded by curly braces, {}. Unlike exported values, the primary method of importing a
// default export is to simply write the value's name after import.

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
// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };
// const half = (function() {
//   "use strict"; // do not change this line
//
//   // change code below this line
//   return function half({max, min}) {
//     // use function argument destructuring
//     return (max + min) / 2.0;
//   };
//   // change code above this line
//
// })();
// console.log(stats); // should be object
// console.log(half(stats)); // should be 28.015

// ES6 - 8: Create Strings using Template Literals
// Use template literal syntax with backticks to display each entry of the result object's failure array.
// Each entry should be wrapped inside an li element with the class attribute text-warning, and listed within the resultDisplayArray.
// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["id-blacklist", "no-dup-keys"]
// };
// function makeList(arr) {
//   "use strict";
//
//   // change code below this line
//   const resultDisplayArray =
//       arr.map(fail => `<li class="text-warning">${fail}</li>`);
//   // change code above this line
//   return resultDisplayArray;
// }
// /**
//  * makeList(result.failure) should return:
//  * [ `<li class="text-warning">no-var</li>`,
//  *   `<li class="text-warning">var-on-top</li>`,
//  *   `<li class="text-warning">linebreak</li>` ]
//  **/
// const resultDisplayArray = makeList(result.failure);
// console.log(resultDisplayArray);

// ES6 - 9: Write Concise Object Literal Declarations Using Simple Fields
// Use simple fields with object literals to create and return a Person object.
// const createPerson = (name, age, gender) => {
//   "use strict";
//   // change code below this line
//   return {
//     name, age, gender
//   };
//   // change code above this line
// };
// console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

// ES6 - 10: Write Concise Declarative Functions with ES6
// Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.
//original code
// const bicycle = {
//   gear: 2,
//   setGear: function(newGear) {
//     "use strict";
//     this.gear = newGear;
//   }
// };
// change code below this line
// const bicycle = {
//   gear: 2,
//   setGear(newGear) {
//     "use strict";
//     this.gear = newGear;
//   }
// };
// // change code above this line
// bicycle.setGear(48);
// console.log(bicycle.gear);

// ES6 - 11: Use class Syntax to Define a Constructor Function
// Use class keyword and write a proper constructor to create the Vegetable class.
// The Vegetable lets you create a vegetable object, with a property name, to be passed to constructor.
// function makeClass() {
//   "use strict";
//   /* Alter code below this line */
//   class Vegetable {
//     constructor(name) {
//       this.name = name;
//     }
//   }
//   /* Alter code above this line */
//   return Vegetable;
// }
// const Vegetable = makeClass();
// const carrot = new Vegetable('carrot');
// console.log(carrot.name); // => should be 'carrot'


// ES6 - 12: Use getters and setters to Control Access to an Object
// Use class keyword to create a Thermostat class. The constructor accepts Fahrenheit temperature.
// Now create getter and setter in the class, to obtain the temperature in Celsius scale.
// Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit scale, and C is the value of the same temperature in Celsius scale
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(Fahrenheit) {
      this._celsius = 5/9 * (Fahrenheit - 32);
    }
    //getter
    get temp(){
      return this.temp;
    }
    //setter
    set temp(temperature){
      this.temp = temperature;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
console.log(temp);

// ES6 - 13: Understand the Differences Between import and require
// Add the appropriate import statement that will allow the current file to
// use the capitalizeString function. The file where this function lives is called
//  "string_functions", and it is in the same directory as the current file.
// "use strict"
// import { capitalizeString } from "string_functions";
