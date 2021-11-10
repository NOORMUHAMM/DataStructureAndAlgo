var input = `2
5
1 2 3 6 8
5
1 2 4 6 8`;
var input=input.split("\n");
var t=+input[0];
for (let i = 0; i <t; i++) {
    var n=input[2*i+1].split(" ").map(Number)
    var arr=input[2*i+2].split(" ").map(Number)
for (let i = 0; i < arr.length; i++) {
    if(arr[i]%2==0 && arr[i+1]%2==0&& arr[i+2]%2==0){
        console.log("yes")
    }
    else{
        console.log("No")
    }
    
}
   
}