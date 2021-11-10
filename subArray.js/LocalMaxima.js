var input = `2
2
1 2
10
884 729 768 201 266 494 597 328 705 287`;
var input = input.split("\n");
var t = +input[0];
for (let i = 0; i < t; i++) {
  var n = input[2 * i + 1].split(" ").map(Number);
  var arr = input[2 * i + 2].split(" ").map(Number);
  function check(arr){
  if(arr.length-1<3){
      return -1
  }
  else{
  var count=0;
    for (let i = 0; i < arr.length; i++) {
    
       if(arr[i]>=arr[i+1]&& arr[i]>=arr[i-1]){
           count++
       }
}
return count
  }
}
console.log(check(arr))
}