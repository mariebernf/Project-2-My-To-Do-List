/* global console, alert */

// Select elements and set task count.
const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#wrapper input");
const tasksContainer = document.querySelector("#tasks");
const error = document.getElementById("error");
const countValue = document.querySelector(".count-value");

let taskCount = 0;

function displayCount() {
  console.log("Task count updated");
}

// Add new task
function addTask() {
  const taskName = newTaskInput.value.trim();
  error.style.display = "none";

  // Show error if task input is emtpy
  if (!taskName) {
    setTimeout(function () {
      error.style.display = "block";
    }, 200);
    return;
  }

  // Create new task element
  const task = `
<div class="task">
<input type="checkbox" class="task-check">
<span class="taskname">${taskName}</span>
<button class="edit">Edit</button>
<button class="delete">Delete</button>
</div>
`;

  // Add task to the task container
  tasksContainer.insertAdjacentHTML("beforeend", task);

  // Delete functionality
  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach(function (button) {
    button.onclick = function () {
      button.parentNode.remove();
      taskCount -= 1;
      displayCount();
    };
  });

  const editButtons = document.querySelectorAll(".edit");

  // Edit functionality
  editButtons.forEach(function (editBtn) {
    editBtn.onclick = function (e) {
      let targetElement = e.target;
      if (!(e.target.className === "edit")) {
        targetElement = e.target.parentElement;
      }
      newTaskInput.value = targetElement.previousElementSibling?.innerText;
      targetElement.parentNode.remove();
      taskCount -= 1;
      displayCount();
    };
  });

  // Checkbox functionality
  const tasksCheck = document.querySelectorAll(".task-check");
  tasksCheck.forEach(function (checkBox) {
    checkBox.onchange = function () {
      checkBox.nextElementSibling.classList.toggle("completed");

      // Adjust task count based on checkbox state
      if (checkBox.checked) {
        taskCount -= 1; // Decrease task count when checked
      } else {
        taskCount += 1; // Increase task count when unchecked
      }

      displayCount();
    };
  });

  taskCount += 1;
  displayCount();
  newTaskInput.value = "";

  // Pop up message
  alert("Task added successfully!");
}

// Event listener for adding task
addBtn.addEventListener("click", addTask);

// Reset task count
window.onload = function () {
  taskCount = 0;
  displayCount();
  newTaskInput.value = "";
};
