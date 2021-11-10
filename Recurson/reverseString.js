var input = `abcd`;
var input = input.split("\n");
var n=input[0];
const riverse=(n,id)=>{
if(id==0){
     console.log(n.charAt(id));
    return
}
    console.log(n.charAt(id));
    riverse(n,id-1)
}
  riverse(n, n.length-1);