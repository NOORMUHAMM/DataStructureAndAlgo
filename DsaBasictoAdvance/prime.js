var input = `4
1
2
3
4`;
var input=input.split("\n");
var t=+input[0];
for (let i = 0; i <t; i++) {
    var n=input[i+1].split(" ").map(Number)

        var count=0;
       if (n == 1) {
         console.log("No");
       }
    else{
        for (let i = 1; i <= Math.sqrt(n); i++) {
            if(n%i==0){
              
                count++;
            }
            
        }
         
        if(count<2){
            console.log("Yes")
        }
        else{
                console.log("No");
        }
    
    
   
}}