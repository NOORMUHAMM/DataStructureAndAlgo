var input = `11
55 -5 -8 2 0 9 4 5 6 9 1`;
var input = input.split("\n");
var n = +input[0];
var arr = input[1].split(" ").map(Number);
arr.sort((a,b)=>a-b)
console.log(arr[0] ,arr[arr.length-1])