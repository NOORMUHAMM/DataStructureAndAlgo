var input=`4
abcd`;
var input=input.split("\n");
var n=+input[0];
var str=input[1];
function genrate(str,arr,low,heigh){
    if(low<heigh+1 && str.length!==0){
        console.log(str)
    }
    for (let i = low; i <=heigh; i++) {
     genrate(str+arr[i], arr, i+1, heigh);
        
    }

}
genrate("",str, 0, n);