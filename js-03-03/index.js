function MyAverage() {
  let total = 0;
  for (let i = 0; i < 5; i++) {
    let num = +prompt("Tipe your grades:");
    total += num;
  }
  let average = total / 5;
  if (average < 12) {
    console.log("you became conditional!Your average is: " + average);
  } else {
    console.log("your average is: " + average);
  }
}

MyAverage();
