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
const doneCount = document.querySelector('#done-count');

// 0/8
function createNewTodo(textVal) {
  // return new .box for #todo-list
  //creates div with class box
  const newBox = document.createElement('div');
  newBox.classList.add('box');
  //create the <p> element with text
  let textBox = document.createElement('p');
  textBox.textContent = textVal;
  newBox.appendChild(textBox);
  //create the <a> element
  newBox.innerHTML += '<a class="done-btn fas fa-check-circle fa-2x"></a>';
  //add all new items to the todoList
  todoList.appendChild(newBox);
}

// 0/2
function updateTodoCount() {
  // update #todo-count
  todoCount.textContent = todoList.childElementCount;
  // with number of todo items in #todo-list
}

// 0/2
function updateDoneCount() {
  // update #done-count
  doneCount.innerHTML = doneList.childElementCount;
  // with number of done items in #done-list
}

// 0/2
function updateBothCounts() {
  // update both counts
  doneCount.innerHTML = doneList.childElementCount;
  todoCount.textContent = todoList.childElementCount;
}

// 0/2
function save(todoList) {
  // save value of #todo-input
  const textVal = todoInput.value;
  // and make new todo item
  createNewTodo(textVal);
  updateTodoCount();
  todoInput.value = "";
}

// 0/4
function clearAll() {
  // empty #todo-list
  // empty #done-list
  todoList.innerHTML = '';
  doneList.innerHTML = '';
  updateBothCounts();

}

// 0/8
function doneBtnClick(todoItem) {
  // move todo-item to #done-list
  const checked = todoItem;
  checked.classList.remove('done-btn', 'fa-check-circle');
  //checked.classList.remove('.fa-check-circle');
  checked.classList.add('remove-btn','fa-times-circle');
  const check = todoItem.closest('.box');
  doneList.appendChild(check);
  
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
  if (event.target.matches('.done-btn')) {
    doneBtnClick(event.target);
    updateBothCounts();
  }
}

// 0/4
function removeBtnClick(doneItem) {
  // remove doneItem
  const removed = doneItem.closest('.box');
  removed.remove();
}

//0/6
function doneListClick(event) {
  // handle click within #done-list
  if (event.target.matches('.remove-btn')){
    removeBtnClick(event.target);
    updateBothCounts();
  }   
}

// 0/8

//add eventListeners to
// saveBtn
saveBtn.addEventListener('click', save);
// clearAllBtn
clearAllBtn.addEventListener('click', clearAll);
// todoList
todoList.addEventListener('click', todoListClick);
// doneList
doneList.addEventListener('click', doneListClick);

clearAll();
updateTodoCount();
updateDoneCount();
