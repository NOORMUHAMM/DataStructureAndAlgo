var input=`5
2 2 2 1 1`;
var input=input.split("\n");
var t=+input[0];
var arr=input[1].split(" ").map(Number);

  var object = {};
  for (let i = 0; i < arr.length; i++) {
    var key = arr[i];
    if (object[key] == undefined) {
      object[key] = 1;
    } else {
      var pre = object[key];
      object[key] = pre + 1;
    }
  }
  var sum=0
for (const key in object) {
 sum+=Number(key)
}
console.log(sum)