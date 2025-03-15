## I followed the tutorial and made modification as I went along, but some of the code I took directly from the tutorial. The following code is taken from [To Do List App With Javascript](https://www.youtube.com/watch?v=c48pBHlnsPE&t=712s) without modifications or additions:

## Javascript: This section of code was taken directly from the tutorial: [To Do List App With Javascript](https://www.youtube.com/watch?v=c48pBHlnsPE&t=712s).

const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#wrapper input");
const tasksContainer = document.querySelector("#tasks");
const error = document.getElementById("error");
const countValue = document.querySelector(".count-value");

let taskCount = 0;

// Adding tasks
const task = `

<div class="task">
  <input type="checkbox" class="task-check">
  <span class="taskname">${taskName}</span>
  <button class="edit">Edit</button>
  <button class="delete">Delete</button>
</div>
`;

tasksContainer.insertAdjacentHTML("beforeend", task);

// Delete functionality
const deleteButtons = document.querySelectorAll(".delete");
deleteButtons.forEach((button) => {
button.onclick = () => {
button.parentNode.remove();
taskCount -= 1;
displayCount(taskCount);
};
});

// Edit functionality
const editButtons = document.querySelectorAll(".edit");
editButtons.forEach((editBtn) => {
editBtn.onclick = (e) => {
let targetElement = e.target;
if (!(e.target.className == "edit")) {
targetElement = e.target.parentElement;
}
newTaskInput.value =
targetElement.previousElementSibling?.innerText;
targetElement.parentNode.remove();
taskCount -= 1;
displayCount(taskCount);
};
});

// Checkbox functionality
const tasksCheck = document.querySelectorAll(".task-check");
tasksCheck.forEach((checkBox) => {
checkBox.onchange = () => {
checkBox.nextElementSibling.classList.toggle("completed");
if (checkBox.checked) {
taskCount -= 1;
} else {
taskCount += 1;
}
displayCount(taskCount);
};
});

taskCount += 1;
displayCount(taskCount);
newTaskInput.value = "";

## CSS: This section of CSS was taken directly from the tutorial [To Do List App With Javascript](https://www.youtube.com/watch?v=c48pBHlnsPE&t=712s).

_, _:before, \*:after {
padding: 0;
margin: 0;
box-sizing: border-box;

}

.completed {
text-decoration: line-through;

}

## HTML: This section of HTML code was taken directly from the tutorial [To Do List App With Javascript](https://www.youtube.com/watch?v=c48pBHlnsPE&t=712s).

div id="tasks"
p id="pending-tasks"
You have <span class="count-value">0</span> task(s) to complete.
</p>
</div>
</div>
p id="error">Input cannot be empty!
