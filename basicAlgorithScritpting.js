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

//Numeric sort
//By default, the sort() function sorts values as strings.
//This works well for strings ("Apple" comes before "Banana").
//However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
//Because of this, the sort() method will produce incorrect result when sorting numbers.
//You can fix this by providing a compare function:



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
// function truncateString(str, num) {
//   if (str.length > num){
//     return str.substring(0, num) + '...';
//   }
//   return str;
// }
// console.log(truncateString("Absolutely Longer", 2));

// Basic Algorithm Scripting: Finders Keepers
//Create a function that looks through an array (first argument) and
//returns the first element in the array that passes a truth test (second argument).
// If no element passes the test, return undefined.
// function findElement(arr, func) {
//   let num = 0;
// //loop through array array
// for(let i = 0; i < arr.length; i++) {
//   num = arr[i];
//   //if func is satisfied
//   if ( func(num)) {
//       //return array Element
//       return num;
//   }
// }
// //if funct not satisfied at end of array
// // return undefined
//   return undefined;
// }
// console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));

// Basic Algorithm Scripting: Boo who
//Check if a value is classified as a boolean primitive. Return true or false.
// function booWho(bool) {
//   if (typeof bool === "boolean") {
//     return true;
//   }
//   return false;
// }
// console.log(booWho([].slice));

// Basic Algorithm Scripting: Title Case a Sentence
// Return the provided string with the first letter of each word capitalized.
//Make sure the rest of the word is in lower case.
// function titleCase(str) {
//   var firstLetter = [];
//   //collect string text from user input and convert to all lower case
//   str = str.toLowerCase();
//   //Slice the sentence into words
//   var strWords = str.split(" ");
//    //iterate through the words
//   for (var i = 0; i < strWords.length; i++){
//     //Find the firt letter of each word
//     //Change the first letter to upper uppercase
//     //Uncomment the line below to use the array index method
//     //firstLetter.push(strWords[i][0].toUpperCase()+strWords[i].slice(1));
//         //Using the charAt method instead
//         firstLetter.push(strWords[i].charAt(0).toUpperCase()+strWords[i].slice(1));
//     //slice(1) takes care of the duplication of the first letter in both upper and lower case
//     }
//     //join back the array of words to form a string
//   return firstLetter.join(" ");
// }
// console.log(titleCase("I'm a little tea pot"));

// Basic Algorithm Scripting: Slice and Splice
//Use the array methods slice and splice to copy each element of the first array into the second array, in order.
//Begin inserting elements at index n of the second array.
//Return the resulting array. The input arrays should remain the same after the function runs.
// function frankenSplice(arr1, arr2, n) {
//   //create a new array to ensure original array is not modified
//   let newArr = arr2.slice(0);
//   newArr.splice(n, 0, ...arr1);
//   return newArr;
// }
// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// Basic Algorithm Scripting: Falsy Bouncer
//Remove all falsy values from an array.
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN
// function bouncer(arr) {
//   // map through the array
//     //if array index is Falsy
//     //delete from Arrays
//     return arr.filter(Boolean);
//
// }
// console.log(bouncer([7, "ate", "", false, 9]));

// Basic Algorithm Scripting: Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array
 // (first argument) once it has been sorted. The returned value should be a number.
//  function getIndexToIns(arr, num) {
//   // sort the array
//   arr.sort(function(a, b){return a - b});
//   //Loop through the array
//   for (let i = 0; i < arr.length; i++){
//     //check if each array index is greater than "num"
//     if (arr[i] >= num){
//       //return the first index that is greater than num
//       return i;
//     }
//   }
//   return arr.length;
// }
// console.log(getIndexToIns([2, 5, 10], 15));

// Basic Algorithm Scripting: Mutations
// Return true if the string in the first element of the array contains
//all of the letters of the string in the second element of the array.
// function mutation(arr) {
//   // convert strings to lower cases for easy manipulation
//   let newStr1 = arr[0].toLowerCase();
//   let newStr2 = arr[1].toLowerCase();
//    //convert second array to Characters
//    //Test if strTest is contained in first array
//    for (let i = 0; i < newStr2.length; i++){
//      if(newStr1.indexOf(arr[1][i].toLowerCase()) === -1){
//        return false;
//      }
//    }
//   return true;
// }
// console.log(mutation(["hello", "hey"]));

// Basic Algorithm Scripting: Chunky Monkey
// Write a function that splits an array (first argument) into
//groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  //create variable to hold new array
  // slice up the original array.
  //loop through the original arrays
  //create new arrays (innerArr) the length of "size"
  //push into the new array variable
   let newArr = [];

   for (let index = 0; index < arr.length; index += size){
     let innerArr = arr.slice(index, index + size);
     newArr.push(innerArr);
   }

  return newArr;
}
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
