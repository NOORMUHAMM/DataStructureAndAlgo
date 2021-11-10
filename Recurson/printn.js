var input=`1`
var input=input.split("\n");
var n=+input[0];
var sum=1
// for (let i = 0; i <= n; i++) {
// sum=sum+i;
// }
// console.log(sum)
function print(n,sum){
   
  if (n == 5) {
      sum*=n
      console.log(sum)
    return;
  }

  sum*=n
  print(n + 1,sum);

  
}
print(n,sum)