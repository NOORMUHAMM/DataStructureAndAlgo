var input=`a+b-c+d*(e-f)/g+(h*(i/j))`;
var input=input.split("\n");
var str=input[0];
var stack=[];
var res=""
for (let i = 0; i < str.length; i++) {
   if(str[i]>="a" && str[i]<="z"){
       stack.push(str[i])
   }
   else{
       var x=stack.pop();
       var y=stack.pop();
       switch (str[i]) {
         case "+":
         
           stack.push(res+=x+y+"+")
           break;
         case "-":
       
             stack.push((res += x + y + "-"));
           break;
         case "/":
                   stack.push(x,y,"/");
           break;
         case "*":
          
                   stack.push(x,y,"*");
           break;
         default:
           break;
       }
   }
}
console.log(stack)