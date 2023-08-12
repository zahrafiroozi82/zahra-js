// تعریف یک آرایه برای نگهداری افراد
let people = [];

// فانکشن برای اضافه کردن فرد جدید
function addPerson() {
  const name = prompt("نام فرد:");
  const age = parseInt(prompt("سن فرد:"));
  const id = prompt("شناسه فرد:");
  const education = prompt("رشته تحصیلی فرد:");

  const person = {
    name: name,
    age: age,
    id: id,
    education: education,
  };

  people.push(person);
}

// فانکشن برای حذف فرد بر اساس شناسه
function removePersonById(id) {
  people = people.filter((person) => person.id !== id);
}

// فانکشن برای ویرایش اطلاعات فرد بر اساس شناسه
function editPersonById(id) {
  const index = people.findIndex((person) => person.id === id);
  if (index !== -1) {
    const newName = prompt("نام جدید:");
    const newAge = parseInt(prompt("سن جدید:"));
    const newEducation = prompt("رشته تحصیلی جدید:");

    people[index].name = newName;
    people[index].age = newAge;
    people[index].education = newEducation;
  }
}

// نمایش اطلاعات افراد
function displayPeople() {
  console.log(people);
}

// اجرای دستورات تا زمانی که کاربر خروجی را انتخاب کند
let choice;
while (choice !== "exit") {
  choice = prompt(
    "لطفاً یکی از دستورات 'add', 'remove', 'edit', 'display', 'exit' را وارد کنید:"
  );

  switch (choice) {
    case "add":
      addPerson();
      break;
    case "remove":
      const idToRemove = prompt("شناسه فرد برای حذف:");
      removePersonById(idToRemove);
      break;
    case "edit":
      const idToEdit = prompt("شناسه فرد برای ویرایش:");
      editPersonById(idToEdit);
      break;
    case "display":
      displayPeople();
      break;
    case "exit":
      console.log("خروج از برنامه.");
      break;
    default:
      console.log("دستور نامعتبر. لطفاً دستور معتبر وارد کنید.");
  }
}
