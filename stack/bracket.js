var input = `5
{([])}
()
([]
){(){[])}]
{[(])}
`;
var input=input.split("\n");
var t=+input[0]
for (let i = 0; i < t; i++) {
var str=input[i+1].split("")

function check(str){
var stack=[]
for (let i = 0; i < str.length; i++) {
if(str[i]==="("||str[i]==="{"||str[i]==="["){
    stack.push(str[i])
}
else{
    if(stack.length==0){
        return "not balanced"
    }
    
      if (
        (stack[stack.length - 1] == "(" && str[i] == ")") ||
        (stack[stack.length - 1] == "{" && str[i] == "}") ||
        (stack[stack.length - 1] == "[" && str[i] == "]")
      ) {
        stack.pop(str[i]);
      } else {
        return "not balanced";
      }
}
}

if(stack.length==0){
    return "balanced";
}
else{
    return "not balanced";
}
}
console.log(check(str));
}
