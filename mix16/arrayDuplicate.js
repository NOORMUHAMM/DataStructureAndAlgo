var input = `3
2
7 9
6 5
9
2 2 2 3 5 5 6 8 9
9 8 7 6 5 3 2 2 2
7
1 4 4 5 8 8 9
9 9 6 6 4 2 1`;
var input=input.split("\n");
var t=+input[0];
for (let i = 0; i < t; i++) {
 var n=input[3*i+1].split(" ").map(Number)
 var arr1=input[3*i+2].split(" ").map(Number)
 var arr2=input[3*i+3].split(" ").map(Number)
 
function  check(arr) {
    var object={};
    for (let i = 0; i < arr.length; i++) {
        var key=arr[i];
        if(object[key]===undefined){
            object[key]=1
        }
        else{
            var pre=object[key];
            object[key]=pre+1
        }
        
    }
    var stack=[]
    for (const key in object) {
       stack.push(key)
    }
    return stack
}
var x=check(arr1)
var y=check(arr2);
console.log(x)
var count=0
for (let i = 0; i <n; i++) {
 if (x[i] == y[i] && x[i] !== undefined && y[i] !== undefined) {
   count++;
 }
    
}
console.log(count)
    
}