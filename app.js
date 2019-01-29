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
  console.log('dupa');

  e.preventDefault();
}