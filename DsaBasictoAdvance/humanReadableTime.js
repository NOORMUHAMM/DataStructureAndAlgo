var input=`135`;
var input=input.split("\n");
var n=+input[0];
var hrs=Math.floor(n/60);
var minut=n%60;
if(hrs>1){
console.log(`${hrs}hrs ${minut}mins`)
}
else{
   console.log(`${hrs}hr ${minut}mins`); 
}