var input=`1 2 3 4 5 6 7 8 9 10`
var input=input.split("\n");
var arr=input[0].split(" ").map(Number);
var id=0;
var sum=0;
function display(arr,id){
    if(id==arr.length){
        return
    }
   
    display(arr, id+1);
     return sum+=arr[id];
}
var x=display(arr, id);
console.log(x)