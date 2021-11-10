var input = `3
5
2 1 -1 -2 3
5
-3 2 -4 4 -2
9
-10 -6 4 9 1 5 -1 -4 7`;
var input=input.split("\n");
var t=+input[0];
for (let i = 0; i<t; i++) {
   var n=input[2*i+1].split(" ").map(Number);
   var arr=input[2*i+2].split(" ").map(Number);
   var array=arr.sort((a,b)=>a-b)
   function find(arr){
   var start=0;
   var end=array.length-1;
   var res=0;
  while(start<end){
      var sum=arr[start]+arr[end];
      if(sum===0){
          res=Math.max(res,Math.max(arr[start],arr[end]));
          return res
      }
      if(sum<0){
          start++;
       
      }
      else{
          end--
      }
  }
  return res;
}
console.log(find(array));

}