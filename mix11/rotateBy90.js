var input=`4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8`
var input=input.split("\n");
var n=+input[0];
var mat=[]
for (let i = 1; i <=n; i++) {
mat.push(input[i].split(" ").map(Number))
    
}
for (let i = n; i >= 0; i--) {
 var res=""
    for (let j = 0; j < n; j++) {
      res+=mat[j][i]+" "
    }
    console.log(res)
}