var input = `1
5
1 2 3 4 5`;
var input = input.split("\n");
var t = +input[0];
for (let i = 0; i < t; i++) {
  var n = input[2 * i + 1].split(" ").map(Number);
  var arr = input[2 * i + 2].split(" ").map(Number);
  var count = 0;
  for (let i = 0; i < n; i++) {
    var res = [];
    for (let j = i; j < n; j++) {
      res.push(arr[j]);

      if (res[0] % 2 == 0 && res[res.length - 1] % 2 == 0) {
        count++;
      }
    }
  }
  console.log(count);
}
