var input = `4
1
1
2
1 1
3
1 2 3
25
39 54 110 136 209 238 254 296 372 417 434 486 529 568 613 670 692 733 762 805 867 890 932 932 960`;
 var input=input.split("\n");
var t=+input[0];
for (let i = 0; i < t; i++) {
    var n=input[2*i+1].split(" ").map(Number);
    var arr=input[2*i+2].split(" ").map(Number);
    var sort=arr.sort((a,b)=>a-b)
  
var object={};
for (let i = 0; i <sort.length; i++) {
 var key=arr[i];
//  console.log(key)
 if(object[key]===undefined){
     object[key]=1;
 }
 else{
var pre=object[key];
object[key]=pre+1;
}

}
var res=""
var max=0;
for (const key in object) {
if(object[key]>max){
    max=object[key];
}

}

if(max>1){
    console.log("YES")
}
else{
    console.log("NO")
}
    
}
