// Default daily tasks
const defaultDailyTasks = [
  "⏰ Wake up",
  "🛏 Make the bed",
  "🧹 Cleaning",
  "🍳 Breakfast",
  "🏫 Go to class",
  "📖 Study / Homework",
  "🚿 Evening shower",
  "🍽 Dinner",
  "😴 Sleep"
];

function loadDefaultTasks() {
  const taskList = document.getElementById("defaultTasks");
  taskList.innerHTML = "";
  defaultDailyTasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;

    li.addEventListener("click", () => {
      li.classList.toggle("done");
    });

    taskList.appendChild(li);
  });
}

// Add custom task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}

// Calendar pick event
document.getElementById("datePicker").addEventListener("change", (event) => {
  alert("Selected Date: " + event.target.value);
});

// Load default on start
window.onload = loadDefaultTasks;
