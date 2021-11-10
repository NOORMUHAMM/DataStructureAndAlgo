var input = `7`;
var input = input.split("\n");
var a = 0;
var b = 1;
var num = +input[0];
var arr=[]
function main() {
  febonacci(a, b, num - 2);
}
main();
function febonacci(a, b, num) {
  if (num == 0) {
    return ;
  }

  var c = a + b;
  arr.push(c)
  febonacci(b, c, num - 1);
 
}
console.log(arr[arr.length-1]+arr[arr.length-2])