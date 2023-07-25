function sum(a = 0, b = 0, o) {
  if (isNaN(a) || isNaN(b)) {
    console.log("first number or second number is fals");
  }
  switch (o) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      console.log("operator is fals");
  }
}

const firstNumber = +prompt("Enter first number");
const operator = prompt("Enter operator");
const secondNumber = +prompt("Enter second number");

console.log(sum(firstNumber, secondNumber, operator));
