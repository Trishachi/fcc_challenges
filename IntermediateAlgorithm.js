//Sum All Numbers in a Range
// function sumAll(arr) {
//   let total = 0;
//   let start = Math.min(...arr);
//   let end = Math.max(...arr);
//   for(var i = start; i <= end; i++){
//     total += i;
//   }
//   return total;
// }
// console.log(sumAll([10, 5]));

//Diff Two Arrays
// function diffArray(arr1, arr2) {
//   var newArr = [];
//   // arr1 = arr1.toString().split(',').map(Number);
//   // arr2 = arr2.toString().split(',').map(Number);
//
//   for(var i in arr1){
//     if(arr2.indexOf(arr1[i]) === -1){
//       newArr.push(arr1[i]);
//     }
//   }
//   for(i in arr2){
//     if(arr1.indexOf(arr2[i]) === -1){
//       newArr.push(arr2[i]);
//     }
//   }
//   return newArr;
// }
// console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));


//Intermediate Algorithm Scripting: Seek and Destroy
// function destroyer(arr) {
//   var args = Array.from(arguments)
//   var destroyed = []
//   args.splice(0,1)
//   for(var item of arr){
//     if(args.indexOf(item) === -1){
//       destroyed.push(item)
//     }
//   }
//   return destroyed;
// }
// console.log(destroyer(["tree", "hamburger", 53], "tree", 53));

// Intermediate Algorithm Scripting: Wherefore art thou
// function whatIsInAName(collection, source) {
//     let arr = collection.filter(obj => {
//     for(let item in source){
//       if(source[item] != obj[item]){
//         return false;
//       }
//     }
//     return true;
//   });
//   return arr;
// }
// console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));

// Intermediate Algorithm Scripting: Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// function spinalCase(str) {
//   let regEx1 = /([a-z])([A-Z])/g;
//   let regEx2 = /\s|_/g;
//   let result = str.replace(regEx1, "$1 $2");
//   result = result.replace(regEx2, "-");
//   result = result.toLowerCase();
//   return result;
//   }
// console.log(spinalCase('thisIsSpinalTap"'));

// Intermediate Algorithm Scripting: Pig Latin
// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
// function translatePigLatin(str) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   for(let index = 0; index < str.length; index++){
//     let xter = str[index];
//     if(vowels.indexOf(xter) != -1 && index === 0){
//       return str + "way";
//     }
//     if(vowels.indexOf(xter) != -1){
//       return str.slice(index) + str.slice(0,index) + "ay";
//     }
//   }
//   return str + "ay";
// }
// console.log(translatePigLatin("rhythm"));

// Intermediate Algorithm Scripting: Search and Replace
// Perform a search and replace on the sentence using the
// arguments provided and return the new sentence.
// function myReplace(str, before, after) {
//   str = str.split(" ");
//   // str.forEach(word => console.log(word));
//   if(str.indexOf(before) == -1){
//     return "Text not found in the sentence";
//   } else {
//     let index = str.indexOf(before);
//     if(/^[A-Z]/.test(before)){
//       after = after.charAt(0).toUpperCase() + after.slice(1);
//       }
//     str[index] = after;
//     str = str.join(" ");
//   }
//   return str;
// }
// console.log(myReplace("His name is Tom", "Tom", "john"));

// Intermediate Algorithm Scripting: DNA Pairing
// The DNA strand is missing the pairing element.
// Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

function pairElement(str) {
  let finalArray = [];

  let dnaPair = function(xter){
    switch(xter){
      case "A":
        finalArray.push(["A", "T"]);
        break;
      case "T":
        finalArray.push(["T", "A"]);
        break;
      case "C":
        finalArray.push(["C", "G"]);
        break;
      case "G":
        finalArray.push(["G", "C"]);
        break;
      default:
        return "Invalid Character Selected"
    }
  };
  for (let text of str) {
      dnaPair(text);
    }
    return finalArray;
};
console.log(pairElement("ATCGA"));
