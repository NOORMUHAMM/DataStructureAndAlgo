var input = `1
3
1 2 3`;
var input=input.split("\n");
var t=+input[0];
for (let i = 0; i < t; i++) {
  var n=input[2*i+1].split(" ").map(Number);
  var arr=input[2*i+2].split(" ").map(Number);
  var count1=0;
for (let i = 0; i < arr.length; i++) {
    var res=[]
   for (let j = i; j < arr.length; j++) {
      res.push(arr[j])
   if(check(res)%2==1){
       count1++
   }
   
   }
  
}
       console.log(count1);  
}
function check(arr){
    var count=0
    var product=1
    for (let i = 0; i < arr.length; i++) {
    product=product*arr[i]
    
    }
if(product%2==1){
    count++
}
return count
}
