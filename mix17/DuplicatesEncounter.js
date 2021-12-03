var input=`aaabccddd`
var input=input.split("\n");
var str=input[0];
var res=[]
for (let i = 0; i <str.length; i++) {
if(str[i]===res[res.length-1]){
    res.pop()
}
else{
    res.push(str[i])
}
}
var finel=res.join("")
  if (finel == "") {
    console.log("Empty String");
  } else {
    console.log(finel);
  }
    
