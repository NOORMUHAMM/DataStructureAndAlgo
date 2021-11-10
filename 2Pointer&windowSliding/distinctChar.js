var input = `4 2
abcc`;
var Input = input.split("\n");
var arr1 = input[0].split(" ").map(Number);
var n = arr1[0];
let k = arr1[1];
var count = 0;
let str = input[1];
var obj = {};
for (i = 0; i < k; i++) {
  var char = str[i];
  // console.log(char);
  if (obj[char] == undefined) {
    obj[char] = 1;
  } else {
    var pre = obj[char];
    obj[char] = pre + 1;
  }
}
//    console.log(obj)
var count1 = 0;
for (key in obj) {
  count1++;
}
// console.log(count1);
if (count1 == k) {
  count++;
}
// console.log(count)
var start = 0;
for (i = k; i < n; i++) {
  obj[str[start]]--; //decrementing the first value
  var char = str[i];
  if (obj[char] == undefined) {
    obj[char] = 1;
  } else {
    var pre = obj[char];
    obj[char] = pre + 1;
  }
  start++;
  // console.log(obj)
  count1 = 0;
  for (key in obj) {
    if (obj[key] == 1) {
      count1++;
    }
  }
  if (count1 == k) {
    count++;
  }
}
console.log(count);
