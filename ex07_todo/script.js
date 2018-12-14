// /80
// 2.5/3
// lijn 16 ????
// ten points for:
// pushing regularly (every 30 minutes)
// clean code (indentation)

// 7/7
const todoInput= document.querySelector('#todo-input');
const saveBtn= document.querySelector('#save-btn');
const clearAllBtn = document.querySelector('#clear-all-btn');
const todoList = document.querySelector('#todo-list');
const todoCount=document.querySelector('#todo-count');
const doneList=document.querySelector('#done-list');
const doneCount=document.querySelector('#done-count');
``
// 8/8
function createNewTodo(text) {
  // return new .box for #todo-list
  // (look at html)

  const todoItem = document.createElement('div');

  todoItem.innerHTML=`<p>${text}</p><a class="done-btn fas fa-check-circle fa-2x"></a>`;
  todoItem.classList.add('box');

  todoList.appendChild(todoItem);
  updateTodoCount();
}


// 2/2
function updateTodoCount() {
  // update #todo-count
  // with number of todo items in #todo-list

  const toDo=todoList.querySelectorAll('.box');
  todoCount.textContent=toDo.length;
}

// 2/2
function updateDoneCount() {
  // update #done-count
  // with number of done items in #done-list

  const done =doneList.querySelectorAll('.box');
  doneCount.textContent=done.length;
}

// 2/2
function updateBothCounts() {
  // update both counts

  updateDoneCount();
  updateTodoCount();
}

// 2/2
function save() {
  // save value of #todo-input
  // and make new todo item

  const text = todoInput.value;
  todoInput.value='';
  createNewTodo(text);
}

// 4/4
function clearAll() {
  // empty #todo-list
  // empty #done-list

  todoList.innerHTML="";
  doneList.innerHTML="";
  updateBothCounts();
}

// 6/8
// vergeten font-awesome class te wijzigen
function doneBtnClick(todoItem) {
  // move todo-item to #done-list
  // (look at html)

  const todo = todoItem;
  todo.classList.remove('active');

  const a = todo.querySelector('.done-btn');
  a.classList.remove('done-btn');
  a.classList.add('remove-btn');

  todoItem.remove();
  doneList.appendChild(todo);
  updateBothCounts();
}

// 12/12
function boxClick(box) {
  // if box is .active remove active class
  // else add active class
  // only one todo-item can have the class active
  const todo= todoList.querySelectorAll('.box');

  todo.forEach(value=>{

      if(value === box){

        value.classList.toggle('active');
      }
        else{

          value.classList.remove('active');
        }
    }
  );
}

// 12/12
function todoListClick(event) {
  // handle click within #todo-list
  if(event.target.matches('.done-btn')){

    const doneBtn= event.target.closest('.box');
    doneBtnClick(doneBtn);
  }
    else if(event.target.matches('.box p') || event.target.matches('.box')){

      const box = event.target.closest('.box');
      boxClick(box);
    }
  
}

// 4/4
function removeBtnClick(doneItem) {
  // remove doneItem
  doneItem.remove();
  updateDoneCount();

}

//6/6
function doneListClick(event) {
  // handle click within #done-list
  if(event.target.matches('.remove-btn')){

    const removeBtn = event.target.closest(".box");
    removeBtnClick(removeBtn);
  }
}

// 8/8

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
