//Notes
//3 ways to repeat a string in JavaScript
// 1 - using a while loop
// 2 - using recursion
// 3 - using ES6 repeat() method

//Recursion is a technique for iterating over an operation by having a function
//call itself repeatedly until it arrives at a result.

//substring() - The substring() method extracts the characters from a string,
//between two specified indices, and returns the new sub string.
//string.substring(start, end)


//Codes

// Basic Algorithm Scripting: Convert Celsius to Fahrenheit
//The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
// function convertToF(celsius) {
//   var fahrenheit;
//   // Only change code below this line
//     fahrenheit = celsius * (9/5) + 32;
//
//   // Only change code above this line
//   return fahrenheit + "F";
// }
// // Change the inputs below to test your code
// console.log(convertToF(30));

// Basic Algorithm Scripting: Reverse a String
//Reverse the provided string.
// function reverseString(str) {
//   str = str.split('').reverse().join('');
//   return str;
// }
// //reverseString("hello");
// //reverseString("Howdy");
// console.log(reverseString("Greetings from Earth"));

//Basic Algorithm Scripting: Factorialize a Number
// Return the factorial of the provided integer.
// function factorialize(num) {
//   if (num < 0){
//     return -1;
//   }
//   else if (num === 0){
//     return 1;
//   }
//   else {
//     return num * factorialize(num - 1);
//     }
// }
// console.log(factorialize(5));

// //Basic Algorithm Scripting: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number.
// Find the longest word in a string function
//function findLongestWord(str) {
/*  Another way of solving the challenge
  // //initialise variable to hold word length
  // longestWord = 0;
  // //separate sentence into words
  // var strWords = str.split(" ");
  //  //iterate through the words
  //  for (var i = 0; i < strWords.length; i++){
  //    if(strWords[i].length > longestWord){
  //      longestWord = strWords[i].length;
  //    }
  //  }
  //  return longestWord;
*/
  //using the sort method
  //separate sentence into words
//   var strWords = str.split(" ");
//   //sort the words in ascending order of length
//   strWords = strWords.sort(function(smaller, bigger){
//     return smaller.length - bigger.length;
//   });
//   //since the last element is the longest, return the last element's length
//   return strWords[strWords.length - 1].length;
//  }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology"));
// console.log(findLongestWord("What is the average airspeed velocity of an unladen swallow"));

// Basic Algorithm Scripting: Return Largest Numbers in Arrays
//Return an array consisting of the largest number from each provided sub-array. For simplicity,
//the provided array will contain exactly 4 sub-arrays.
//Return Largest Number in Arrays
// function largestOfFour(arr) {
//   //declare variable to store the final Arrays
//  var largestNumbers = [];
//
//   //For the lenght of the given Arrays
//   for (var i = 0; i < arr.length; i++) {
//     //for each Array
//     var largestNumber = -1000000;
//     //find the largest Number
//     for (var x = 0; x < arr.length; x++){
//       if (largestNumber < arr[i][x]) {
//         largestNumber = arr[i][x];
//       }
//     }
//     //push into the declared array variable
//     largestNumbers.push(largestNumber);
//   }
//   //Return the final arrays of pushed items
//   return largestNumbers;
// }
// console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

// Basic Algorithm Scripting: Confirm the Ending
//Check if a string (first argument, str) ends with the given target string (second argument, target)
// function confirmEnding(str, target) {
//   let lastRegex = new RegExp(target + '$');
//   return lastRegex.test(str);
// }
// console.log(confirmEnding("Connor", "n"));

// Basic Algorithm Scripting: Repeat a String
//Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.
// function repeatStringNumTimes(str, num) {
  // using the built-in repeat() method
  // if (num > 0){
  //   return str.repeat(num);
  // } else {
  //   return "";
  // }

  //using a while loop
  // let repeatedString = "";
  // while (num > 0){
  //   repeatedString += str;
  //   num--;
  // }
  // return repeatedString;

  //using recursive function
//   if (num <= 0) {
//     return "";
//   }
//   if (num === 1){
//     return str;
//   }
//   else {
//     return str + repeatStringNumTimes(str, num - 1);
//   }
// }
// console.log(repeatStringNumTimes("abc", 0));


// Basic Algorithm Scripting: Truncate a String
//Truncate a string (first argument) if it is longer than
//the given maximum string length (second argument). Return the truncated string with a ... ending.
function truncateString(str, num) {
  if (str.length > num){
    return str.substring(0, num) + '...';
  }
  return str;
}
console.log(truncateString("Absolutely Longer", 2));
