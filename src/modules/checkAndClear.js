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

export const clearDone = () => {
  const afterClearArray = toDoList.filter((eachItem) => eachItem.completed !== true);
  for (let i = 0; i < afterClearArray.length; i += 1) {
    afterClearArray[i].index = i + 1;
  }
  localStorage.setItem('localStorageTasks', JSON.stringify(afterClearArray));
  window.location.reload();
};