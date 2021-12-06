var input = `1 1 2 3 4 4 4 4 5 7 7 8 8 9 9 9`;
var input = input.split("\n");
var arr= input[0].split(" ").map(Number);
function find(arr){
var object={}
for (let i = 0; i < arr.length; i++) {
var key =arr[i];
if(object[key]===undefined){
object[key]=1;
}
else {
var pre=object[key]
object[key]=pre+1
}
}
//   console.log(object);
  var min=object[key]
//   console.log(min)
for (const key in object) {
  min=Math.min(min,object[key])
}
for (const key in object) {
 if(object[key]==min){
 return key
 }
}
}
console.log(find(arr))