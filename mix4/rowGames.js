var input = `2
3 3
1 2 1 
1 3 1
1 2 1
3 3
1 2 3
1 1 3
1 2 3`;
var input=input.split("\n");
var t=+input[0];
var line=1;
for (let i = 0; i <t; i++) {
    [r,c]=input[line].split(" ").map(Number)
    line++;
    
   var mat=[]
   for (let i = 0; i <r; i++) {
     mat.push(input[line].trim("").split(" ").map(Number))
      line++ 
   }
   var res=""
 for (let i = 0; i < r; i++) {
    
     for (let j = 0; j < c; j++) {
        res+=mat[i][j]
         
     }
 }
 var object={}
 for (let i = 0; i < res.length; i++) {
    var key=res[i];
    if(object[key]==undefined){
        object[key]=1
    }
    else{
        var pre=object[key];
        object[key]=pre+1
    }
     
 }
 var max=0;
 for (const key in object) {
   console.log(object)
 }
}