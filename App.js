// All your DOM manipulation must happen here.
// You will create and inject all elements into <main id="root"> using JavaScript only.

//root

const mainRoot = document.getElementById("root");
mainRoot.style.backgroundColor = "#dbecd9c7";
mainRoot.style.width = "700px";
mainRoot.style.paddingTop = "40px";
mainRoot.style.textAlign = "center";
mainRoot.style.borderRadius = "30px";



//heading
const heading = document.createElement("h1");
heading.textContent = "Mini Task Tracker";
mainRoot.appendChild(heading);
heading.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;";
heading.style.color = "#087e27ff";
heading.style.fontWeight = "600";

//input field
const inputLabel = document.createElement("label");
inputLabel.appendChild(document.createTextNode("Enter A Task"));
inputLabel.appendChild(document.createElement("br"));
inputLabel.style.color = "#346140";
inputLabel.style.fontSize = "20px";
inputLabel.style.fontWeight = "550";

const inputTask = document.createElement("input");
inputTask.type = "text";
inputTask.name = "task";
inputTask.id = "newTask";
inputLabel.appendChild(inputTask);
mainRoot.appendChild(inputLabel);

mainRoot.appendChild(document.createElement("br"));
mainRoot.appendChild(document.createElement("br"));
mainRoot.appendChild(document.createElement("br"));

//add button
const addBtn = document.createElement("button");
addBtn.textContent = "ADD";
addBtn.style.backgroundColor = "#346140";
addBtn.style.color = "white";
addBtn.style.borderRadius = "10px";
addBtn.style.padding = "10px 20px 10px 20px";
addBtn.style.border = "1px solid green";

mainRoot.appendChild(addBtn);

mainRoot.appendChild(document.createElement("br"));
//div
const myTasksDiv = document.createElement("div");
mainRoot.appendChild(myTasksDiv);

//add function
let currentTaskLabel = null;
addBtn.addEventListener("click", function () {
  task = inputTask.value.trim();
  if (task === "") {
    alert("Please enter a task");
    return;
  }

    const taskContainer = document.createElement("div");
  
 taskContainer.style.display = "flex";
taskContainer.style.alignItems = "center";
taskContainer.style.gap = "30px";
taskContainer.style.paddingLeft = "300px";
  //checkbox
  const label = document.createElement("label");
  label.appendChild(document.createElement("br"));

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "task";
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(task));
  label.appendChild(document.createElement("br"));
  myTasksDiv.appendChild(label);
  console.log("Added: ", task);
  inputTask.value = "";

  


  //completed tasks
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      label.style.textDecoration = "line-through";
       console.log("Completed ");
      label.style.textDecorationColor = "#1c963cff";
    } else {
      label.style.textDecoration = "none";
    }
  });
    const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.backgroundColor = "#cfd8cfff";
  deleteBtn.style.color = "#0f852fff";
  deleteBtn.style.borderRadius = "10px";
  deleteBtn.style.padding = "5px 10px";
  deleteBtn.style.border = "1px solid gray";
  
deleteBtn.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;";
deleteBtn.style.color = "#1a5028ff";
deleteBtn.style.fontWeight = "600";


  deleteBtn.addEventListener("click", function () {
    myTasksDiv.removeChild(taskContainer);
    console.log("Deleted task: ", task);
  });
  
 taskContainer.appendChild(label);
  taskContainer.appendChild(deleteBtn);

  
  myTasksDiv.appendChild(taskContainer);


label.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;";
label.style.color = "#1a5028ff";
label.style.fontWeight = "600";
label.style.paddingBottom = "30px";

});







