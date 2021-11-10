var input=`135`;
var input=input.split("\n");
var num=+input[0];
var hour=Math.floor(num/60)
var min=num%60
if(hour>1){
console.log(`${hour}hrs ${min}mins`)
}
else{
    console.log(`${hour}hr ${min}mins`);
}