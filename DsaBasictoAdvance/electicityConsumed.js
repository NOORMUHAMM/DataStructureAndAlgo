var input=`930`;

    var num = input.split(" ").map(Number);
    var amount = num - 80;
    if (amount <= 150) {
      console.log(amount / 3);
    }
    if (amount > 150 && amount <= 650) {
      amount = amount - 150;
      console.log(amount / 5 + 50);
    }
    if (amount > 650) {
      amount = amount - 650;
      console.log(amount / 10 + 150);
    }