var input = `{{)[](}}`;
var input=input.split("\n");
var str=input[0];
var stack=[];
for (let i = 0; i < str.length; i++) {
  var ch=str.charAt(i);
  if(ch=="(" || ch=="[" || ch=="{"){
      stack.push(ch)
  }
  if(ch==")" || ch=="]" || ch=="}"){
      stack.pop()
  }
    
}
if(stack.length==0){
    console.log("balanced")
}
else{
    console.log("unbalanced")
}