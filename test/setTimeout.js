setTimeout(()=>{
    console.log("hello")
},3000)


// constuctor

class Student{
    constructor(name,age,grade){
        this.myName=name,
        this.myAge=age,
        this.myGrade=grade
    }
    disply(){
      return `${this.myName},${this.myAge},${this.myGrade}`
    }
}
var st1=new Student("Noor",26,"A")
// st1.disply()
console.log(st1.disply());
// inheritance
class Games extends Student{
    constructor(name,age,grade,sport){
        super(name, age, grade),
        this.myGames=sport
    }
    show(){
        return `${super.disply()} ${this.myGames}`
    }
}
var game=new Games("Jack",20,"B","cricket")
console.log(game.show())