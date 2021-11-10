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
  stack.push(0)
  var res = [];
  res[0]=1
  for (let i = 1; i < arr.length; i++) {
  while(arr[stack.length-1]<arr[i]){
  stack.pop()
  }
  if(stack.length==0){
      res[i]=i+1
  }
  else{
      res[i] = i -stack[stack.length-1];
  }
      stack.push(i)
  }
  console.log(res.join(" "))
}
