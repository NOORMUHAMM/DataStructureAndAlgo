var input=`masaischool`;
var input=input.split("\n");
var str=input[0].split("")
str.sort()
var object={}
for (let i = 0; i <str.length; i++) {
  var key=str[i];
if(object[key]==undefined){
    object[key]=1
}
else{
    var pre=object[key];
    object[key]=pre+1
}
    
}
for (const key in object) {
    console.log(`${key} ${object[key]}`)
}