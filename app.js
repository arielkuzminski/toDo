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
  searchInput.addEventListener('keyup', searchToDo);
}

function addToDo(e){
  if(inputEnterTask.value === ''){
    alert('You forgot to add a task');
  } else {
    const box = document.createElement('input');
    box.setAttribute('type', 'checkbox');
    box.className = 'checkbox';

    const li = document.createElement('li');
    li.className = 'item';
    li.appendChild(box);
    li.appendChild(document.createTextNode(inputEnterTask.value));

    const x = document.createElement('a');
    x.className = 'link';
    x.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(x);
    list.appendChild(li);

    box.addEventListener('click', checkTask);

    function checkTask(){
      if(this.checked){
        li.style = 'background: #9FEE1F;';
        li.style.textDecoration="line-through";
      } else {
        li.style = 'background: #F8F6FA;';
      }
    }

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

function searchToDo(e){
  const search = e.target.value.toLowerCase();
  
  document.querySelectorAll('.item').forEach(function(item) {
    const task = item.parentElement.textContent;

    if(task.toLowerCase().indexOf(search) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}