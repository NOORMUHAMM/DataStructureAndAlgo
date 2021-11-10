var input = `2
4
8`;
var input = input.split("\n");
var t = +input[0];
for (let i = 0; i <t; i++) {
  var n=input[i+1].split(" ").map(Number);
 var res=Math.sqrt(n)
 console.log(Math.floor(res))
}