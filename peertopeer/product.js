var input=`-1 3 8 -2 2`
var input=input.split("\n");
var arr=input[0].split(" ").map(Number);
var a=arr[0];
var b=arr[1];
var c=arr[2];
var l = arr[3];
var r = arr[4];
// aX^2 + bX + c
var product=1
for (let i = l; i <=r; i++) {
 var res=a*(i**2)+b*(i)+ c;
 product*=res;

    
}
console.log(product)