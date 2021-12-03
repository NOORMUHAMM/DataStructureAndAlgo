var input = `5 5
safer
amjad
babol
aaron
songs`;
var input=input.split("\n");
var [r,c]=input[0].split(" ").map(Number);
var mat=[];
for (let i = 1; i <=r; i++) {
mat.push(input[i])
    
}
  var count = 0;
for (let i = 0; i < r; i++) {
   if (mat[i][0] == "s" && "a" && "b" && "a") {
     count++;
   }
    
}
  for (let i = 0; i < r; i++) {
  
    for (let j = 0; j < c; j++) {
      if (i == j) {
        if (mat[i][j] == "s" && "a" && "b" && "a") {
          count++;
        }
      }
      if (i + j == r) {
          if (mat[i][j] == "s" && "a" && "b" && "a") {
            count++;
          } {
          count++;
        }
      }
    //   if (i == 0) {
    //     if (mat[i][j] == "s" && "a" && "b" && "a") {
    //       count++;
    //     } {
    //       count++;
    //     }
    //   }
    //   if (i == r) {
    //      if (mat[i][j] == "s" && "a" && "b" && "a") {
    //        count++;
    //      } {
    //       count++;
    //     }
    //   }
    //   if (j == 0) {
    //     if (mat[i][j] == "s" && "a" && "b" && "a") {
    //       count++;
    //     } {
    //       count++;
    //     }
    //   }
    //   if (i == c) {
    //      if (mat[i][j] == "s" && "a" && "b" && "a") {
    //        count++;
    //      } {
    //       count++;
    //     }
    //   }
    }
 
  }
     console.log(count);
