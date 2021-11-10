// var input=`1
// 3 3 
// 1 2 3
// 4 5 6
// 7 8 9
// `
// var input=input.split("\n");
// var t=+input[0];
// var line=1;
// for (let i = 0; i <t; i++) {
// var [r,c,q]=input[line].split(" ").map(Number);
// line++;
// mat=[];
// for (let j = 0; j <r ;j++) {
//     mat.push(input[line].split(" ").map(Number))
//     line++;
// }

// var minRow=0;
// var minCol=0;
// var maxCol=mat[0].length-1;
// var maxRow=mat.length-1;
// var count=0;
// var n=c*r;
// var res=""
// while(count<n){
//     for (let i = minCol; i < maxRow && count < n; i++) {
//       console.log(mat[i][minCol]);
//       count++;
//     }
//     minCol++
//     minRow++
//      for (let i = 0; i <= maxCol && count < n; i++) {
//        console.log(mat[maxRow][i]);
//        count++;
//      }
//     maxRow--
    
    
// }

// }
var input = `2
3 4
1 2 3 4
5 6 7 8
9 10 11 12
4 3
1 2 3
4 5 6
7 8 9
10 11 12`;
var input = input.split("\n");
var t = input[0].split(" ").map(Number);
var line = 1;
for (let i = 1; i <= t; i++) {
  var [r, c] = input[line].split(" ").map(Number);
  line++;
  var mat = [];
  for (let j = 0; j < r; j++) {
    mat.push(input[line].split(" ").map(Number));
    line++;
  }
  var size = r * c;
  var count = 0;
  var minCol = 0;
  var minRow = 0;
  var maxCol = c - 1;
  var maxRow = r - 1;
  var result = "";
  while (count < size) {
    for (let i = minRow; i <= maxRow && count < size; i++) {
      result += mat[i][minCol] + " ";
      count++;
    }
    minCol++;
    for (let i = minCol; i <= maxCol && count < size; i++) {
      result += mat[maxRow][i] + " ";
      count++;
    }
    maxRow--;

  }
  console.log(result);
}