 var arr=[1,3,5,7,9]

 var res=arr.sort((a,b)=>a-b)
   var sum=0;
   var sum1=0
  for(let i=0;i<res.length-1;i++){
      sum+=res[i]
  }
   for(let i=1;i<res.length;i++){
      sum1+=res[i]
  }
 console.log(sum,sum1)

