const taskForm = document.getElementById("task-form");

const taskList = document.getElementById("task-list");

loadTasks();

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskInput = document.getElementById("task-input");

  const task = taskInput.value;
  console.log(task);

  if (task) {
    taskList.append(createTaskElement(task));
    storeTaskInLocalStorage(task);// guarda la tarea en el local storage
    taskInput.value = "";
  }
});

function createTaskElement(task) {
  const li = document.createElement("li");
  li.textContent = task;
  li.append(createButton("❌", "delete-btn"), createButton("✏️", "edit-btn"));
  return li;
}

function createButton(text, className) {
  const btn = document.createElement("span");
  btn.textContent = text;
  btn.className = className;
  return btn;
}

taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    deleteTask(event.target.parentElement);
  } else if (event.target.classList.contains("edit-btn")) {
    editTask(event.target.parentElement);
  }
});

function deleteTask(taskItem) {
  if (confirm("Estás segura / seguro de borrar este elemento?")) {
    taskItem.remove();
  }
}

function editTask(taskItem) {
  const newTask = prompt("Edita la tarea:", taskItem.firstChild.textContent);
  if (newTask !== null) {
    taskItem.firstChild.textContent = newTask;
  }
}
 //funcion para guardar las tareas en el localstorage
function storeTaskInLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]"); 

  tasks.push(task);//agrega elementos a una tarea
  localStorage.setItem("tasks", JSON.stringify(tasks)); //guarda el array en un string
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]"); //aqui estamos preguntando si existen tareas guardadas en el localStorage sino exiten nos arroja un array vacio
  tasks.forEach((task) => {
    taskList.appendChild(createTaskElement(task));//si existen las tareas hazme un apendchild de los elementos
  });
}