const form = document.querySelector('#form');
const inputEnterTask = document.querySelector('#task-input');
const list = document.querySelector('.list');
const searchInput = document.querySelector('#filter');
const clearBtn = document.querySelector('.delete-all-items');

eventsList();

function eventsList(){
  form.addEventListener('submit', addToDo);
}

function addToDo(e){
  if(inputEnterTask.value === ''){
    alert('You forgot to add a task');
  } else {
    const li = document.createElement('li');
    li.className = 'item';
    li.appendChild(document.createTextNode(inputEnterTask.value));

    const x = document.createElement('a');
    x.className = 'link';
    x.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(x);
    list.appendChild(li);

    inputEnterTask.value = '';
  }

  e.preventDefault();
}