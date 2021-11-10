var input = `aaaaa`;
var input=input.split("\n");
var str=input[0];
    var max = 0;
    var res=[]
for (let i = 0; i < str.length; i++) {
   
    for (let j = i+1; j <=str.length; j++) {
       var sub=str.slice(i,j)
       var pal=check(sub)
        res.push(pal)
      }
    
}
function check(str){
    var res=""
    for (let i = 0; i < str.length; i++) {
        res+=str[i]
     }
     var finel=""
     for (let i =str.length-1; i >=0; i--) {
      finel+=str[i] 
     }
     if(res==finel){
         return str.length
     }
     else {
         return -1
     }
    
}
for (let i = 0; i < res.length; i++) {
   max=Math.max(max,res[i])
    
}
console.log(max)