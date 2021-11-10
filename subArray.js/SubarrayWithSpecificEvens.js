var input = `3 1 
1 2 3`;
var newInput = input.split("\n");
  var L = newInput[0].split(" ").map(Number);
  var M = L[0];
  var N= L[1];

  var data = newInput[1].split(" ").map(Number);
  
  var sum = 0;

  var count1 = 0;
  for (var i = 0; i < M; i++) {
    var res = [];
    for (var j = i; j < M; j++) {
      res.push(data[j]);
      console.log(res)
      var count = 0;
      for (var k = 0; k < res.length; k++) {
        if (res[k] % 2 === 1) {
          count++;
        }
      }
  
      if (count == N) {
        count1++;
      }
    }
  }

  console.log(count1);
