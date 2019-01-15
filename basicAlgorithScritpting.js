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
//
// console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
