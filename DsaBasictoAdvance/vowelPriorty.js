var input = `4
eio
masaischool
ubcdefghioel
rhythm`;
var input=input.split("\n");
var t=+input[0];
for (let i = 0; i <t; i++) {
    var str=input[i+1];
    var res=[]
    var res1=[]
    for (let i = 0; i < str.length; i++) {
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
          res.push(str[i])
        }
        else{
             res1.push(str[i]) ;
        }
        
    }
    console.log(res.concat(res1).join(""))
}