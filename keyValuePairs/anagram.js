var input=`5
eodc
odec
code
baca
aabc`;
var input=input.split("\n");
var n=+input[0];
var arr=[]
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(""))
    
}

for (let i = 0; i<arr.length; i++) {
var keys=arr[i];
var object = {};
for (let j = 0; j < keys.length; j++) {
  var key = keys[j];
  if (object[key]===undefined) {
    object[key]=1;
  } else {
    var pre=object[key];
    object[key]=pre+1;
  }
}
var res=""
for (const key in object) {
if(key==key && object[key]==object[key]){
  console.log(o)
}
}

}



