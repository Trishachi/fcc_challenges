//Sum All Numbers in a Range
function sumAll(arr) {
  let total = 0;
  let start = Math.min(...arr);
  let end = Math.max(...arr);
  for(var i = start; i <= end; i++){
    total += i;
  }
  return total;
}
console.log(sumAll([10, 5]));
