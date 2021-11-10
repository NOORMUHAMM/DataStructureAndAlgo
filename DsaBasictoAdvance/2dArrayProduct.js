var input = `3 3 6
1 2 3
4 5 6
7 8 9`;
var input=input.split("\n");
var n=input[0].split(" ").map(Number);
var r=n[0]
var c=n[1];
var k=n[2];
var mat=[]
for (let i = 1; i <= r; i++) {
mat.push(input[i].split(" ").map(Number))
   
}
var sum=0;
var count=0;
 for (let i = 0; i < r; i++) {
     sum += mat[0][i];
     console.log(sum)
if(sum==k){
    count++
}
 }
  for (let i = 0; i < r; i++) {
           sum += mat[r-1][i];
           if (sum == k) {
             count++;
           }
 
  }
  for (let i = 0; i < r; i++) {
      sum += mat[i][0];
      if (sum == k) {
        count++;
      }
 
  }
 for (let i = 0; i < r; i++) {
   
 }
// console.log(count)
