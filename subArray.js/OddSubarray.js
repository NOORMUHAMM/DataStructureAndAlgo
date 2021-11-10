var input = `3
1 2 3`;
var input = input.split("\n");
var n = +input[0];
var arr = input[1].split(" ").map(Number);
var count1 = 0;
for (let i = 0; i < n; i++) {
  var res = [];
  for (let j = i; j < n; j++) {
    res.push(arr[j]);
    var count = 0;
    for (let k = 0; k < res.length; k++) {
      if (res[k] % 2 == 1) {
        count++;
      }
    }
    if (count == res.length) {
      count1++;
    }
  }
}
console.log(count1);
