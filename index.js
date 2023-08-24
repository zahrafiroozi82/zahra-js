document.addEventListener("DOMContentLoaded", function () {
  const taskForm = document.getElementById("task-form");
  const submitButton = document.getElementById("submit-button");
  const taskDisplay = document.getElementById("task-display");
  const taskDisplayContent = document.getElementById("task-display-content");

  submitButton.addEventListener("click", function () {
    const taskTitle = document.getElementById("task-title").value;
    const taskDescription = document.getElementById("task-description").value;

    const taskHTML = `
      <div class="border-t-2 border-gray-300 mt-2 py-2">
        <h3 class="font-semibold">${taskTitle}</h3>
        <p class="text-gray-700">${taskDescription}</p>
      </div>
    `;

    taskDisplayContent.insertAdjacentHTML("beforeend", taskHTML);
    taskDisplay.classList.remove("translate-y-full");
  });
});
