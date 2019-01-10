//Notes
//Multidimensional array = arrays with 1 or more arrays nested within.
//Arrays are mutable and can be programatically modified using methods like shift(), push()etc
//splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:


//Array methods
//array.push(element/s) - adds elements to the end of an array
//array.unshift(element/s) - adds elements to the beginning of an array
//array.pop() - removes the last element from an arrays - takes no parameters
//array.shift() - removes the first element in an array - takes no parameters
//splice(start, no of elemets to remove, new element) - removes any number of consecutive elements from anywhere in an array.



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
function htmlColorNames(arr) {
  // change code below this line
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  // change code above this line
  return arr;
}
// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));
