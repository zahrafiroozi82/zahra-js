const leftnumber = +prompt("please write first number");
const operator = prompt("please write operator");
const rightnumber = +prompt("please write seccond number");

if (isNaN(leftnumber)) {
  console.log("leftnumber ERR!");
}
if (isNaN(rightnumber)) {
  console.log("rightnumber ERR!");
}

if (operator === "+") {
  console.log(leftnumber + rightnumber);
}
if (operator === "-") {
  console.log(leftnumber - rightnumber);
}
if (operator === "/") {
  console.log(leftnumber / rightnumber);
}
if (operator === "*") {
  console.log(leftnumber * rightnumber);
}
