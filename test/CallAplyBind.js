var name={
    firstname:"Noor",
    lastname:"Muhammed"
}
const printFullname=function(city,state){
    console.log(this.firstname,this.lastname,city,state)
}
printFullname.call(name,"delhi","uttarkhand")
printFullname.apply(name,["dehradun","mumbai"])
var x = printFullname.bind(name, "nanital", "uttarkhand");
x()