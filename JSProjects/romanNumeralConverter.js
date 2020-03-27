// Convert the given number into a roman numeral.

function convertToRoman(num) {
  let romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

let romanNumber = "";
  for (let item in romanNumerals){
    while (num >= romanNumerals[item]){
      romanNumber += item;
      num -= romanNumerals[item];
    }
  }
 return romanNumber;
}
console.log(convertToRoman(5));
