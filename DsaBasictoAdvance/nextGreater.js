var input = `1
4
1 3 2 4`;
var input=input.split("\n");
var t=+input[0];
for (let i = 0; i <t; i++) {
    var n=input[2*i+1].split(" ").map(Number);
    var arr=input[2*i+2].split(" ").map(Number)
    var stack=[];
    var res=[];
    for (let i=n-1;i >= 0; i--) {
        while(stack[stack.length - 1]<=arr[i]){
             stack.pop()
        }
          if (stack.length == 0) {
            res.push(-1);
          }
        if(stack.length>0){
            res.push(stack[stack.length-1])
        }
        stack.push(arr[i]);
        
    }
    console.log(res.reverse().join(" "))
}