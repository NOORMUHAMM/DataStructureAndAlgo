var input=`4
aman`
var input=input.split("\n");
var n=+input[0];
var str=input[1].split("");
var arr=str.sort((a,b)=>a-b)
console.log(arr)
var object={};
for (let i = 0; i <arr.length; i++) {
 var key=arr[i];
 console.log(key)
 if(object[key]===undefined){
     object[key]=1;
 }
 else{
var pre=object[key];
object[key]=pre+1;
}
console.log(object)
}
for (const key in object) {
  console.log(`${key}-${object[key]}`)
}