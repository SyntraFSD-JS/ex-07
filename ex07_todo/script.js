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
    return newDiv;

}

// 0/2
function updateTodoCount() {
  // update #todo-count
  // with number of todo items in #todo-list // moet aantal weten => .length
    var todoNumberTotal = todoList.children.length;
    return todoNumberTotal;
}

// 0/2
function updateDoneCount() {
  // update #done-count
  // with number of done items in #done-list
    var doneNumberTotal = doneList.children.length;
    return doneNumberTotal;
}

// 0/2
function updateBothCounts() {
  // update both counts
    const counts = this.value;
    //  this when function is executed by event => event.target
    //  this.value == event.target.value
    /*const todoCount = getWordCount(currentText);
    const Count = getLetterCount(currentText);*/
    updateTodoCount(todoNumberTotal);
    updateDoneCount(doneNumberTotal);
}

// 0/2
function save() {
  // save value in #todo-input
  // and make new todo item
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

clearAll();
