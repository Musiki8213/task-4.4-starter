// Root element
const mainRoot = document.getElementById("root");

// Heading
const heading = document.createElement("h1");
heading.textContent = "📝 Task Manager";
mainRoot.appendChild(heading);

// Label
const inputLabel = document.createElement("label");
inputLabel.textContent = "Add a new task";
mainRoot.appendChild(inputLabel);

// Input field
const inputTask = document.createElement("input");
inputTask.type = "text";
inputTask.placeholder = "Enter task";
mainRoot.appendChild(inputTask);

// Add button
const addBtn = document.createElement("button");
addBtn.textContent = "➕ Add Task";
mainRoot.appendChild(addBtn);

// Task list container
const myTasksDiv = document.createElement("div");
mainRoot.appendChild(myTasksDiv);

// Add task functionality
addBtn.addEventListener("click", function () {
  const task = inputTask.value.trim();

  if (task === "") {
    alert("🚨 Please enter a task!");
    return;
  }

  const taskContainer = document.createElement("div");
  const label = document.createElement("label");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const taskText = document.createElement("span");
  taskText.textContent = task;

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      taskText.style.textDecoration = "line-through";
      taskText.style.color = "#999";
    } else {
      taskText.style.textDecoration = "none";
      taskText.style.color = "#2d3e34";
    }
  });

  label.appendChild(checkbox);
  label.appendChild(taskText);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", function () {
    myTasksDiv.removeChild(taskContainer);
  });

  taskContainer.appendChild(label);
  taskContainer.appendChild(deleteBtn);
  myTasksDiv.appendChild(taskContainer);

  inputTask.value = "";

  // Apply task container styling
  Object.assign(taskContainer.style, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e9f6f0",
    padding: "14px 16px",
    borderRadius: "10px",
    marginBottom: "12px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
  });

  Object.assign(checkbox.style, {
    marginRight: "10px"
  });

  Object.assign(taskText.style, {
    fontSize: "16px",
    color: "#2d3e34",
    fontWeight: "500"
  });

  Object.assign(deleteBtn.style, {
    border: "none",
    fontSize: "18px",
    cursor: "pointer"
  });
});

// Styling Section

Object.assign(mainRoot.style, {
  backgroundColor: "#f8fefc",
  maxWidth: "500px",
  margin: "60px auto",
  padding: "40px 30px",
  textAlign: "center",
  borderRadius: "16px",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
});

Object.assign(heading.style, {
  color: "#1c6c46",
  fontSize: "28px",
  fontWeight: "600",
  marginBottom: "25px"
});

Object.assign(inputLabel.style, {
  display: "block",
  fontSize: "16px",
  color: "#333",
  fontWeight: "500",
  marginBottom: "8px",
  textAlign: "left"
});

Object.assign(inputTask.style, {
  width: "100%",
  padding: "12px 14px",
  fontSize: "15px",
  borderRadius: "8px",
  border: "1px solid #d0e2d4",
  marginBottom: "20px"
});

Object.assign(addBtn.style, {
  backgroundColor: "#1c6c46",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  padding: "12px 20px",
  fontSize: "15px",
  cursor: "pointer",
  fontWeight: "500",
  transition: "background-color 0.3s"
});

addBtn.addEventListener("mouseenter", () => {
  addBtn.style.backgroundColor = "#145237";
});
addBtn.addEventListener("mouseleave", () => {
  addBtn.style.backgroundColor = "#1c6c46";
});

Object.assign(myTasksDiv.style, {
  marginTop: "30px"
});
