import './style.css';

import enterIcon from './assets/enter.png';
import binIcon from './assets/removeIcon.png';

import Tasks from './modules/Tasks.js';
import { addItem, toDoList, clearDone } from './modules/addItem.js';
import checkingItems from './modules/itemCheck.js';
import removeItem from './modules/removeItem.js';

const dataEnter = document.querySelector('.subBtn');
dataEnter.src = enterIcon;

const getItemsfromLocal = JSON.parse(localStorage.getItem('localStorageTasks'));

const listContainer = document.querySelector('.todo-list');

if (getItemsfromLocal != null) {
  listContainer.textContent = '';
  getItemsfromLocal.forEach((anItem) => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');
    itemContainer.setAttribute('id', anItem.index);

    const itemCheck = document.createElement('input');
    itemCheck.classList.add('item-check');
    itemCheck.setAttribute('type', 'checkbox');
    itemCheck.checked = anItem.completed;
    itemCheck.onclick = () => checkingItems(anItem.index);

    const itemName = document.createElement('div');
    itemName.classList.add('item-name');
    itemName.onclick = () => window.editData(anItem.index);
    itemName.textContent = anItem.description;

    const remvButton = document.createElement('button');
    remvButton.classList.add('remove-btn');
    remvButton.setAttribute('type', 'button');
    remvButton.onclick = () => removeItem(anItem.index);

    const remImg = document.createElement('img');
    remvButton.appendChild(remImg);
    remImg.src = binIcon;

    itemContainer.append(itemCheck, itemName, remvButton);
    listContainer.appendChild(itemContainer);

    const newItemLocal = new Tasks(anItem.index, anItem.description, anItem.completed);
    toDoList.push(newItemLocal);
  });
}

dataEnter.addEventListener('click', addItem);

const clearButton = document.querySelector('.btn');
clearButton.addEventListener('click', clearDone);