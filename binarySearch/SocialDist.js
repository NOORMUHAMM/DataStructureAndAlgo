var input = `1
5 3
1
2
7
4
9`;
var input=input.split("\n");
var t=+input[0];
for (let i = 0; i <t; i++) {
var n=input[2*i+1].split(" ").map(Number);
var num=n[0];
var k=n[1]
var arr=[];
for (let i = 2; i <= num+1; i++) {
  arr.push(input[i]);
}
var array = arr.map(Number).sort();
var count=0;
for (let i = 0; i < array.length; i++) {
if(Math.abs(array[i]-arr[i+3])==k){
    count++;
}
    
}
console.log(count)
}