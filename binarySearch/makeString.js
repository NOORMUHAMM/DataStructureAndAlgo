var input = `3
aac
aaabab
abcdef
abcdef
abcxyz
abcxyababcxyzcxyzzabcxyz`;
var input=input.split("\n");
var t=+input[0];
for (let i = 0; i < t; i++) {
   var first=input[2*i+1].split("");
   var second=input[2*i+2].split("");
function serch(arr) {
  var obj = {};
  for (let i = 0; i < arr.length; i++) {
    var key = arr[i];
    if (obj[key] == undefined) {
      obj[key] = 1;
    } else {
      var pre = obj[key];
      obj[key] = pre + 1;
    }
  }
return obj

} 
var x=serch(first);
var y = serch(second);
var sta=""
var stack="";
for (const key in x) {
  sta+=key+" "
    
}
// console.log(sta)
for (const k in y) {
  stack+=k+" ";
}
if(sta===stack){
    console.log("Yes")
}
else{
    console.log("No")
}
}
