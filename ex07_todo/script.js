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
    const newDiv = document.createElement('div');
    newDiv.classList.add('box');
    // newDiv.classList.add('done-btn fas fa-check-circle fa-2x');
    var newT = todoInput.value;
    newDiv.innerHTML = newT;
    // newDiv.innerHTML = <a class="done-btn fas fa-check-circle fa-2x"></a>;
    // newDiv.classList.add('done-btn fas fa-check-circle fa-2x');
    todoList.appendChild(newDiv);

    return newDiv;
}

// 0/2
function updateTodoCount() {
  // update #todo-count
  // with number of todo items in #todo-list // moet aantal weten => .length
    var newTotalTodo =  todoList.children.length;
    todoCount.textContent = newTotalTodo;

}

// 0/2
function updateDoneCount() {
  // update #done-count  //   var todoNumberTotal = todoList.children.length;
  // with number of done items in #done-list
    var newTotalDone = doneList.children.length;
    doneList.textcontent = newTotalDone;

}

// 0/2
function updateBothCounts() {
  // update both counts
    updateTodoCount(newTotalTodo);
    updateDoneCount(newTotalDone);
}

// 0/2
function save() {
  // save value in #todo-input
  // and make new todo item
    //wat moet je saven? de todoInput (al gedefineerd)
    //waar? method appendChild
    //createNewTodo
    const newText = todoInput.value;
    createNewTodo(newText);
    updateTodoCount();
}

// 0/4
function clearAll() {
  // empty #todo-list
  // empty #done-list

    todoList.innerHTML = '';
    doneList.innerHTML = '';
    updateTodoCount();
    updateDoneCount();

}

// 0/8
function doneBtnClick(item) {
    // move todo-item to #done-list
    // (look at html)

    const box = item.closest('.box');
        doneList.appendChild(item);
        updateDoneCount();

}

// 0/12
function boxClick(box) {
  // if box is .active remove active class
  // else add active class
  // only one todo-item can have the class active

    for(let i = 0; i < todoList.children.length; i++) {
        const todoItem = todoList.children[i];
        if (parseInt(todoItem.dataset.index) === index) {
            todoItem.classList.add('active');
        } else {
            todoItem.classList.remove('active');
        }
    }
}

// 0/12
function todoListClick(event) {
  // handle click within #todo-list
    if (event.target.matches('.done-btn')) {
        doneListClick(event.target);
    }

}

// 0/4
function removeBtnClick(doneItem) {
  // remove doneItem
}

//0/6
function doneListClick(event) {
  // handle click within #done-list
    if (event.target.matches('.remove-btn')) {
        doneListClick(event.target);
    }
}

// 0/8

//add eventListeners to
saveBtn.addEventListener('click', save);
clearAllBtn.addEventListener('click', clearAll);
todoList.addEventListener('click', todoListClick);
doneList.addEventListener('click', doneListClick);


