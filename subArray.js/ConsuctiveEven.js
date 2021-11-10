function runProgram(input) {
  var newInput = input.split("\n");
  let t = Number(newInput[0]);
  for (let i = 0; i < t; i++) {
    let data = newInput[2 * i + 2].split(" ").map(Number);
    let flag = false;
    for (let j = 0; j < data.length; j++) {
      if (data[j] % 2 == 0 && data[j + 1] % 2 == 0 && data[j + 2] % 2 == 0) {
        flag = true;
        break;
      }
    }
    if (flag) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
