var input = `3
1
q
6
aabbcc
5
aabcd`;
var input=input.split("\n");
var t=+input[0];
for (let i = 0; i < t; i++) {
var n=input[2*i+1]
var arr=input[2*i+2]
var object={}
if(arr.length==1){
    console.log("Possible!");
}
else{
for (let i = 0; i < arr.length; i++) {
var key=arr[i];
if(object[key]==undefined){
    object[key]=1;
}
else{
    var pre=object[key]+1;
    object[key]=pre+1;
}

}
for (const key in object) {
   console.log(`${key}-${object[key]}`)
}

}
}