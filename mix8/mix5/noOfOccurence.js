var input =`6 3
2 3 3 3 6 9`;
var input = input.split("\n");
var num=input[0].split(" ").map(Number);
var n=num[0];
var k=num[1]
var array = input[1].split(" ").map(Number);
var object={}
for (let i = 0; i < array.length; i++) {
  var key=array[i];
    if(object[key]==undefined){
        object[key]=1
    }
    else{
        var pre=object[key]
        object[key]=pre+1
    }
}
for (const key in object) {
if(key==k){
    console.log(object[key])
}
}