var input = `1
7 3
2 5 1 8 2 9 1`;
var input=input.split("\n");
var t=+input[0];
for (let i = 0; i <t; i++) {
    var n = input[2 * i + 1].split(" ").map(Number);
    var len=n[0];
    var k=n[1]
//   console.log(k)
    var arr=input[2*i+2].split(" ").map(Number);
    var curSum=0;
    for (let i = 0; i < k; i++) {
      curSum+=arr[i]
    }
    // console.log(curSum)
    var windowSum=curSum;
    var max=0;
    for (let i = k; i < arr.length; i++) {
        
           curSum+=arr[i]-arr[i-k];
        // console.log("cur",curSum)
    windowSum= Math.max(curSum, windowSum);
        
    }
    console.log(windowSum)
}