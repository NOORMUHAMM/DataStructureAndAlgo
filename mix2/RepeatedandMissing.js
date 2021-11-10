var input=`4
5
1 2 3 3 4
2
1 1
3
1 2 2
4
4 4 4 4`;
var input=input.split("\n");
var t=+input[0];
for (let i = 0; i<t; i++) {
   var n=input[2*i+1].split(" ").map(Number);
   var arr=input[2*i+2].split(" ").map(Number);
   var object = {};
   for (let i = 0; i < arr.length; i++) {
     var key = arr[i];
     if (object[key] === undefined) {
       object[key] = 1;
     } else {
       var pre = object[key];
       object[key] = pre + 1;
     }
   }
   var fin=""
   var finel=""
   for (const key in object) {
    fin+=key+""
    if(object[key]>1){
      finel+=key
    }
   }
   var res=""
   for (let i = 1; i <=arr.length; i++) {
   res+=i+""
       
   }
   var stack=[]
for (let i = 0; i < res.length; i++) {
 if(res[i]==fin[i]){
     stack.push(res[i])
 }
 else{
      stack.push(-1)
 }
    
}
var result=""
for (let i = 0; i < stack.length; i++) {
if(stack[i]==-1){
    result+=i+1
}
}
console.log(result,finel)
}