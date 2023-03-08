import './style.css';

import enterIcon from './assets/enter.png';
// import binIcon from './assets/removeIcon.png'

import Tasks from './modules/Tasks.js';
import { addItem, toDoList } from './modules/addItem.js';
// eslint-disable-next-line no-unused-vars
import removeItem from './modules/removeItem.js';

const dataEnter = document.querySelector('.subBtn');
dataEnter.src = enterIcon;

const getItemsfromLocal = JSON.parse(localStorage.getItem('localStorageTasks'));

const listContainer = document.querySelector('.todo-list');

if (getItemsfromLocal != null) {
  getItemsfromLocal.forEach((anItem) => {
    listContainer.innerHTML += `
    <div class="item-container" id="${anItem.index}">
      <div class="item-name" onclick="editData(${anItem.index})">${anItem.description}</div>
      <button type="button" class="remove-btn" onclick="removeItem(${anItem.index})">Remove</button>
    </div>
    `;
    const newItemLocal = new Tasks(anItem.index, anItem.description, anItem.completed);
    toDoList.push(newItemLocal);
  });
}

dataEnter.addEventListener('click', addItem);