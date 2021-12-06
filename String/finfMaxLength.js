var arr=["hello", "hi", "how are you", "what are you doing"]
var max=0;
var res=""
for (let i = 0; i < arr.length; i++) {
   max = Math.max(max, arr[i].length);
   if(arr[i].length==max){
        res=arr[i]
   }
   
}
console.log(res)