const calculator = {
  num1: document.getElementById("a"),
  num2: document.getElementById("b"),
  result: document.getElementById("res"),

  sum: function () {
    return Number(this.num1.value) + Number(this.num2.value);
  },
  mult: function () {
    return Number(this.num1.value) * Number(this.num2.value);
  },
  show: function () {
    document.body.addEventListener("click", (e) => {
      if (e.target.id === "sum") {
        this.result.value = this.sum();
      }

      if (e.target.id === "mult") {
        this.result.value = this.mult();
      }
    });
  },
};

calculator.show();
