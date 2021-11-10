var input = `2
5
aaaaabbbbb
baabbbbaaa
aaaabbbbba
xxxxxxxxxy
yxxxxxxxxx
2
abcdefghij
jighdefabc`;
var input = input.split(/[\r\n]+/);
let n = Number(input[0]);
let arr = [];
let obj = {};
for (let i = 0; i < n; i++) {
  if (obj[input[i + 1].split("").sort().join("")] == undefined) {
    obj[input[i + 1].split("").sort().join("")] = input[i + 1];
  }
  let data = input[i + 1].split("").sort().join("");
}
for (key in obj) {
  arr.push(obj[key]);
}
arr.sort();
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
