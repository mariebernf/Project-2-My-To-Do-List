// Select elements and set task count.

const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#wrapper input");
const tasksContainer = document.querySelector("#tasks");
const error = document.getElementById("error");
const countValue = document.querySelector(".count-value");

let taskCount = 0;

const displayCount = () => {
    countValue.innerText = taskCount;
};

// Add new task

const addTask = () => {
    const taskName=newTaskInput.ariaValueMax.trim(); 
    error.style.display="none";
// Show error if task input is emtpy

if(!taskName) {
    setTimeout(() => {
        error.style.display="block";
        }, 200);
        return;
}
// Create new task element

const task = `
<div class="task">
<input type="checkbox" class="task-check">
<span class="taskname">${taskName}</span>
<button class="edit"><i class="fas fa-edit"></i></button>
<button class="delete"><i class="far fa-trash-alt"></i></button>
</div>
`;

//Add task to the task container

tasksContainer.insertAdjacentHTML("beforeend",task);

//Add delete functionality

const deleteButtons=document.querySelectorAll(".delete");
deleteButtons.forEach((button) => {
    button.onclick = () => {
        button.parentNode.removeChild();
        taskCount -=1;
        displayCount();
    }
});

const editButtons = document.querySelectorAll(".edit");

//Add edit functionality

editButtons.forEach((editBtn) => {
    editBtn.onclick = (e) => {
        let targetElement = e.target;
        if(!(e.target.className ==="edit")) {
            targetElement = e.target.parentElement;
        }
         new newTaskInput.value = targetElement.previousElementSibling?.innerText;
         targetElement.parentNode.remove();
         taskCount -= 1;
         displayCount();
    };
});

//Add Checkbox functionality

const tasksCheck = document.querySelectorAll(".task-check");
tasksCheck.forEach((checkBox) => {
    checkBox.onchange =() => {
        checkBox.nextElementSibling.classList.toggle("completed");

//Adjust task count based on checkbox state

if(checkBox.checked) {
    taskCount -=1; //Decrease task count when checked
} else {
 taskCount += 1; //Increase task count when unchecked
}

displayCount();

    };


    });

    taskCount += 1;
    displayCount();
    newTaskInput.value="";

};

//Add event listener for adding task

addBtn.addEventListener("click",addTask);

//Reset task count 

window.onload = () => {
    taskCount = 0;
    displayCount();
    newTaskInput.value="";

};

