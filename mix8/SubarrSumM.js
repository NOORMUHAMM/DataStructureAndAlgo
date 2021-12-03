var input = `1
5 5
1 5 1 3 2`;
var input=input.split("\n");
var t=+input[0];
for (let i = 0; i < t; i++) {
  var n=input[2*i+1].split(" ").map(Number);
  var k=n[1]
  var arr=input[2*i+2].split(" ").map(Number);
  var count1=0;
for (let i = 0; i < arr.length; i++) {
    var res=0
   for (let j = i; j < arr.length; j++) {
   res+=arr[j];
   if(res<k){
       count1++
   }
}
}
console.log(count1)
}