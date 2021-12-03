var input=`masaischool`
var input=input.split("\n");
var str=input[0];
var count=0;
for (let i = 0; i <str.length; i++) {
    if(str[i]=="a" ||str[i]=="e" ||str[i]=="i" ||str[i]=="o" || str[i]=="u"){
      count++
    }
    
}
console.log(Math.abs(count-str.length))