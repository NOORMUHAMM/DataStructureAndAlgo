var input = `2
6
aabbcc
5
aabcd`;
var input=input.split("\n")
var t=+input[0];
for (let i = 0; i <t; i++) {
var n=input[2*i+1].split(" ").map(Number);
var arr = input[2*i+2]
var object={}
for (let i = 0; i < arr.length; i++) {
var key=arr[i];
if(object[key]===undefined){
    object[key]=1;
    }
    else{
        var pre = object[key];
        object[key]=pre+1
    }

    
}
var res=""
for (const key in object) {
res+=object[key]+" "
}
for (let i = 0; i < res.length; i++) {
if(res[i]==res[i+1]){
    console.log("Yes")
}
else{
    console.log("mo")
}
    
}

}