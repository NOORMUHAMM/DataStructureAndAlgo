var input=`3 3
1 2 3 
4 5 6
7 8 9`
var input=input.split("\n");
var [r,c]=input[0].split(" ").map(Number);
var mat=[];
for (let i = 1; i <=r; i++) {
    mat.push(input[i].trim().split(" ").map(Number))
    
}
var count=0;
for (let i = 0; i < r; i++) {
for (let j = 0; j < c; j++) {
    var res=mat[i][j]
    // console.log(res)
  if(prime(res)){
      count++
  }
    
}
}
console.log(count)
function prime(n){
    if(n==1){
        return 
    }
    var count=0;
    for (let i = 2; i<=n; i++) {
       if(n%i==0){
           count++
       } 
        
    }
    if(count<2){
        return 1
    }
}
