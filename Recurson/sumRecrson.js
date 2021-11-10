var input = `7`;
var input = input.split("\n");
var n=+input[0];
var sum=0;
function main() {
  sumn(n,sum);

}
main()
function sumn(n,sum){
    if(n==0){
      sum+=n
      console.log(sum)
      return
    }
      
    sum += n;
    sumn(n-1,sum);
   
    
     
}
