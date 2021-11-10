var input=`abc`
var input=input.split("\n");
var str=input[0];
var res=""

function generate(str,id,res){
    if(id==0){
    console.log(res);
    return
    }
    var ch=str.charAt(0)
     
     generate(str.substr(1), id-1, res);
     generate(str.substr(1),id-1, res + ch);

}
generate(str, str.length, res);