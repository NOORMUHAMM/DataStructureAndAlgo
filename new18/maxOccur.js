var input = `1
7`;
var input=input.split("\n");
var n=+input[0];
var arr=input[1].split(" ").map(Number);
if (arr.length <= 1) {
  console.log(arr[0]);
}
else{
function find(arr){
var obj={};
for (let i = 0; i < arr.length; i++) {
 var key=arr[i];
 if(obj[key]===undefined){
     obj[key]=1;
 }
 else{
     var pre=obj[key];
     obj[key]=pre+1
 }

}
var max=0;
for (const key in obj) {
 max=Math.max(obj[key],max)


}
if(max>1){
for (const key in obj) {
   if (obj[key] == max) {
  return key
   }
}
}
else{
   return 1
}
}
console.log(find(arr))
}