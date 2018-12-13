// 74.5/80
// 10/10
// ten points for:
// pushing regularly (every 30 minutes)
// clean code (indentation)

// 7/7
const todoInput = document.querySelector("#todo-input");
const saveBtn = document.querySelector("#save-btn");
const clearAllBtn = document.querySelector("#clear-all-btn");
const todoList = document.querySelector("#todo-list");
const todoCount = document.querySelector("#todo-count");
const doneList = document.querySelector("#done-list");
const doneCount = document.querySelector("#done-count");

// 7/8
// parameter niet gebruikt, tenminste verwijderen
// en zeker niet invullen bij gebruik
function createNewTodo(text) {
    // return new .box for #todo-list
    // (look at html)
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.innerHTML = '<p>' + todoInput.value + '</p> <a class="done-btn fas fa-check-circle fa-2x"></a>';

    return newBox;
}

// 2/2
function updateTodoCount() {
    // update #todo-count
    // with number of todo items in #todo-list
    const todoCounter = todoList.children.length;
    todoCount.innerHTML = todoCounter;
}

// 2/2
function updateDoneCount() {
    // update #done-count
    // with number of done items in #done-list
    const doneCounter = doneList.children.length;
    doneCount.innerHTML = doneCounter;

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
    // and make new todo item
    let addItem = createNewTodo(todoInput);
    todoInput.value = '';
    todoList.appendChild(addItem);
    updateBothCounts();

}

// 4/4
function clearAll() {
    // empty #todo-list
    // empty #done-list
    todoList.innerHTML = '';
    doneList.innerHTML = '';
    updateBothCounts();
}

// 5/8
// todoInput.value is hier niet van toepassing
function doneBtnClick(todoItem) {
    // move todo-item to #done-list
    // (look at html)
    const todoItemParent = todoItem.closest('.box');
    doneList.appendChild(todoItemParent);
    todoItemParent.innerHTML = todoInput.value + '<a class="remove-btn fas fa-times-circle fa-2x"></a>';
    updateBothCounts();
}

// 11.5/12
// ik zie toch liever foreach
function boxClick(box) {
    // if box is .active remove active class
    // else add active class
    // only one todo-item can have the class active

    if (box.matches(".active")) {
        box.classList.remove("active");
    } else {
        for (let i = 0; i < todoList.children.length; i++) {
            const boxItem = todoList.children[i];
            boxItem.classList.remove("active");
        }

        box.classList.add("active");
    }
}

// 12/12
function todoListClick(event) {
    // handle click within #todo-list
    if (event.target.matches(".done-btn")) {
        doneBtnClick(event.target);
    } else if (event.target.matches(".box")  || (event.target.matches("p"))) {
        const todoItemParent = event.target.closest('.box');
        boxClick(todoItemParent);
    }
}

// 4/4
function removeBtnClick(doneItem) {
    // remove doneItem
    const doneItemParent = doneItem.closest('.box');
    doneItemParent.remove();
    updateBothCounts();
}

//6/6
function doneListClick(event) {
    // handle click within #done-list
    if (event.target.matches(".remove-btn")) {
        removeBtnClick(event.target);
    }
}

// 8/8

//add eventListeners to
// saveBtn
// clearAllBtn
// todoList
// doneList

saveBtn.addEventListener("click", save);

clearAllBtn.addEventListener("click", clearAll);

todoList.addEventListener("click", todoListClick);

doneList.addEventListener("click", doneListClick);

clearAll();
