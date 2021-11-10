var input = `1
8
39 27 11 4 24 32 32 1`;
// var input=input.split("\n");
// var t=+input[0];
// for (let i = 0; i <t; i++) {
//     var n=input[2*i+1].split(" ").map(Number);
//     var arr=input[2*i+ 2].split(" ").map(Number);
//     var stack=[];
//     var stack2=[]
//     var res=[];
//        var res1=[];
//     for (let i =arr.length; i >=0; i--) {
//          while(stack[stack.length-1]>=arr[i]){
//              stack.pop()
//          }
//         if(stack.length-1==0){
//             res.push(-1)
//         }
//         if (stack[stack.length - 1]<arr[i] ) {
//           res.push(stack[stack.length - 1]);
//         }
//         stack.push(arr[i])
//     }
//     console.log(res.reverse().join(" "))
//         for (let i =0; i < arr.length; i++) {
//           while (stack2[stack2.length - 1]>=arr[i]) {
//             stack2.pop();
//           }
//           if (stack2.length==0) {
//             res1.push(-1);
//           }
//           if (stack2[stack2.length-1]<arr[i]) {
//             res1.push(stack2[stack2.length-1]);
//           }
        
//           stack2.push(arr[i]);
//         }
//       console.log(res1.join(" "));
//       var ans=""
//       for (let i = 0; i < arr.length; i++) {
//     if(res1[i]==-1 && res1[i]==-1){
//         ans+=-1+" "
//     }
//     if(res==-1){
//         ans+=arr[res1[i]]+" "
//     }
//        if(res1[i]==-1){
//            ans+=arr[res[i]]+" "
//        }   
//        if(Math.abs(res[i]-i)<Math.abs(res1[i]-i)){
//            ans+=arr[res[i]]+" "
//        }
//        else{
//            ans+=arr[res1[i]]+" "
//        }
//       }
//       console.log(ans)
// }
    function runProgram(input){
      var input=input.split("\n");
      var t=+input[0];
      for (let i = 0; i <t; i++) {
          var n=input[2*i+1].split(" ").map(Number);
          var array=input[2*i+ 2].split(" ").map(Number);
        var stack = [];
        var res = [];
      

        for (i = array.length - 1; i >= 0; i--) {
          while (array[stack[stack.length - 1]] >= array[i]) {
            stack.pop();
          }
          if (stack.length == 0) {
            res.push(-1);
          } else {
            res.push(stack[stack.length - 1]);
          }
          stack.push(i);
        }
        res = res.reverse();

        let stack1 = [];
        let left = [];
        for (i = 0; i < array.length; i++) {
          while (array[stack1[stack1.length - 1]] >= array[i]) {
            stack1.pop();
          }
          if (stack1.length == 0) {
            left.push(-1);
          } else {
            left.push(stack1[stack1.length - 1]);
          }
          stack1.push(i);
        }

        var ans = "";
        for (i = 0; i < array.length; i++) {
          if (left[i] == -1 && res[i] == -1) {
            ans += -1 + " ";
          } else if (left[i] == -1) {
            ans += array[res[i]] + " ";
          } else if (res[i] == -1) {
            ans += array[left[i]] + " ";
          } else {
            if (Math.abs(res[i] - i) < Math.abs(left[i] - i)) {
              ans += array[res[i]] + " ";
            } else {
              ans += array[left[i]] + " ";
            }
          }
        }
        console.log(ans);
      }
    }
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/,"")
       runProgram(read);
    });
    
    process.on("SIGINT", function () {
        read = read.replace(/\n$/,"")
        runProgram(read);
        process.exit(0);
    });