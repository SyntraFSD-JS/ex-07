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
const doneBtn = document.querySelectorAll(".done-btn");

// 0/8
function createNewTodo(text) {
  // return new .box for #todo-list
  // (look at html)
  const newDiv = document.createElement('div');
  const newP = document.createElement('p');
  const newA = document.createElement('a');
  const input = todoInput.value;

  newP.textContent = input;

  newA.classList.add('done-btn', 'fas', 'fa-check-circle', 'fa-2x');

  newDiv.classList.add('box');
  newDiv.appendChild(newP);
  newDiv.appendChild(newA);
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
  todoInput.value = " ";
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
    const selectedParent = todoItem.closest('.box');
    todoItem.remove();
    const newA = document.createElement('a');
    newA.classList.add('remove-btn', 'fas', 'fa-times-circle', 'fa-2x');
    selectedParent.appendChild(newA);
    doneList.appendChild(selectedParent);
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
  if (event.target.matches(".done-btn")) {
    doneBtnClick(event.target);
  }
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
todoList.addEventListener("click", todoListClick);

clearAll();
