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
var input=input.split("\n");
var t=+input[0];
var line=1
for (let i = 0; i < t; i++) {
  var [r,c]=input[line].split(" ").map(Number);
  line++
  var mat=[];
  for (let j = 0; j < r; j++) {
     mat.push(input[line].split(" ").map(Number))
      line++
  }
var minCol=0;
var minRow=0;
var maxCol=c-1;
var maxRow=r-1;
var size=r*c;
var count=0;
var res=""
while(count<size){
for (let i = minRow; i <=maxRow && count<size; i++) {
   res+=mat[i][minCol]+" "
  count++
}
  minCol++;
for (let i = minCol; i <= maxCol && count < size; i++) {
  res += mat[maxRow][i] + " ";
   count++;
 
}
 maxRow--;
for (let i = maxRow; i >= minRow && count < size; i--) {
  res += mat[i][maxCol] + " ";
   count++;
 
}
 maxCol--;
for (let i = maxCol; i >= minCol && count < size; i--) {
  res += mat[minRow][i] + " ";
    count++;

}

  minRow++;


}

console.log(res);

}
