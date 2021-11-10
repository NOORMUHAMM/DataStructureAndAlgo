var input=`3
1 2 7`;
var input=input.split("\n");
var n=input[0].split(" ").map(Number);
var arr=input[1].split(" ").map(Number);
var target=arr.length-2
var count1=0;
for (let i = 0; i <n; i++) {
    var res=[]
    for (let j = i; j <n; j++) {
     res.push(arr[j])
     var count=0
     for (let k = 0; k < res.length; k++) {
      
         if(res[k]==target){
             
          count++
         }
     }
   if(count){
       count1++
   }
     
 }
}
console.log(count1);