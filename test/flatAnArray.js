var arr = [0, 1, 2, [[[3, 4]]]];
function find(arr){
var res=[];
function helper(array){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(Array.isArray(element)){
            helper(element)
        }
        else{
            res.push(element)
        }
        
    }
}
helper(arr)
return res
}
console.log(find(arr))
