// All your DOM manipulation must happen here.
// You will create and inject all elements into <main id="root"> using JavaScript only.

// Root element
const mainRoot = document.getElementById("root");

// 🌿 Root styling
Object.assign(mainRoot.style, {
  backgroundColor: "#dbecd9c7",
  width: "700px",
  paddingTop: "40px",
  textAlign: "center",
  borderRadius: "30px"
});

// Heading
const heading = document.createElement("h1");
heading.textContent = "Mini Task Tracker";
mainRoot.appendChild(heading);

// 🌿 Heading styling
Object.assign(heading.style, {
  fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
  color: "#087e27ff",
  fontWeight: "600"
});

// Input label
const inputLabel = document.createElement("label");
inputLabel.appendChild(document.createTextNode("Enter A Task"));
inputLabel.appendChild(document.createElement("br"));

// 🌿 Input label styling
Object.assign(inputLabel.style, {
  color: "#346140",
  fontSize: "20px",
  fontWeight: "550"
});

// Input field
const inputTask = document.createElement("input");
inputTask.type = "text";
inputTask.name = "task";
inputTask.id = "newTask";
inputLabel.appendChild(inputTask);

mainRoot.appendChild(inputLabel);
mainRoot.appendChild(document.createElement("br"));
mainRoot.appendChild(document.createElement("br"));
mainRoot.appendChild(document.createElement("br"));

// Add button
const addBtn = document.createElement("button");
addBtn.textContent = "ADD";
mainRoot.appendChild(addBtn);

// 🌿 Add button styling
Object.assign(addBtn.style, {
  backgroundColor: "#346140",
  color: "white",
  borderRadius: "10px",
  padding: "10px 20px",
  border: "1px solid green"
});

mainRoot.appendChild(document.createElement("br"));

// Container for tasks
const myTasksDiv = document.createElement("div");
mainRoot.appendChild(myTasksDiv);

// Add task function
let currentTaskLabel = null;

addBtn.addEventListener("click", function () {
  const task = inputTask.value.trim();

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  // Task container
  const taskContainer = document.createElement("div");

  // 🌿 Task container styling
  Object.assign(taskContainer.style, {
    display: "flex",
    alignItems: "center",
    gap: "30px",
    paddingLeft: "300px"
  });

  // Label with checkbox
  const label = document.createElement("label");
  label.appendChild(document.createElement("br"));

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "task";

  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(task));
  label.appendChild(document.createElement("br"));

  console.log("Added: ", task);
  inputTask.value = "";

  // 🌿 Label styling
  Object.assign(label.style, {
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    color: "#1a5028ff",
    fontWeight: "600",
    paddingBottom: "30px"
  });

  // Completed task (line-through effect)
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      label.style.textDecoration = "line-through";
      label.style.textDecorationColor = "#1c963cff";
      console.log("Completed");
    } else {
      label.style.textDecoration = "none";
    }
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  // 🌿 Delete button styling
  Object.assign(deleteBtn.style, {
    backgroundColor: "#cfd8cfff",
    color: "#1a5028ff",
    borderRadius: "10px",
    padding: "5px 10px",
    border: "1px solid gray",
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    fontWeight: "600"
  });

  deleteBtn.addEventListener("click", function () {
    myTasksDiv.removeChild(taskContainer);
    console.log("Deleted task: ", task);
  });

  // Add label and delete button to container
  taskContainer.appendChild(label);
  taskContainer.appendChild(deleteBtn);

  // Add container to task list
  myTasksDiv.appendChild(taskContainer);

  currentTaskLabel = label;
});
