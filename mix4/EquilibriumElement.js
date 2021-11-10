var input = `5
3 3 5 5 1`;
var input=input.split("\n");
var n=+input[0];
var arr=input[1].split(" ").map(Number);
var mid=Math.floor(arr.length/2);
  var sum=0;
  var sum2=0;
  for (let i = 0; i <mid; i++) {
      
      sum+=arr[i];
  }
for (let i =mid+1; i < arr.length; i++) {
sum2+=arr[i]
    
}
if(sum==sum2){
    console.log(arr[mid])
}
else{
    console.log("-1")
}
