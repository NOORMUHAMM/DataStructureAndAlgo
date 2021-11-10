var input = `3
1 2 3`;
var input = input.split("\n");
var n = +input[0];
var arr = input[1].split(" ").map(Number);
var count = 0;
for (let i = 0; i < n; i++) {
  var sum = 0;

  for (let j = i; j < n; j++) {
    sun += arr[j];

    if (sum % 2 == 0) {
      count++;
    }
  }
}
console.log(count);
