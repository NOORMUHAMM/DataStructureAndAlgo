var input = `3
5 3
1 2 1 3 4
4 5
1 2 1 3
3 2
1 2 1`;
var input=input.split("\n");
var t=+input[0];
for (let i = 0; i < t; i++) {
    var n=input[2*i+1].split(" ").map(Number)
    var len=n[0];
    var k=n[1]
    var arr= input[2*i+2].split(" ").map(Number);
    var count=0;
    for (let i = 0; i < arr.length; i++) {
     var sum=0;
     for (let j = i; j <arr.length; j++) {
       sum += arr[j];
        if(sum==k){
            count++
        }
      
     }
   
    }
  if(count>0){
      console.log("Yes")
  }
  else{
      console.log("No")
  }
      
   

}
