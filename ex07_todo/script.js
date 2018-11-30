// 0/10
// ten points for:
// pushing regularly (every 30 minutes)
// clean code (indentation)

// 0/7
const todoInput = document.querySelector('#todo-input');
const saveBtn = document.querySelector('#save-btn');
const clearAllBtn = document.querySelector('#clear-all-btn');
const todoList = document.querySelector('#todo-list');
const todoCount = document.querySelector('#todo-count');
const doneList = document.querySelector('#done-list');
const doneCount = document.querySelectorAll('#done-count');

// 0/8
function createNewTodo(text) {
  // return new .box for #todo-list
  const newDiv = document.createElement('div');
  newDiv.classList.add('box');
  todoList.appendChild(newDiv);
  const par = document.createElement('p');
  newDiv.appendChild(par);
  newDiv.querySelector("p").textContent = text;
  return par;
}
// 0/2
function updateTodoCount(todoCount) {
  // update #todo-count
  // with number of todo items in #todo-list
  const numberOfInputs = todoList.children.length;
  todoCount.textContent = numberOfInputs;
  return todoCount;
}

// 0/2
function updateDoneCount(doneCount) {
  // update #done-count
  // with number of done items in #done-list
  const numberOfInputs = doneList.children.length;
  doneCount.textContent = numberOfInputs;
  return doneCount;

}

// 0/2
function updateBothCounts() {
  // update both counts
  updateTodoCount();
  updateDoneCount();

}

// 0/2
function save() {
  // save value of #todo-input
  let text = todoInput.textContent;
  // and make new todo item
  createNewTodo(text);
  todoInput.value = "";
}

// 0/4
function clearAll() {
  // empty #todo-list
  while (todoList.hasChildNodes()) {
    todoList.removeChild(todoList.lastChild);
  };

  // empty #done-list
  while (doneList.hasChildNodes()) {
    doneList.removeChild(doneList.lastChild);
  };
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
saveBtn.addEventListener('click', save);
// clearAllBtn
clearAllBtn.addEventListener('click', clearAll);
// todoList

// doneList
doneButton.addEventListener('click', doneBtnClick);

clearAll();
