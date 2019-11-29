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
function diffArray(arr1, arr2) {
  var newArr = [];
  // arr1 = arr1.toString().split(',').map(Number);
  // arr2 = arr2.toString().split(',').map(Number);

  for(var i in arr1){
    if(arr2.indexOf(arr1[i]) === -1){
      newArr.push(arr1[i]);
    }
  }
  for(i in arr2){
    if(arr1.indexOf(arr2[i]) === -1){
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}

console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
