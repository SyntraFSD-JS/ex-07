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
function createNewTodo(text) {
    // return new .box for #todo-list
    // (look at html)
    const newBox = document.createElement('div');
    newBox.innerHTML=`<p>${text}</p><a class="done-btn fas fa-check-circle fa-2x"></a>`;
    newBox.classList.add('box');
    todoList.appendChild(newBox);
    updateTodoCount();
}

// 0/2
function updateTodoCount() {
    // update #todo-count
    // with number of todo items in #todo-list
    const numberOfTodoCount = todoList.children.length;
    todoCount.textContent = numberOfTodoCount;
}

// 0/2
function updateDoneCount() {
    // update #done-count
    // with number of done items in #done-list
    const numberOfDoneCount = doneList.children.length;
    doneCount.textContent = numberOfDoneCount;
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
    // and make new todo item
    const todoInputValue = todoInput.value;
    createNewTodo(todoInputValue);
    updateBothCounts(todoInputValue);
    todoInput.value = "";
}

// 0/4
function clearAll() {
    // empty #todo-list
    // empty #done-list
    const box = document.querySelectorAll('.box');
        box.forEach(element => {
            element.remove();
    });
    updateBothCounts();
}

// 0/8
function doneBtnClick(todoItem) {
    // move todo-item to #done-list
    // (look at html)
    const a = todoItem.querySelector('.done-btn');
    a.classList.remove('done-btn','fa-check-circle');
    a.classList.add('remove-btn','fa-times-circle');
    todoItem.remove();
    doneList.appendChild(todoItem);
}

// 0/12
function boxClick(box) {
    // if box is .active remove active class
    // else add active class
    // only one todo-item can have the class active
    todoList.forEach(value => {
        
    });

}

// 0/12
function todoListClick(event) {
    // handle click within #todo-list
    if(event.target.matches('.done-btn')){
        const doneButton= event.target.closest('.box');
        doneBtnClick(doneButton);
      }
    updateBothCounts();
}

// 0/4
function removeBtnClick(doneItem) {
  // remove doneItem
  doneItem.remove();
}

//0/6
function doneListClick(event) {
    // handle click within #done-list
    if(event.target.matches('.remove-btn')){
        const removeButton= event.target.closest('.box');
        removeBtnClick(removeButton);
    }
    updateBothCounts();
}

// 0/8

//add eventListeners to
// saveBtn
// clearAllBtn
// todoList
// doneList

saveBtn.addEventListener(('click'), save);
clearAllBtn.addEventListener(('click'), clearAll);
todoList.addEventListener(('click'), todoListClick);
doneList.addEventListener(('click'), doneListClick);

clearAll();