var input = `3
5
1 1 1 1 1
5
2 1 2 1 1
3
5 3 8`;
var input=input.split("\n");
var t=+input[0];
for (let i = 0; i < t; i++) {
  var n = input[2 * i + 1].split(" ").map(Number);
  var arr = input[2 * i + 2].split(" ").map(Number);
  var res = arr[arr.length-1];
// console.log(res)
  var max = 0;
  for (let j = 0; j < arr.length; j++) {
    max = Math.max(max, arr[j]);
  }
//   console.log(max);
  // console.log(res)
  finel = res - max;
  console.log(finel)
}