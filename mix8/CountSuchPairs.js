var input=`5 9
3 0 6 2 7`
var input=input.split("\n")
var num=input[0].split(" ").map(Number);
var n=num[0];
var k=num[1];
var arr=input[1].split(" ").map(Number);
arr.sort((a,b)=>a-b)
var count=0
for (let i = 0; i < arr.length; i++) {
  for (let j = i+1; j < arr.length; j++) {
  if(arr[i]+arr[j]==k){
      count++
  }
      
  }
  
}
  console.log(count);