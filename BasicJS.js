// function multiply(arr, n) {
//   if (n <= 0){
//     return arr[0];
//   } else {
//     return multiply(arr, n-1) + arr[n];
//   }
// }
//
// console.log(multiply([2, 3, 4], 1));

// Basic JavaScript: Use Recursion to Create a Range of Numbers
// We have defined a function named rangeOfNumbers with two parameters.
// The function should return an array of integers which begins with a number
// represented by the startNum parameter and ends with a number represented
// by the endNum parameter. The starting number will always be less than or equal to the ending number.
// Your function must use recursion by calling itself and not use loops of any kind.
// It should also work for cases where both startNum and endNum are the same.

// function rangeOfNumbers(startNum, endNum) {
//   if (startNum - endNum == 0) {
//     return [startNum];
//   } else if (startNum < endNum){
//     let numbers = rangeOfNumbers(startNum, endNum - 1);
//     numbers.push(endNum);
//     return numbers;
//   }
// };
//
// console.log(rangeOfNumbers(1, 5));

// Basic JavaScript: Use Recursion to Create a Countdown
// We have defined a function called countdown with two parameters.
// The function should take an array in the myArray parameter and
// append the numbers n through 1 based on the n parameter.
// For example, calling this function with n = 5 will pad the array with
// the numbers [5, 4, 3, 2, 1] inside of it. Your function must use recursion
// by calling itself and must not use loops of any kind.

//Only change code below this line
function countdown(myArray, n){
  if (n <= 0){
    return [];
  } else {
    myArray.push(n);
    countdown(myArray, n - 1);
  }
  return myArray;
}

console.log(countdown([], 5));
