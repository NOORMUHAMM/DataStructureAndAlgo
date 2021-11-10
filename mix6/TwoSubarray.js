var input = `1
6
slvvvj`;
var input=input.split("\n");
var t=+input[0];
for (let i = 0; i < t; i++) {
 var n=input[2*i+1].split(" ").map(Number)
var arr =input[2*i+2];
var count1=0
for (let i = 0; i < arr.length; i++) {
    var res=[]
for (let j = i; j < arr.length; j++) {
    res.push(arr[j])
    var x= check(res);
    console.log(x)
    if(x<2){
     count1++
    }
}
    
}
function check(arr){
var object={};
for (let i = 0; i < arr.length; i++) {
   var key=arr[i];
   if(object[key]==undefined){
       object[key]=1
   }
    else{
        var pre=object[key];
        object[key]=pre+1
    }
}
for (const key in object) {
   return object[key]
}
}
console.log(count1)
}
