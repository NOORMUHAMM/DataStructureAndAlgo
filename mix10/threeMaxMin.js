var input = `8
1 2 3 4 2 1 6 5`;
var input=input.split("\n");
var n=+input[0];
var arr=input[1].split(" ").map(Number);

var min=[];
var max=[];
if (arr.length < 6) {
  min.push("Not Possible");
  max.push("Not Possible");
}
else{
var array=[]
var object={}
for (let i = 0; i <arr.length; i++) {
 var key=arr[i];
 if(object[key]===undefined){
     object[key]=1
 }
 else{
     var pre=object[key]
     object[key]=pre+1
 }
}
for (const key in object) {
array.push(key)
}
var res=array.sort((a,b)=>a-b)

for (let i = 0; i < array.length; i++) {
if(min.length<3){
    min.push(array[i])
}
    
}
for (let i=array.length-1; i>=0 ; i--) {
if (max.length < 3) {
  max.push(array[i]);
}
    
}
}
console.log(min.join(" "))
console.log(max.reverse().join(" "));