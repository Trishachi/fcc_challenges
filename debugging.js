//Notes

//Debugging follows the testing phase of checking if your code works as intended, and discovering it does not.
//Debugging is the process of finding exactly what isn't working and fixing it.
//JavaScript recognizes six primitive (immutable) data types: Boolean, Null, Undefined, Number, String, and Symbol (new with ES6) and one type for mutable items: Object.
//Note that in JavaScript, arrays are technically a type of object.

//"falsy" values: false, 0, "" (an empty string), NaN, undefined, and null.

//Off by one errors (sometimes called OBOE) crop up when you're trying to target a specific index of a string or array (to slice or access a segment),
//or when looping over the indices of them.

// TYpes of Errors
//1) syntax errors that prevent a program from running,
//2) runtime errors when code fails to execute or has unexpected behavior.
// 3) semantic (or logical) errors when code doesn't do what it's meant to.

// Tools
//1.) console.log(item); - Logs item on the console
//2.) console.clear(); - Clears the console
//3.) typeof  - to check the data structure, or type, of a variable



//Codes
//Debugging - 1: Understanding the Differences between the freeCodeCamp and Browser Console
// Open your browser console
// let outputTwo = "This will print to the browser console 2 times";
// // Use console.log() to print the outputTwo variable
// console.log(outputTwo);
//
// let outputOne = "Try to get this to log only once to the browser console";
// // Use console.clear() in the next line to print the outputOne only once
// console.clear(outputOne);
//
// // Use console.log() to print the outputOne variable
// console.log(outputOne);

// Debugging -2: Catch Off By One Errors When Using Indexing
// Fix the two indexing errors in the following function so all the numbers 1 through 5 are printed to the console.
// function countToFive() {
//   let firstFive = "12345";
//   let len = firstFive.length;
//   // Fix the line below
//   for (let i = 0; i < len; i++) {
//   // Do not alter code below this line
//     console.log(firstFive[i]);
//   }
// }
// countToFive();

// Debugging - 3: Use Caution When Reinitializing Variables Inside a Loop
//The following function is supposed to create a two-dimensional array with
//m rows and n columns of zeroes. Unfortunately, it's not producing the expected
//output because the row variable isn't being reinitialized (set back to an empty array) in the outer loop.
//Fix the code so it returns a correct 3x2 array of zeroes, which looks like [[0, 0], [0, 0], [0, 0]].
// function zeroArray(m, n) {
//   // Creates a 2-D array with m rows and n columns of zeroes
//   let newArray = [];
//   // let row = [];
//   for (let i = 0; i < m; i++) {
//     // Adds the m-th row into newArray
//     let row = [];
//     for (let j = 0; j < n; j++) {
//       // Pushes n zeroes into the current row to create the columns
//       row.push(0);
//     }
//     // Pushes the current row, which now has n zeroes in it, to the array
//     newArray.push(row);
//   }
//   return newArray;
// }
// let matrix = zeroArray(3, 2);
// console.log(matrix);

// Debugging 5: Prevent Infinite Loops with a Valid Terminal Condition
//The myFunc() function contains an infinite loop because the terminal
//condition i != 4 will never evaluate to false (and break the looping)
//- i will increment by 2 each pass, and jump right over 4 since i is odd to start.
//Fix the comparison operator in the terminal condition so the loop only runs for i less than or equal to 4.
function myFunc() {
  for (let i = 0; i <= 4; i += 2) {
    console.log("Still going!");
  }
}
myFunc();
