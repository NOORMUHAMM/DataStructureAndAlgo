var input = `7`;
var input = input.split("\n");
var n = +input[0];
var a=0;
var b=1;
function main(){
console.log(a)
console.log(b)
feb(a, b, n-2);
}
main()
function feb(a,b,n){
if(n==0){
    return
}
var c=a+b;
console.log(c);
feb(b, c, n-1);

}