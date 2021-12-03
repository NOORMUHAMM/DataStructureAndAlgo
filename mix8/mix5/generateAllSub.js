var input = `1
4 
aman`;
var input=input.split("\n");
var t=+input[0];
for (let i = 0; i <t; i++) {
   
    var str=input[2*i+2]
    for (let i = 0; i < str.length; i++) {
        for (let j = i+1; j <= str.length; j++) {
         var sub=str.slice(i,j)
           console.log(sub) 
        }
        
    }
}