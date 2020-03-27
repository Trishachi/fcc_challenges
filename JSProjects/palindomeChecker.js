function palindrome(str) {
  // remove all alphanumeric xters in string
  //and convert to lower case
  var regEx = /[\W_]/g; //also = /[^A-Za-z0-9]/g;
  lowStr = str.toLowerCase().replace(regEx, '');
  //reverse the value of the new string
  newStr = lowStr.split("").reverse().join("");
  //chk if new string is equal to old string and
  //corresponding value
  return lowStr === newStr;
}

console.log(palindrome("My age is 0, 0 si ega ym."));
//palindrome("_eye")