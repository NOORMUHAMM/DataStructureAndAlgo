var input = `8
3 4 5 6 8 10`;
var n=+input[0];
var arr=input[1].split(" ").map(Number);
 function find(arr){
     var start=0;
     var mid=1
     var end=2
     while(end<=arr.length){
         if((arr[start]**2)+(arr[mid]**2)===(arr[end]**2)){
             return [start,mid,end]
         }
         else if (arr[start] ** 2 + arr[mid] ** 2 !== arr[end] ** 2) {
           start++;
           mid++;
           end++;
         }
         else{
            return -1;
         }
     }
     return -1;
  
 }
 console.log(find(arr));