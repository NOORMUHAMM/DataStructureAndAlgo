    var input = input.split(" ").map(Number)
    var step= ""
    if (input % 5 == 0) {
       step = input/ 5
    } else if (input1 % 5 != 0) {

       step = Math.floor(input/ 5)
       step =step + 1

    }


    console.log(step)

