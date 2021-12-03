var input = `2
5
1 3 5 4 2
6
1 3 5 6 4 2`;
var input=input.split("\n");
var t=+input[0];
for (let i = 0; i <t; i++) {
   var n = input[2 * i + 1].split(" ").map(Number);
   var arr=input[2*i+2].split(" ").map(Number)
   console.log(arr.sort().join(" "))
}