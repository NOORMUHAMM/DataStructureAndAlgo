var input=`3`;
var input=input.split("\n");
var n=+input[0];

function tower(n,s,h,d){
    if(n==1){
      console.log("transfer disdk", n, "from sorce", s, "to destination", d);
      return;  
    }
 
tower(n-1, s, d, h);
console.log("transfer disdk",n, "from sorce",s,"to destination" ,d)
tower(n-1,h,s,d)

}
tower(n,"s","h","d")