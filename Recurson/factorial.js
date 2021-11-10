var input=`5`
var input=input.split("\n");
var n=+input[0];
var p=1;
function main(){
fact(n,p)
}
main()

function fact(n,p){
 if(n==1){
     p*n
     console.log(p)
     return
 }
p*=n
fact(n-1,p)

}