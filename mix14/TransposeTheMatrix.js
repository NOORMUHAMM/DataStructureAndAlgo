var input = `1 5
2 3 1 3 4`;
var input=input.split("\n");
var n=input[0].split(" ").map(Number);
var r=n[0];
var c=n[1]
var mat=[];
for (let i = 1; i <=r; i++) {
  mat.push(input[i].split(" ").map(Number))
}
 if(r==c){
    for (let i = 0;i<r; i++) {
   var res = "";
 for (let j = 0; j <c; j++) {
    //  console.log(mat[i][j])
    res+=mat[j][i]+" "
     
 }
 console.log(res)
    
}

 }
 if(r>c){
for (let i = 0;i<r-1; i++) {
   var res = "";
 for (let j = 0; j <=c; j++) {
    res+=mat[j][i]+" "
     
 }
 console.log(res)
    
}
 }
 if(r<c){
      var res = "";
     for (let i = 0; i < r; i++) {

       for (let j = 0; j < c; j++) {
         //  console.log(mat[i][j])
         res += mat[i][j] 
       }
    
     }
       for (let i = 0; i < res.length; i++) {
        console.log(res[i])
           
       }
 }
