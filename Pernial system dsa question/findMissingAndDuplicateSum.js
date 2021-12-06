var input=`6
1 2 3 4 5 5`
var input=input.split("\n");
var n=+input[0];
var arr=input[1].split(" ").map(Number);

var object={}
for (let i = 0; i < arr.length; i++) {
  var key=arr[i];
  if(object[key]===undefined){
      object[key]=1
  }
  else{
      var pre=object[key]
      object[key]=pre+1
  }
    
}
// console.log(object)
var res=[]
var max=0
var k=0
for (const key in object) {
res.push(key)
max=Math.max(object[key],max)
if(object[key]==max){
k=key
}
}
var sum=(n*(n+1)/2)
for (let i = 0; i < res.length; i++) {
    // console.log(arr[i])
  sum-=res[i]
    
}
console.log(sum+Number(k))

