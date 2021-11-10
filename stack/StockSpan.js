var input = `2
7
100 80 60 70 60 75 85
5
3 5 0 9 8`;
var input=input.split("\n");
var t=+input[0];
for (let i = 0; i <t; i++) {
  var n=input[2 * i + 1].split(" ").map(Number);
  var arr = input[2 * i + 2].split(" ").map(Number);
  var stack = [];
  var res = [];
  for (let i = 0; i<n; i++) {
    while (stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }
    if (stack.length <= 0) {
      res.push(-1);
    }
    if (stack.length> 0) {
      res.push(arr.indexOf(stack[stack.length - 1]));
    }
    stack.push(arr[i]);
  }
  var ans="";
  for (let i = 0; i < arr.length; i++) {
  ans+=i-res[i]+" "
  }
  console.log(ans)
  }


