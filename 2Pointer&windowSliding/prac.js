let arr = [-1,4,7,2];
let k = -10;
let n = arr.length;
let res = 0;

// Calculate all subarrays
for (let i = 0; i < n; i++) {

  for (let j = i; j <n; j++) {
   let sum = 0;
for (let k = i; k < n; k++) {
//   console.log(arr[k])
    sum += arr[k];

    //   console.log("sum", sum);
}
res=Math.max(res,sum)

  
//     // Check if sum is equal to
//     // required sum
//     if (sum == k) res++;
//   }
  }
   
}

console.log(res)