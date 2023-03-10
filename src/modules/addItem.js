import Tasks from './Tasks.js';

// eslint-disable-next-line import/no-mutable-exports
let id = 'no';
const toDoList = [];
const itemInput = document.querySelector('.input-todo');

const addItem = () => {
  if (id === 'no') {
    const newItemInput = new Tasks(toDoList.length + 1, itemInput.value, false);
    toDoList.push(newItemInput);
    localStorage.setItem('localStorageTasks', JSON.stringify(toDoList));
    window.location.reload();
  } else {
    const arr = JSON.parse(localStorage.getItem('localStorageTasks'));
    arr[id - 1].description = itemInput.value;
    localStorage.setItem('localStorageTasks', JSON.stringify(arr));
    window.location.reload();
  }
};

window.editData = (rid) => {
  id = rid;
  const arr1 = JSON.parse(localStorage.getItem('localStorageTasks'));
  itemInput.value = arr1[id - 1].description;
};

const clearDone = () => {
  const afterClearArray = toDoList.filter((eachItem) => eachItem.completed !== true);
  for (let i = 0; i < afterClearArray.length; i += 1) {
    afterClearArray[i].index = i + 1;
  }
  localStorage.setItem('localStorageTasks', JSON.stringify(afterClearArray));
  window.location.reload();
};

export {
  id, toDoList, itemInput, addItem, clearDone,
};