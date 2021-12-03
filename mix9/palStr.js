var input=`5
naman`
var input=input.split("\n");
var n=+input[0];
var str=input[1];
var res=""
function rev(str,n) {
    if(n<0){
  
        return
    }
    var ch=str.charAt(n);
    res+=ch
    rev(str,n-1)
    return res
}
if(str===rev(str,n)){
console.log("Yes")
}
else{console.log("No")}