var input = `6
7 8 9 0 1 2 3 4 5 6
0`;
var input=input.split("\n");
var n=+input[0];
var arr=input[1].split(" ").map(Number);
var key=+input[2];
var start=0;
var end=arr.length-1;
function serch(arr,key){
    var start=0;
    var end=arr.length-1;
    while(start<end){
   
       
        if(arr[start]==key){
            return start;
        }
        if(arr[start]<key){
          start++
        }
     
      
    }
    return "-1"
}
console.log(serch(arr,key))
// function serach(arr,k,start,end){
//     if(start>end){
//         return -1;
//     }
//     var mid=Math.floor(start+(end-start)/2);
//     if(arr[mid]===k){
//         return mid
//     }
//     if(arr[mid]>k){
//        return serach(arr, k, start, mid-1);
//     }
//    else {
//      return serach(arr, k, mid + 1, end);
//    }
// }
// var x = serach(arr, key, start, end);
// console.log(x)