// JavaScript Algorithms and Data Structures Projects: Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
  let item;
  let xters = "";
  for (item of str){
    let key = item.charCodeAt();
    if(key >= 65 && key <= 77){
      xters += String.fromCharCode(key + 13);
    } else if(key >= 78 && key <= 99){
      xters += String.fromCharCode(key - 13);
    } else {
      xters += String.fromCharCode(key);
    }
  }
  return xters;
}
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
