// Select elements and set task count.

const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#wrapper input");
const tasksContainer = document.querySelector("#tasks");
const error = document.getElementById("error");
const countValue = document.querySelector(".count-value");

let taskCount = 0;

const displayCount = ()=>{
    countValue.innerText = taskCount;
};

// Add new task

const displayCount = () => {
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



};