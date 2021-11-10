var input=`1 2 3 4 5 6 7`
var input=input.split("\n");
var arr=input[0].split(" ").map(Number);
var id=arr.length-1;

function sumArr(arr,id){
    if(id==0){
        console.log(arr[id]);
      return 
    }
console.log(arr[id])
sumArr(arr,id-1)
  
}
sumArr(arr,id);

