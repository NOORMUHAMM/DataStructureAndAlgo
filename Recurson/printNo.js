var input =`7`;
var input =input.split("\n");
var n=+input[0];
function main(){
print(n);
}
main()
function print(n){
    if(n==0){
        return
    }
 
    print(n-1)
    console.log(n);
}