"use strict"

const form = document.querySelector(".todolist__form");
const task = document.querySelector(".todolist__text");
const btn = document.querySelector(".todolist__btn");
const list = document.getElementById("list");
const errorMessage = document.querySelector(".todolist__error-message_disabled");

task.addEventListener("focus", handleFocus );
form.addEventListener("submit", function(event){
    event.preventDefault();
    handleSubmit();
});
list.addEventListener("click", deleteTask );

function handleFocus() {
    const errorField = task.classList.contains("error");

    if (errorField) {
        task.classList.remove("error");
        let errorMessages = document.querySelectorAll(".todolist__error-message");
        errorMessages.forEach(errorMessage => {
            errorMessage.remove();
        });
        errorMessage.classList.toggle("todolist__error-message_active");
        btn.disabled = false;
    }
}

function handleSubmit() {
    if (task.value.trim().length === 0) {
        task.classList.add("error");
        errorMessage.classList.toggle("todolist__error-message_active");
        btn.disabled = true; 
        return;
    } else {
        addNewTask();
    }
}

function addNewTask() {
    let li = document.createElement('li');
    li.textContent = task.value;
    li.className = "todolist__item";
    list.append(li);
    let done = document.createElement('button');
    done.className = "todolist__done-btn";
    done.innerHTML = "Done";
    li.append(done);
    form.reset();
}

function deleteTask(event) {
    const removeButton = event.target.className === "todolist__done-btn";

    if (removeButton) {
        let row = event.target.closest(".todolist__item");
        row.remove();
    }
}

