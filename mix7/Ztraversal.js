var input = `1
1
5`;
var input = input.split("\n");
var t = +input[0];
var line=1
for (let i = 0; i <t; i++) {
  var r=input[line].split(" ").map(Number);
  line++;
  var mat=[]
  for (let i = 0; i < r; i++) {
      mat.push(input[line].split(" ").map(Number));
      line++
  }
 var res=""
 for (let i = 0; i < r; i++) {
res+=mat[0][i]+" "
     
 }
  for (let i = 1; i < r; i++) {
  for (let j = 0; j < r; j++) {
     if(i+j==r-1){
        res+=mat[i][j]+" "
     }
      
  }
  } 
  for (let i = 1; i < r; i++) {
    res += mat[r-1][i] + " ";
  }
  console.log(res)
  
}