// 0/10
// ten points for:
// pushing regularly (every 30 minutes)
// clean code (indentation)

// 0/7
const todoInput = document.querySelector("#todo-input");
const saveBtn = document.querySelector("#save-btn");
const clearAllBtn = document.querySelector("#clear-all-btn");
const todoList = document.querySelector("#todo-list");
const todoCount = document.querySelector("#todo-count");
const doneList = document.querySelector("#done-list");
const doneCount = document.querySelector("#done-count");

// 0/8
function createNewTodo(text) {
  // return new .box for #todo-list
  // (look at html)
  const newDiv = document.createElement('div');
  const newP = document.createElement('p');
  newP.textContent = input;
  newDiv.classList.add('box');
  newDiv.appendChild(newP);
  todoList.appendChild(newDiv);
  

  console.log(newDiv);
  return newDiv;
}

// 0/2
function updateTodoCount() {
  // update #todo-count
  // with number of todo items in #todo-list
}

// 0/2
function updateDoneCount() {
  // update #done-count
  // with number of done items in #done-list
}

// 0/2
function updateBothCounts() {
  // update both counts
}

// 0/2
function save() {
  // save value in #todo-input
  // and make new todo item
  const input = todoInput.value;
  createNewTodo(input);
  return input;  
}

// 0/4
function clearAll() {
  // empty #todo-list
  // empty #done-list
}

// 0/8
function doneBtnClick(todoItem) {
  // move todo-item to #done-list
  // (look at html)
}

// 0/12
function boxClick(box) {
  // if box is .active remove active class
  // else add active class
  // only one todo-item can have the class active
}

// 0/12
function todoListClick(event) {
  // handle click within #todo-list
}

// 0/4
function removeBtnClick(doneItem) {
  // remove doneItem
}

//0/6
function doneListClick(event) {
  // handle click within #done-list
}

// 0/8

//add eventListeners to
// saveBtn
// clearAllBtn
// todoList
// doneList

saveBtn.addEventListener("click", save);

clearAll();
