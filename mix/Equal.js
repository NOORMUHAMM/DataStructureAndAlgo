var input=`2
2
ab
ac
3
aba
aab`;
var input=input.split("\n");
var t=+input[0];
for (let i = 0; i < t; i++) {
   var n=input[3*i+1].split(" ").map(Number);
    var str1=input[3*i+2];
    var str2=input[3*i+3];
  
    function keyValue(arr){
    var object={}
    for (let i = 0; i < arr.length; i++) {
        var key=arr[i];
        if(object[key]==undefined){
            object[key]=1;
        }
        else{
            var pre=object[key];
            object[key]=pre+1
        }
        
    }
return object
 }
 var x=keyValue(str1)
 var y=keyValue(str2)
 var res=""
 var res2=""
for (const key in x) {
res+=key
}
for (const key in y) {
res2+=key
}
if(res==res2){
    console.log("Yes")
}
else{
    console.log("No")
}
}