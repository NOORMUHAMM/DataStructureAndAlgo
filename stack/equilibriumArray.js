var input=`5
3 3 5 5 1`;
var input=input.split("\n");
var n=+input[0];
var arr=input[1].split(" ").map(Number);
var start=0;
var end=arr.length-1;
var mid=Math.floor((end+start)/2)
var sum=0;
var sum1=0;
for (let i = 0; i <mid; i++) {
sum+=arr[i]
    
}

for (let i = mid+1; i <n; i++) {
  sum1+= arr[i];
}
if(sum==sum1){
    console.log(mid+1)
}
else{
    console.log(-1)
}