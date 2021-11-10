var input=`5 5
safer
amjad
babol
aaron
songs`;
var input=input.split("\n");
var [r,c]=input[0].split(" ").map(Number);
var mat=[];
for (let i = 1; i<=r; i++) {
    mat.push(input[i]);
}
var count=0;
for (let i = 0; i < r; i++) {
   for (let j = 0; j < c; j++) {
   if(mat[i][j]=="saba"){
       count++;
   }
       
   }
}
console.log(count)
