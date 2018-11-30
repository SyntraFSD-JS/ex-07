// 0/10
// ten points for:
// pushing regularly (every 30 minutes)
// clean code (indentation)

// 0/7
const todoInput= document.querySelector('#todo-input');
const saveBtn= document.querySelector('#save-btn');
const clearAllBtn = document.querySelector('#clear-all-btn');
const todoList = document.querySelector('#todo-list');
const todoCount=document.querySelector('#todo-count');
const doneList=document.querySelector('#done-list');
const doneCount=document.querySelector('#done-count');
``
// 0/8
function createNewTodo(text) {
  // return new .box for #todo-list
  // (look at html)

  let todoItem = document.createElement('div');

  todoItem.innerHTML=`<p>${text}</p><a class="done-btn fas fa-check-circle fa-2x"></a>`;
  todoItem.classList.add('box');

  todoList.appendChild(todoItem);
  updateTodoCount();
}


// 0/2
function updateTodoCount() {
  // update #todo-count
  // with number of todo items in #todo-list

  let toDo=todoList.querySelectorAll('.box');
  todoCount.textContent=toDo.length;
}

// 0/2
function updateDoneCount() {
  // update #done-count
  // with number of done items in #done-list

  let done =doneList.querySelectorAll('.box');
  doneCount.textContent=done.length;
}

// 0/2
function updateBothCounts() {
  // update both counts

  updateDoneCount();
  updateTodoCount();
}

// 0/2
function save() {
  // save value of #todo-input
  // and make new todo item

  let text = todoInput.value;
  createNewTodo(text);
}

// 0/4
function clearAll() {
  // empty #todo-list
  // empty #done-list

  todoList.innerHTML="";
  doneList.innerHTML="";
  updateBothCounts();
}

// 0/8
function doneBtnClick(todoItem) {
  // move todo-item to #done-list
  // (look at html)

  const todo = todoItem;
  todoItem.remove();
  doneList.appendChild(todo);
}

// 0/12
function boxClick(box) {
  // if box is .active remove active class
  // else add active class
  // only one todo-item can have the class active
  let todo= todoList.querySelectorAll('.box');

  todo.forEach(value=>{

      if(!value.classList.contains('.active') && value === box){
        value.classList.add('active');
      }
        else{
          value.classList.remove('active');
        }
    }
  );
}

// 0/12
function todoListClick(event) {
  // handle click within #todo-list
  if(event.target.matches('.done-btn')){
    const doneBtn= event.target.closest('.box');
    doneBtnClick(doneBtn);
  }
    else if(event.target.matches('.box')){
        boxClick(event.target);
    }
}

// 0/4
function removeBtnClick(doneItem) {
  // remove doneItem
  doneItem.remove();
  updateDoneCount();

}

//0/6
function doneListClick(event) {
  // handle click within #done-list
  if(event.target.matches('.remove-btn')){
    const removeBtn = event.target.closest(".box");
    removeBtnClick(removeBtn);
  }
}

// 0/8

//add eventListeners to
// saveBtn
// clearAllBtn
// todoList
// doneList

saveBtn.addEventListener('click',save);
clearAllBtn.addEventListener('click',clearAll);
todoList.addEventListener('click',todoListClick);
doneList.addEventListener('click',doneListClick);
clearAll();
