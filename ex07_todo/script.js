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

// 6.5/8
// Parameter not used
// Don't forget innerHtml, easier and less code
// Unnecessary line breaks
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

// 2/2
// Nice
function updateTodoCount() {
  // update #todo-count
  // with number of todo items in #todo-list
  todoCount.innerHTML = todoList.childElementCount;
}

// 2/2
function updateDoneCount() {
  // update #done-count
  // with number of done items in #done-list
  doneCount.innerHTML = doneList.childElementCount;
}

// 2/2
function updateBothCounts() {
  // update both counts
  updateTodoCount();
  updateDoneCount();
}

// 1.5/2
// Why the space in todoInput.value?
// Unnecessary return
function save() {
  // save value in #todo-input
  // and make new todo item
  const input = todoInput.value;
  createNewTodo(input);
  todoInput.value = " ";
  updateBothCounts();
  return input;  
}

// 4/4
function clearAll() {
  // empty #todo-list
  // empty #done-list
  todoList.innerHTML = '';
  doneList.innerHTML= '';
  updateBothCounts();
}

// 8/8
function doneBtnClick(todoItem) {
  // move todo-item to #done-list
  // (look at html)
    const selectedParent = todoItem.closest('.box');
    todoItem.remove();

    const newA = document.createElement('a');
    newA.classList.add('remove-btn', 'fas', 'fa-times-circle', 'fa-2x');
    selectedParent.appendChild(newA);
    doneList.appendChild(selectedParent);

    updateBothCounts();
}

// 10.5/12
// code style (else on the same line as })
// forgot ;
function boxClick(box) {
  // if box is .active remove active class
  // else add active class
  // only one todo-item can have the class active

  if (box.matches(".active"))  {
    box.classList.remove("active");
  }
  else {
    const todoBox = document.querySelectorAll("#todo-list .box");
    
    todoBox.forEach ( function(box) {
      box.classList.remove("active");
    })
    box.classList.add("active");
  }
}

// 11.5/12
// code style (else on the same line as })
function todoListClick(event) {
  // handle click within #todo-list
  if (event.target.matches(".done-btn")) {
    doneBtnClick(event.target);
  }
  else if (event.target.matches(".box")  || event.target.matches(".box p")) {
    boxClick(event.target.closest(".box"));
    console.log('boxClick');
  }

}

// 4/4
function removeBtnClick(doneItem) {
  // remove doneItem
  const selectedParent = doneItem.closest('.box');
  selectedParent.remove();

  updateBothCounts();
}

// 6/6
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
todoList.addEventListener("click", todoListClick);
clearAllBtn.addEventListener("click", clearAll);
doneList.addEventListener("click", doneListClick);

clearAll();
