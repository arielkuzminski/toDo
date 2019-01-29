const form = document.querySelector('#form');
const inputEnterTask = document.querySelector('#task-input');
const list = document.querySelector('.list');
const searchInput = document.querySelector('#filter');
const clearBtn = document.querySelector('.delete-all-items');

eventsList();

function eventsList(){
  form.addEventListener('submit', addToDo);
  list.addEventListener('click', deleteToDo);
  clearBtn.addEventListener('click', clearList);
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


function deleteToDo(e){
  if(e.target.parentElement.classList.contains('link')){
    if(confirm('Remove this task?')){
      e.target.parentElement.parentElement.remove();
    }
  }
}

function clearList(){
  if(confirm('Are You sure? This will delete all Your items from the list.')){
    list.innerHTML = '';
  }
}