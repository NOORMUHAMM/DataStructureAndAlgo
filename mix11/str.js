var input = `2 2
1 2 3 4`;
var input = input.split("\n");
var [l, r] = input[0].split(" ").map(Number);
var array = input[1].split(" ").map(Number);
var line = 0;
var arr = [];
for (let i = 0; i < l; i++) {
  var arr1 = [];
    for (let k = 0; k < r; k++) {
      arr1.push(array[line]);
      line++;
    }
    arr.push(arr1);
 
}
console.log(arr)