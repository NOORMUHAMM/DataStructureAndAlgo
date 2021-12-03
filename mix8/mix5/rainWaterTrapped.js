// var input = `1
// 5
// 3 2 0 4 6`;
// var input = input.split("\n");
// var t = +input[0];
// for (let i = 0; i < t; i++) {
//   var len = +input[2 * i + 1];
//   var arr = input[2 * i + 2].split(" ").map(Number);

//   var stack = [];
//   var top = -1;
//   for (let j = len - 1; j >= 0; j--) {
//     while (top != -1 && arr[j] > arr[stack[top]]) {
//       arr[stack[top]] = stack[top] - j;
//       stack.pop();
//       top--;
//     }
//     stack.push(j);
//     top++;
//   }
//   while (top != -1) {
//     arr[stack[top]] = stack[top] + 1;
//     top--;
//   }
//   console.log(arr.join(" "));
// }
function print(n)
{
     if (n <= 1) return n;
     else return print(n - 1) + print(n - 2);
} 


    console.log(print(5));
      