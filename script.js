document.addEventListener("DOMContentLoaded", function () {
    const addTaskBtn = document.getElementById("addTask");
    const newTaskInput = document.getElementById("newTask");
    const todoList = document.getElementById("todoList");
    const doneList = document.getElementById("doneList");
    const changeBackgroundBtn = document.getElementById("changeBackground");
    const bgInput = document.getElementById("bgInput");

    addTaskBtn.addEventListener("click", function () {
        const taskText = newTaskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;
            li.addEventListener("click", function () {
                if (li.parentNode.id === "todoList") {
                    doneList.appendChild(li);
                } else {
                    todoList.appendChild(li);
                }
            });
            todoList.appendChild(li);
            newTaskInput.value = "";
        }
    });

    changeBackgroundBtn.addEventListener("click", function () {
        bgInput.click();
    });

    bgInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                document.body.style.backgroundImage = `url(${e.target.result})`;
            };
            reader.readAsDataURL(file);
        }
    });
});
