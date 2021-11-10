var input = `3
abcd
dcab
aa
aaa
iuuyyxjjxb
nhurlyuzmo`;
var input = input.split("\n");
var t = +input[0];
for (let i = 0; i < t; i++) {
  var str1 = input[2 * i + 1].split("");
  str1.sort();
  var str2 = input[2 * i + 2].split("");
  str2.sort();
  function ana(str) {
    var object = {};
    for (let i = 0; i < str.length; i++) {
      var key = str[i];
      if (object[key] === undefined) {
        object[key] = 1;
      } else {
        var pre = object[key];
        object[key] = pre + 1;
      }
    }
    return object;
  }
  var x=ana(str1);
  var res1="";
  var res2="";
  var y=ana(str2)

  var fin="";
  var fine1=""
for (const key in x) {
    res1+=key+" "
     res2+=x[key]+" "
}
for (const key in y) {

  fin+=key+" ";
  fine1+= y[key]+" ";
  
}
// console.log(fin)
// console.log(res1);
// console.log(fine1);
// console.log(res2);



    


  if(res1===fin&&res2===fine1){
      console.log("True")
  }
else{
    console.log("False")
}
}

