var input=`ram is a good boy`
var input=input.split("\n");
var str=input[0].split(" ");
var max=0;
var res=""
for (let i = 0; i < str.length; i++) {
    
    if(max<str[i].length){
       max=str[i].length
    }
    if(max==str[i].length){
      res=str[i]
    }
}
console.log(max)
console.log(res)