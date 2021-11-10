var input = `3
2
7 9
6 5
9
2 2 2 3 5 5 6 8 9
9 8 7 6 5 3 2 2 2
7
1 4 4 5 8 8 9
9 9 6 6 4 2 1`;
var input = input.split("\n");
var t = +input[0];
for (let i = 0; i <t; i++) {
 
    var n=input[3*i+1].split(" ").map(Number);
    var first = input[3 * i + 2].split(" ").map(Number);
    first.sort()
    var second=input[3*i + 3].split(" ").map(Number);
    second.sort()
  
     var count=0;
   for (let i = 0; i <n; i++) {
     
      if(first[i]==second[i]){
            // console.log("first", first[i]);
            //  console.log("second", second[i]);
      count++;
      }
       
   }
   console.log(count)
}