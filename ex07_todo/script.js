// /80
// 2/3
// ten points for:
// pushing regularly (every 30 minutes)
// clean code (indentation)

// 6/7
// querySelectorAll()??
const todoInput = document.querySelector('#todo-input');
const saveBtn = document.querySelector('#save-btn');
const clearAllBtn = document.querySelector('#clear-all-btn');
const todoList = document.querySelector('#todo-list');
const todoCount = document.querySelector('#todo-count');
const doneList = document.querySelector('#done-list');
const doneCount = document.querySelectorAll('#done-count');

// 7/8
// niet gereturned (niet echt fout)
// innerHtml veel korter
function createNewTodo(text) {
    // return new .box for #todo-list
    const newDiv = document.createElement('div');
    newDiv.classList.add('box');
    const par = document.createElement('p');
    par.textContent = text;
    newDiv.appendChild(par);
    const doneButton = document.createElement('a');
    doneButton.classList.add('done-btn', 'fas', 'fa-check-circle', 'fa-2x');
    newDiv.appendChild(doneButton);
    todoList.appendChild(newDiv);
}

// 2/2
function updateTodoCount() {
    // update #todo-count
    // with number of todo items in #todo-list
    const numberOfInputs = todoList.children.length;
    todoCount.textContent = numberOfInputs;
    return todoCount;
}

// 2/2
function updateDoneCount() {
    // update #done-count
    // with number of done items in #done-list
    const numberOfInputs = doneList.children.length;
    doneCount.textContent = numberOfInputs;
    return doneCount;

}

// 2/2
function updateBothCounts() {
    // update both counts
    updateTodoCount();
    updateDoneCount();

}

// 2/2
function save() {
    // save value of #todo-input
    let text = todoInput.value;
    // and make new todo item
    createNewTodo(text);
    todoInput.value = "";
    updateTodoCount();
}

// 4/4
// korter met innerHtml
function clearAll() {
    // empty #todo-list
    while (todoList.hasChildNodes()) {
        todoList.removeChild(todoList.lastChild);
    };

    // empty #done-list
    while (doneList.hasChildNodes()) {
        doneList.removeChild(doneList.lastChild);
    };
    updateBothCounts();
}

// 0.5/8
function doneBtnClick(todoItem) {
    // move todo-item to #done-list
    // (look at html)

    updateBothCounts();
}
/*

// 0/12
function boxClick(box) {
    // if box is .active remove active class
    // else add active class
    // only one todo-item can have the class active
    const box = document.querySelectorAll('.box');
    for (let i = 0; i < box.length; i++) {
        if (box.classList.contains('active')){box.classList.remove('active');

        } else {box.classList.add('active')}
    }

*/
// 1/12
    function todoListClick(event) {
        // handle click within #todo-list
        if (event.target.matches('.done-btn')) {

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

// 4/8

//add eventListeners to
// saveBtn
    saveBtn.addEventListener('click', save);
// clearAllBtn
    clearAllBtn.addEventListener('click', clearAll);
// todoList
//todoButton.addEventListener('click', todoListClick);
// doneList
//doneButton.addEventListener('click', doneBtnClick);

   clearAll();
