// Root element
const mainRoot = document.getElementById("root");

// 🌿 Root styling
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

// Heading
const heading = document.createElement("h1");
heading.textContent = "📝 Task Manager";  
Object.assign(heading.style, {
  color: "#1c6c46",      
  fontSize: "28px",     
  fontWeight: "600",    
  marginBottom: "25px"  
});
mainRoot.appendChild(heading); 

// Label
const inputLabel = document.createElement("label");
inputLabel.textContent = "Add a new task";  
Object.assign(inputLabel.style, {
  display: "block",       
  fontSize: "16px",       
  color: "#333",         
  fontWeight: "500",      
  marginBottom: "8px",    
  textAlign: "left"       
});
mainRoot.appendChild(inputLabel);  

// Input field
const inputTask = document.createElement("input");
inputTask.type = "text";            
inputTask.placeholder = "Enter task";  
Object.assign(inputTask.style, {
  width: "100%",             
  padding: "12px 14px",     
  fontSize: "15px",         
  borderRadius: "8px",       
  border: "1px solid #d0e2d4", 
  marginBottom: "20px"       
});
mainRoot.appendChild(inputTask); 

// Add button
const addBtn = document.createElement("button");
addBtn.textContent = "➕ Add Task";  
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

// Add hover effect
addBtn.addEventListener("mouseenter", () => {
  addBtn.style.backgroundColor = "#145237";  
});
addBtn.addEventListener("mouseleave", () => {
  addBtn.style.backgroundColor = "#1c6c46";  
});
mainRoot.appendChild(addBtn);  

// Task list container
const myTasksDiv = document.createElement("div");
Object.assign(myTasksDiv.style, {
  marginTop: "30px" 
});
mainRoot.appendChild(myTasksDiv);  

// Add task functionality
addBtn.addEventListener("click", function () {
 
  const task = inputTask.value.trim();

  if (task === "") {
    alert("🚨 Please enter a task!");
    return;
  }

  // Create a container div for the task item
  const taskContainer = document.createElement("div");
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

  // Create label element to hold checkbox and task text
  const label = document.createElement("label");

  // Create checkbox input 
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";         
  checkbox.style.marginRight = "10px";

  // Create span to hold task text
  const taskText = document.createElement("span");
  taskText.textContent = task;          
  Object.assign(taskText.style, {
    fontSize: "16px",                   
    color: "#2d3e34",                
    fontWeight: "500"                   
  });

  // Checkbox change event
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      // If checked, strike through text and change color to gray
      taskText.style.textDecoration = "line-through";
      taskText.style.color = "#999";
    } else {

      taskText.style.textDecoration = "none";
      taskText.style.color = "#2d3e34";
    }
  });

  // Append checkbox and task text inside the label
  label.appendChild(checkbox);
  label.appendChild(taskText);

  // Create delete button to remove task from list
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";      
  Object.assign(deleteBtn.style, {
    border: "none",                  
    fontSize: "18px",               
    cursor: "pointer"                
  });
  
  // Delete button click event
  deleteBtn.addEventListener("click", function () {
    myTasksDiv.removeChild(taskContainer);
  });

  // Append label and delete button to the task container
  taskContainer.appendChild(label);
  taskContainer.appendChild(deleteBtn);

  // Add the task container to the task list div
  myTasksDiv.appendChild(taskContainer);

  // Clear the input field after adding the task
  inputTask.value = "";
});
