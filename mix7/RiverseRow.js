var input = `4
1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4`;
var input=input.split("\n");
var n=+input[0];
var mat=[];
for (let i = 1; i <= n; i++) {
   mat.push(input[i].split(" ").map(Number))
    
}
for (let i = 0; i <n; i++) {
var res=""
 for (let j = n-1; j >=0; j--) {
  res+=mat[i][j]+" "
     
 }
    console.log(res)
}