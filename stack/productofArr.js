var input = `2
5
1 2 3 4 5
3
3 2 7`;
var input=input.split("\n");
var t=+input[0];
for (let i = 0; i <t; i++) {
  var n=input[2 * i + 1].split(" ").map(Number);
  var arr = input[2 * i + 2].split(" ").map(Number);
  
  for (let i = 0; i < arr.length; i++) {
      var product = 1;
      for (let j = arr.length-1; j >=i; j--) {
      console.log(arr[i]);
          
      }

  }
}