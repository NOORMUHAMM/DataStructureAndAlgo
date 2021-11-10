var input = `3
8
1 2 1 3 2 7 4 2
5
1 2 1 3 4
4
1 2 2 1`;
var input=input.split("\n");
var t=+input[0];
for (let i = 0; i<t; i++) {
   var n=input[2*i+1].split(" ").map(Number);
   var arr=input[2*i+2].split(" ").map(Number);
      var count = 0;
   for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
       
      for (let k = i; k < arr.length; k++) {
         if(arr[k]!=arr[k+1]){
         count++
         }
          
      }
          
      }
       
   }
   console.log(count)
}