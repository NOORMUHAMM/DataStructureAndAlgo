function StringChallenge(str) { 

  var n=str.length;
  var res=""
  var count=0;
  var temp=str[0];
  for(var i=0;i<n;i++){
    if(str[i]==temp){
      count++
    }
    else{
      res+=count+temp;
      count=1;
      temp=str[i]
    }
  }
  res+=count+temp
  return res; 

}
   
// keep this function call here 
console.log(StringChallenge("aabbcde"));