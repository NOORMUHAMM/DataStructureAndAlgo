var input = `4
5 2
3 4 0 2 7
5 10
1 2 3 5 5
2 100
48 49
10 -13
-7 -6 4 10 -5 0 -3 1 -6 5`;
var input = input.split("\n");
var t = +input[0];
for (let a = 0; a < t; a++) {
  var n = input[2 * a + 1].split(" ").map(Number);
  var length = n[0];
  var k = n[1];
  var arr = input[2 * a + 2].split(" ").map(Number);
  var str=arr.sort((a,b)=>a-b)

    var start=0;
    var end=str.length-1;
    var res="-1"
    var sum=0;
    while(start<end){
      sum=arr[start]+arr[end]
      if(sum==k){
        res="1"
        break;
      }
        if (sum >k) {
          end--;
          
        }
        else{
          start++;
        }
  
    }
    console.log(res)
  
  }

