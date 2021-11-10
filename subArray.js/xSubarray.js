var input = `3
3 9 2
1 8 3
8 3 1
6 8 6 10 9 5 9 2
5 3 2
1 3 2 5 1`;
var input=input.split("\n");
var t=+input[0];
for (let a = 0; a < t; a++) {
    var num=input[2*a+1].split(" ").map(Number);
    var n=num[0];
    var k=num[1];
    var x=num[2]
    var arr = input[2*a+2].split(" ").map(Number);
    var queue=[]
    var res=0
    var i=0;
for (let j = 0; j < n; j++) {
   if(arr[j]<=k){
    queue.push(j)
   }
    if(j-i+1==x){
        if(queue.length-1==x){
            res++
        }
        if(queue.length>0&&queue[queue.length-1]==i){
            queue.shift()
        }
        j++
    }
}
console.log(res)
}