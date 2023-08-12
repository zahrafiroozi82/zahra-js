const readline = require("readline");
const _ = require("lodash");

class Person {
  constructor(
    firstName,
    lastName,
    age,
    job,
    maritalStatus,
    gender,
    height,
    weight,
    id,
    phoneNumber
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.job = job;
    this.maritalStatus = maritalStatus;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
    this.id = id;
    this.phoneNumber = phoneNumber;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const people = [];

function addPerson() {
  rl.question("نام: ", (firstName) => {
    rl.question("نام خانوادگی: ", (lastName) => {
      rl.question("سن: ", (age) => {
        rl.question("شغل: ", (job) => {
          rl.question("وضعیت تاهل: ", (maritalStatus) => {
            rl.question("جنسیت: ", (gender) => {
              rl.question("قد: ", (height) => {
                rl.question("وزن: ", (weight) => {
                  rl.question("آیدی: ", (id) => {
                    rl.question("شماره تلفن: ", (phoneNumber) => {
                      const person = new Person(
                        firstName,
                        lastName,
                        age,
                        job,
                        maritalStatus,
                        gender,
                        height,
                        weight,
                        id,
                        phoneNumber
                      );
                      people.push(person);
                      console.log("فرد با موفقیت اضافه شد.");
                      askForCommand();
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

function removePersonById(id) {
  const indexToRemove = people.findIndex((person) => person.id === id);
  if (indexToRemove !== -1) {
    people.splice(indexToRemove, 1);
    console.log("فرد با موفقیت حذف شد.");
  } else {
    console.log("فردی با این آیدی یافت نشد.");
  }
  askForCommand();
}

function editPersonById(id) {
  const indexToEdit = people.findIndex((person) => person.id === id);
  if (indexToEdit !== -1) {
    rl.question("نام جدید: ", (firstName) => {
      rl.question("نام خانوادگی جدید: ", (lastName) => {
        console.log("اطلاعات فرد با موفقیت ویرایش شد.");
        askForCommand();
      });
    });
  } else {
    console.log("فردی با این آیدی یافت نشد.");
    askForCommand();
  }
}

function displaySortedPeople() {
  const sortedPeople = _.sortBy(people, ["firstName"]);
  console.log(sortedPeople);
  askForCommand();
}

function askForCommand() {
  rl.question(
    'لطفاً یکی از دستورات "add", "remove", "edit", "display", "exit" را وارد کنید: ',
    (choice) => {
      switch (choice) {
        case "add":
          addPerson();
          break;
        case "remove":
          rl.question("آیدی فرد برای حذف: ", (idToRemove) => {
            removePersonById(idToRemove);
          });
          break;
        case "edit":
          rl.question("آیدی فرد برای ویرایش: ", (idToEdit) => {
            editPersonById(idToEdit);
          });
          break;
        case "display":
          displaySortedPeople();
          break;
        case "exit":
          console.log("خروج از برنامه.");
          rl.close();
          break;
        default:
          console.log("دستور نامعتبر. لطفاً دستور معتبر وارد کنید.");
          askForCommand();
      }
    }
  );
}

askForCommand();
