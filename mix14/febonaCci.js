var input=`4`
var input=input.split("\n");
var n=+input[0]+1;
var a=0;
var b=1;
var res = [];
function main() {
   find(n-2,a,b)
    
}
main()
function find(num,a,b){
    if(num==0){
        return
    }

    var c=a+b;
    res.push(c)
    find(num-1,b,c)
   

}
console.log(res[res.length-1])