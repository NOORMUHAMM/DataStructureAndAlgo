var input = `3
10 -13
-7 -6 4 10 -5 0 -3 1 -6 5
6 16
2 0 2 5 -3 0
8 2
5 -6 7 6 0 3 -4 8`;
var input=input.split("\n");
var t=+input[0];
for (let i = 0; i <t; i++) {
    var n=input[2*i+1].split(" ").map(Number)
    var len=n[0];
    var k=n[1]
    var arr=input[2*i+2].split(" ").map(Number)
 
    function check(arr){
    var start=0;
    var end=1;
    while(start<end){
        var sum=arr[start]+arr[end]
        if(sum===k){
            return 1
        }
        else if (sum <k) {
            start++;
        }
        else{
            end++;
        }
    }
    return -1
}
console.log(check(arr));
}