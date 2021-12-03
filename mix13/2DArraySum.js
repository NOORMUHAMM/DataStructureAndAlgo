var input = `3 3 6
3 2 1
2 2 2
1 5 1`;
var input = input.split("\n");
var n = input[0].split(" ").map(Number);
var r = n[0];
var c = n[1];
var k = n[2];
var mat = [];
for (let i = 1; i <= r; i++) {
  mat.push(input[i].split(" ").map(Number));
}
var count = 0;
var sum = 0;
var sum1 = 0;
var sum2 = 0;
var sum3 = 0;
var sum4 = 0;
var sum5 = 0;
var sum6=0;
for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (i == 0) {
      // console.log(mat[i][j])
      sum += mat[i][j];
      if (sum == k) {
        count++;
      }
    }
    if (i == r) {
      // console.log(mat[i][j])
      sum1 += mat[i][j];
      if (sum1 == k) {
        count++;
      }
    }
    if (j==0) {
        //  console.log(mat[i][j])
      sum2+=mat[i][j];
      //    console.log(sum2)
      if (sum2==k) {
        count++;
      }
    }
    if (j == c) {
      //    console.log(mat[i][j])
      sum3 += mat[i][j];
      //    console.log(sum2)
      if (sum3 == k) {
        count++;
      }
    }
    if (i == j) {
      //   console.log(mat[i][j])
      sum4 += mat[i][j];
      if (sum4 == k) {
        count++;
      }
    }
     
    if (i + j == r - 1) {
    //   console.log(mat[i][j]);
      sum5 += mat[i][j];
      //    console.log(sum2)
      if (sum5 == k) {
        count++;
      }
    }
        if (i==Math.floor(r/2)) {
            // console.log(mat[i][j])
          sum6+= mat[i][j];
          if (sum6== k) {
            count++;
          }
        }
  }
}
// console.log(sum);
console.log(count);
