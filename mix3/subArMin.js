var input =`1
5 5
1 5 1 3 2`;
var input=input.split("\n")
var t=+input[0];
for (let i = 0; i <t; i++) {
var n=input[2*i+1].split(" ").map(Number);
var len=n[0];
var k=n[1]
var count=0;
var arr = input[2*i+2].split(" ").map(Number);
for (let i=0; i<arr.length; i++) {
    var sum=0;
   for (let j=i; j<arr.length; j++) {
    sum+=arr[j]
    console.log(sum)
         if(sum<k){
             count++;
         }
   }

    
}
console.log(count)
}