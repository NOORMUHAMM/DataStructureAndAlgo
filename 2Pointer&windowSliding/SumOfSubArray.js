var input = `3
5 3
1 2 1 3 4
4 5
1 2 1 3
3 2
1 2 1`;
var input = input.split("\n");
var t = +input[0];
for (let i = 0; i < t; i++) {
  var n = input[2 * i + 1].split(" ").map(Number);
  var len = n[0];
  var k = n[1];

  var arr = input[2 * i + 2].split(" ").map(Number);

  let count = 0;
  function find(arr, n, k) {
    let cur = arr[0];
    let start = 0;
    for (let i = 1; i <= len; i++) {
      while (cur > k && start < i - 1) {
        cur = cur - arr[start];
        start++;
      }
      if (cur == k) {
        count++;
        return;
      }
      if (i < len) {
        cur = cur + arr[i];
      }
    }
  }
  find(arr, len, k);

  if (count > 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
