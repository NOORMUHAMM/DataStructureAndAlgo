var input=`1 2 4 5 7`
var input=input.split("\n");
var arr=input[0].split(" ").map(Number);
var stack=[];
for (let i = 0; i < arr.length; i++) {
stack.push(arr[i])
    
}
while(stack.length!=0){
    ch=stack.pop()
    console.log(ch)
}