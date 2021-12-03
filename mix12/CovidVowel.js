var input =`dangerouscovid`;
var input=input.split("\n");
var str=input[0];
     var count = 0;
for (let i = 0; i < str.length; i++) {
   for (let j = i+1; j <=str.length; j++) {
     var sub=str.slice(i,j);
      
     if(sub.includes("a")&&sub.includes("u")&&sub.includes("i")&&sub.includes("o")){
          count++
     }
       
   }
    
}
console.log(count)