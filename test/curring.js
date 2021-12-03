const curring=(a)=>(b)=>(c)=>{
    console.log(a,b,c)
}
curring(5)(6)(7)
var sum=0
function cur(a){
    return function(b){
        return function(c){
            sum+=a+b+c
            console.log(sum)
        }
    }
}
cur(1)(2)(3)