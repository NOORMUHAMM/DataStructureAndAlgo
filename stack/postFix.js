var input =`82+`;
var input=input.split("\n");
var n=input[0]
var stack=[]
for (let i = 0; i <n.length; i++) {
 if(n[i]>="0" &&n[i]<="9"){
    stack.push(n[i])
 }
 else{
     var x=stack.pop();
     var y=stack.pop();
     switch (n[i]) {
       case "+":
         stack.push(Number(x)+Number(y));
         break;
       case "-":
         stack.push(Number(x)-Number(y));
         break;
       case "*":
         stack.push(Number(x)*Number(y));
         break;
       case "/":
         stack.push(Number(x)/Number(y));
         break;
       default:
         break;
     }
 }
   
}
 console.log(stack.join(" "));
//  function pop(arr){

//  }