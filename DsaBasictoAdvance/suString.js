var input = `11 3
aabcdabbcdc`;
var input=input.split("\n");
var n=input[0].split(" ").map(Number);
var len=n[0];
var k=n[1];
var str=input[1];

var count=0;
for (let i = 0; i < str.length; i++) {
   for (let j = i+1; j <str.length; j++) {
       var sub=str.slice(i,j)
      if(sub.length==k){
      console.log(keyVal(sub));
          console.log(sub)
        if(keyVal(sub)==1){
        //    console.log(keyVal(sub));
            count++
        }
      }
       
   }
}
console.log(count)
function keyVal(str){
 var object={};
 for (let i = 0; i <str.length; i++) {
    var key=str[i];
    if(object[key]==undefined){
        object[key]=1
    }
    else{
        var pre=object[key]
        object[key]=pre+1
    }
     
 }
// return object
for (const key in object) {
if(object[key]==1){
    return object[key]
}
}
}
