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
  itemInput.value = arr1[rid - 1].description;
};

export {
  id, toDoList, itemInput, addItem,
};