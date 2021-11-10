var input = `5
0 0 0 0 1`;
var input = input.split("\n");
var n = input[0].split(" ").map(Number);
var arr = input[1].split(" ").map(Number);
console.log(arr)
// function serch(arr) {
//   var obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     var key = arr[i];
//     if (obj[key] == undefined) {
//       obj[key] = 1;
//     } else {
//       var pre = obj[key];
//       obj[key] = pre + 1;
//     }
//   }
 
//   for (const key in obj) {
      
//      if (key==="1") {
//    for (const key in obj) {
 
//    }
//   }
// // else {
// //     return "-1";
// //   }
// }
// }
// console.log(serch(arr)
function serch(arr) {
  var start = 0;
  var end = arr.length - 1;
  while (start <= end) {
   if (arr[start] == arr[end]) {
      return mid;
    }
    if (arr[mid] > key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return "-1";
}
console.log(serch(arr, key));