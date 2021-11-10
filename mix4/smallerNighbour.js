var input=`8
39 27 11 4 24 32 32 1`
var input=input.split("\n");
var n=+input[0];
var arr=input[1].split(" ").map(Number);
var stack=[];
var res=[];
for (let i = 0; i < arr.length; i++) {
   while(stack[stack.length-1]>=arr[i]){
       stack.pop()
   }
    if(stack.length==0){
        res.push(-1);
    }
    if (stack[stack.length-1] < arr[i]) {
      res.push(stack[stack.length-1]);
    }
    stack.push(arr[i])
}
console.log(res.join(" "))