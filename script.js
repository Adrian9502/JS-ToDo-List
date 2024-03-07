//create array of objects to store the tasks and dates
const todoList = [{ task: "", date: "" }];

renderToDoList();

function renderToDoList() {
  // empty string to store the generated html
  let todoListHTML = "";
  // loop through the todoList array
  for (let i = 0; i < todoList.length; i++) {
    // Extract task and date from the current todo object
    const todoObject = todoList[i];
    const { task, date } = todoObject;
    // check if the input is not empty before generating the html
    if (task !== "" || date !== "") {
      // creating the html for the current todo item
      const html = `
      <div>${i}. ${task}</div>
      <div>${date}</div>
      <button class="delete-button"onclick="todoList.splice(${i},1); renderToDoList();">
        Delete
      </button>
        `;
      // append or add the HTML to the todoListHTML string variable
      todoListHTML += html;
    }
  }
  //get the element of html where to store the generated html and show it in the page
  document.getElementById("todo-container").innerHTML = todoListHTML;
}

function addToDo() {
  //get the input elements and their value
  const inputElement = document.getElementById("task-input");
  const newTask = inputElement.value;
  const dateElement = document.getElementById("date-input");
  const date = dateElement.value;
  // check if the input value is not empty then add it to the todo list array
  if (newTask != "" && date != "") {
    todoList.push({ task: newTask, date: date });
  //reset the value of the input text after it added to the array
    inputElement.value = "";
  //regenerate the renderToDoList function the refresh the data
    renderToDoList();
    // if the input elements are empty, alert window will pop up
  } else alert("Error : Empty Input");
}
