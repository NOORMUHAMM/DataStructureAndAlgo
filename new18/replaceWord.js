var input=`hello my name is Noor Muhammed`
var input=input.split("\n");
var str=input[0].split(" ");
// console.log(str)
for (let i = 0; i < str.length; i++) {
if(str[i].includes("a") && str[i].includes("e")){
    str[i]="Muhammed"
}
else{
    str[i]=str[i]
}

    
}
    
console.log(str.join(" "))