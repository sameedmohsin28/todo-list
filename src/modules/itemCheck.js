import { toDoList } from './addItem.js';

export default window.checkingItems = (itemIdForCheck) => {
  let checkStatus = toDoList[itemIdForCheck - 1].completed;
  if (checkStatus) {
    checkStatus = false;
  } else {
    checkStatus = true;
  }
  toDoList[itemIdForCheck - 1].completed = checkStatus;
  localStorage.setItem('localStorageTasks', JSON.stringify(toDoList));
};