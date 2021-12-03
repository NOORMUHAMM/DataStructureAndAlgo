function outer(a){
var b=10;
function inner(){
    var sum=a+b
    console.log(sum)
}
return inner
}
var x=outer(10);
x()
