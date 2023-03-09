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
  listContainer.textContent = '';
  getItemsfromLocal.forEach((anItem) => {
    // const funcParam = anItem.index

    const itemContainer = document.createElement('div')
    itemContainer.classList.add('item-container');
    itemContainer.setAttribute('id', anItem.index);
    
    const itemCheck = document.createElement('input');
    itemCheck.classList.add('item-check');
    itemCheck.setAttribute('type', 'checkbox')

    const itemName = document.createElement('div');
    itemName.classList.add('item-name');
    itemName.setAttribute('onclick', 'editData(anItem.index)');
    itemName.textContent = anItem.description;

    const remvButton = document.createElement('button');
    remvButton.classList.add('remove-button');
    remvButton.setAttribute('type', 'button');
    remvButton.setAttribute('onclick', 'removeItem(anItem.index)');
    remvButton.textContent = 'Remove';

    itemContainer.append(itemCheck, itemName, remvButton);
    listContainer.appendChild(itemContainer);
    
    const newItemLocal = new Tasks(anItem.index, anItem.description, anItem.completed);
    if (anItem.completed) {
      itemCheck.setAttribute('checked', '')
    }
    toDoList.push(newItemLocal);
  });
}

dataEnter.addEventListener('click', addItem);
