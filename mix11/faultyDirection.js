var input = `2
5
RLRUD
4
LRUD`;
var input=input.split("\n");
var t=+input[0];
for (let i = 0; i <t; i++) {
   var n=input[2*i+1].split(" ").map(Number);
   var str=input[2*i+2]
   var x=0;
   var y=0
   for (let i = 0; i < str.length; i++) {
    if(str[i]=="L"){
        x--
    }  
    if(str[i]=="R"){
        x++
    } 
     if (str[i] == "U") {
       y++;
     }
     if (str[i] == "D") {
       y--;
     } 
      
   }
    if (x == 0 && y == 0) {
      console.log("Yes");
    } else {
      console.log("No");
    }

}