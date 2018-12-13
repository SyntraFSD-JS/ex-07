// 61/80
// 8/10
// ten points for:
// pushing regularly (every 30 minutes)
// clean code (indentation)

// 7/7
const todoInput = document.querySelector('#todo-input');
const saveBtn = document.querySelector('#save-btn');
const clearAllBtn = document.querySelector('#clear-all-btn');
const todoList = document.querySelector ('#todo-list');
const todoCount = document.querySelector ('#todo-count');
const doneList = document.querySelector ('#done-list');
const doneCount = document.querySelector ('#done-count');

// 8/8
function createNewTodo(text) {
  // return new .box for #todo-list
  // (look at html)
  const newDiv = document.createElement('div');
  newDiv.classList.add('box');
  newDiv.innerHTML= '<p>' + text + '</p>';
  newDiv.innerHTML += '<a class="done-btn fas fa-check-circle fa-2x"></a>';
  return newDiv;
}

// 2/2
function updateTodoCount() {
  const todolistcounter = todoList.querySelectorAll('.box');
  todoCount.textContent = todolistcounter.length;
  // update #todo-count
  // with number of todo items in #todo-list
}

// 2/2
function updateDoneCount() {
  const donecounter = doneList.querySelectorAll('.box');
  doneCount.textContent = donecounter.length;
  // update #done-count
  // with number of done items in #done-list
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
  let inputText = todoInput.value;
  const newDiv = createNewTodo(inputText);
  todoList.appendChild(newDiv);
  todoInput.value = '';
  updateBothCounts();
}

// 3.5/4
// remember innerHtml
function clearAll() {
  const clearboxes = document.querySelectorAll('.box');
  for(let i=0;i<clearboxes.length;i++){
    let clearbox = clearboxes[i];
    clearbox.remove();
  }
  updateBothCounts();
  // empty #todo-list
  // empty #done-list
}

// 4.5/8
// todoItemParent heeft geen 'done-btn', 'fa-check-circle' classes
// de knop heeft dus dubbele classes (zie inspect element)
function doneBtnClick(todoItem) {
  // move todo-item to #done-list
  // (look at html)
  let todoItemParent = todoItem.closest('.box');
  todoItemParent.classList.remove('done-btn','fa-check-circle');
  todoItem.classList.add('remove-btn','fa-times-circle');
  doneList.appendChild(todoItemParent);
}

// 0/12
function boxClick(box) {
  // if box is .active remove active class
  // else add active class
  // only one todo-item can have the class active
  /* listDiv = todoList.queryselectorAll('.active');
  for (let i=0; i < listDiv.length; i++ )
    


  if (box.target.matches('.active')){
    box.classList.remove('active');
  }
  else {
    box.classList.add('active')  ;
  }*/
}

// 5/12
function todoListClick(event) {
  // handle click within #todo-list
  if(event.target.matches('.done-btn')){
    doneBtnClick(event.target);
    updateBothCounts();
  }
}

// 4/4
function removeBtnClick(doneItem) {
  // remove doneItem
  let removeParent = doneItem.closest('.box');
  removeParent.remove();
}

//6/6
function doneListClick(event) {
  // handle click within #done-list`
  if(event.target.matches('.remove-btn')){
    removeBtnClick(event.target);
    updateBothCounts(); 
  }
}

// 7/8
// dubbele event listener op todoList niet nodig

//add eventListeners to
// saveBtn
// clearAllBtn
// todoList
// doneList
saveBtn.addEventListener('click',save);
clearAllBtn.addEventListener('click',clearAll);
todoList.addEventListener('click',todoListClick);
doneList.addEventListener('click',doneListClick);
todoList.addEventListener('click',boxClick);
clearAll();
