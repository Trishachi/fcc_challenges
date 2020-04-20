// Return true if the passed string looks like a valid US phone number.

// The following are examples of valid formats for US numbers (refer to the tests below for other variants):
//
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

// 1st Solution
// function telephoneCheck(str) {
//   if(str[0] === "-"){
//     return false;
//   }
//   let checkedNumber = str.replace(/-|\s/g, "");
//   if(checkedNumber[1] === "(" && checkedNumber[5] === ")"){
//     checkedNumber = checkedNumber.replace(/\(|\)/g, "");
//   }
//   if(checkedNumber[0] === "(" && checkedNumber[4] === ")"){
//     checkedNumber = checkedNumber.replace(/\(|\)/g, "");
//   }
//
//   console.log(checkedNumber);
//   if(checkedNumber.length === 10){
//     return true;
//   } else if (checkedNumber.length === 11 && checkedNumber[0] === "1"){
//     return true;
//   }
//   return false;
// }

// 2nd Solution
function telephoneCheck(str) {
  if(str[0] === "-"){
      return false;
    }
   let checkedNumber = str.replace(/-|\s/g, "");
  // Set up your Booleans here
  let hasTenDigits = false;
  let hasElevenDigits = false;
  let startsWithOne = false;
  let hasPermittedCharsOnly = false;
  let hasCorrectParentheses = false;

  // Write regular expressions here so that the Booleans contain the correct values
  // INSERT CODE WITH REGEX HERE
  if(checkedNumber[1] === "(" && checkedNumber[5] === ")"){
    checkedNumber = checkedNumber.replace(/\(|\)/g, "");
    hasCorrectParentheses = true;
    }
  if(checkedNumber[0] === "(" && checkedNumber[4] === ")"){
    checkedNumber = checkedNumber.replace(/\(|\)/g, "");
    hasCorrectParentheses = true;
    }
  if(checkedNumber.indexOf("(") == -1 && checkedNumber.indexOf(")" == -1)){
    hasCorrectParentheses = true;
  }
  hasTenDigits = checkedNumber.length === 10;
  hasElevenDigits = checkedNumber.length === 11;
  startsWithOne = checkedNumber[0] === "1";
  hasPermittedCharsOnly = (/\(|\)|[0-9]/g).test(checkedNumber);

  // console.log(checkedNumber);
  // console.log(hasTenDigits);
  // console.log(hasElevenDigits);
  // console.log(startsWithOne);
  // console.log(hasPermittedCharsOnly);
  // console.log(hasCorrectParentheses);

  // Use the Booleans to return true or false, without needing to string together one complex regular expression
  if (!hasTenDigits && !hasElevenDigits) {
    return false;
  } else if (!hasPermittedCharsOnly || !hasCorrectParentheses) {
    return false;
  } else if (hasElevenDigits && !startsWithOne) {
    return false;
  } else {
    return true;
  }
} 
console.log(telephoneCheck("1 555-555-5555"));
