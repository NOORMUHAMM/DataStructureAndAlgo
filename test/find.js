var n = 8;
var arr = [1,3, 5,7, 2,6];
// arr.sort((a,b)=>a-b)
var sum = (n * (n +1)) / 2;
for (let i = 0; i < arr.length; i++) {


sum-=arr[i]

    
}

console.log(sum)
// function find(arr){
// for (let i = 0; i <= n; i++) {
//   if(arr[i]!==i+1){
//     return arr[i]-1
//   }
// }
// }
// console.log(find(arr))
