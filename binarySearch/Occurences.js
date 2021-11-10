var input = `6 3
2 3 3 3 3 9`;
var input = input.split("\n");
var n = input[0].split(" ").map(Number);
var len=n[0];
var k=n[1]
var arr = input[1].split(" ").map(Number);


function serch(arr, k) {

  var obj={}
for (let i = 0; i < arr.length; i++) {
var key=arr[i];
if(obj[key]==undefined){
 obj[key]=1
}
else{
    var pre=obj[key];
    obj[key]=pre+1
}
    
}
for (const key in obj) {
    if(key==k){
      return obj[key]
    }
    }
}

console.log(serch(arr, k));
