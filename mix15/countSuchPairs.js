var input = `5 0
-1 1 -1 1 -1`;
var input=input.split("\n");
var n=input[0].split(" ").map(Number);
var num=n[0];
var k=n[1];
var arr=input[1].split(" ").map(Number);
arr.sort((a,b)=>a-b)
console.log(arr)
var start=0;
var end=arr.length;
var count=0;
while(start<end){
    if(arr[start]+arr[end]==k){
       count++;
    }
    if (arr[start]+arr[end] <= k) {
      start++;
    }
    else{
        end--
    }
    
}
console.log(count)