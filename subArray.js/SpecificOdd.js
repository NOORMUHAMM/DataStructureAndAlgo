var input = `3 1 
1 2 3`;
var input=input.split("\n");
var num=input[0].split(" ").map(Number);
var n=num[0];
var k=num[1];
var arr=input[1].split(" ").map(Number);
var count1=0;
for (let i = 0; i <n; i++) {
    var res=[]
    for (let j = i; j < n; j++) {
       res.push(arr[j]);
    // console.log(res)
    var count=0
    for (let k = 0; k < res.length; k++) {
        // console.log(res[k])
       if(res[k]%2===1){

           count++
       }
        
    }
    if(count==k){
        count1++
    }
 
}
}
console.log(count1)