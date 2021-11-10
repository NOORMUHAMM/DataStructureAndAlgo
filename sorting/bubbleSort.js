var input=`5
1 4 6 8 3`;
var input=input.split("\n");
var n=+input[0];
var arr=input[1].split(" ").map(Number);
var temp=0;
for (let i = 0; i <n-1; i++) {
  for (let j = 0; j < n-i-1; j++) {
    if(arr[j+1]<arr[j]){
        temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
    }
  
  }
  
}
  