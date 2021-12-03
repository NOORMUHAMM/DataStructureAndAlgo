var input = `aaaaa`;
var input=input.split("\n");
var str=input[0];
// function find(str){
     var stack = [];
for (let i = 0; i < str.length; i++) {
   for (let j = i+1; j <=str.length; j++) {
      
       var c=str.slice(i,j)
     
      
      if(check(c)){
        var el=check(c).length;
       stack.push(el)
     

  
      }
   }
    
}
   
// }
// var x=find(str);
// console.log(x)

var arr="naman"
function check(arr){
    var res=""
    for (let i = 0; i < arr.length; i++) {
    res+=arr[i]
    }
    var res2=""
    for (let i = arr.length-1; i >=0; i--) {
      
       res2+= arr[i]
    }
    if(res===res2){
        return res
    }
    else{
        return false
    }
}
var max=0
for (let i = 0; i < stack.length; i++) {
  max=Math.max(max,stack[i])
    
}
console.log(max)