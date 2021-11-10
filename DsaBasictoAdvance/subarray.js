var input=`3 4 5 6 7 8
3`
var input=input.split("\n");
var arr=input[0].split(" ").map(Number);
var k=+input[1];
function sub(arr,k){
  var size = arr.length;
 var i=0;
 var j=0;
 var sum=0;
 var max=0;
// while(j<size){
//      sum=sum+arr[j];
//      if(j-i+1<k){
//          j++;
//      }
//        else if(j-i+1==k){
//          max=Math.max(sum,max)
//          console.log(max)
//          sum=sum-arr[i];
//          i++
//          j++
//         }
//  }
//  console.log(max)
var size = arr.length;
var i = 0;
var j = 0;
var sum = 0;
var max = 0;
while (j < size) {
  sum = sum + arr[j];
  if (j - i + 1 < k) {
    j++;
  }  else if (j - i + 1 == k) {
    max = Math.max(sum, max);
    sum = sum - arr[i];
    i++;
    j++;
  }
}
console.log(max);
}
sub(arr, k);

