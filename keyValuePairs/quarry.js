var input=`5
1 2 3 4 5
3
3 5 7`;
var input=input.split("\n");
var n=+input[0];
var arr=input[1].split(" ").map(Number);
var q=+input[2];
var quary= input[3].split(" ").map(Number);
function obje(n,arr,q,quary) {
    var object={};
    for (let i = 0; i < arr.length; i++) {
       var key=arr[i];
       if(object[key]===undefined){
           object[key]=1;
       }
        else{
            var pre=object[key];
            object[key]=pre+1
        }
    }
  for (let i = 0; i < q; i++) {
  
     if(object[quary[i]]!==undefined && object[quary[i]]!==0){
    console.log("YES")
     }
     else{
       console.log("NO")
     }
      
  }
}
obje(n, arr, q, quary);








