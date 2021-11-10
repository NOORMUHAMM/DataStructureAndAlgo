var input = `3
5
1 2 3 3 4
2
1 1
3
1 2 2`;
var input=input.split("\n");
var t=+input[0];
for (let i = 0; i < t; i++) {
    var n=input[2*i+1].split(" ").map(Number)
    var len=n[0];
    var k=n[1]
    var res=[]
    var arr= input[2*i+2].split(" ").map(Number);
    for (let i = 0; i < arr.length; i++) {
        // console.log("arr",arr[i])
        //   console.log("i",i+1);
     
      if(arr[i]==i+1){
res.push(i+1,arr[i])
      }
        
    }
console.log(res)
}

