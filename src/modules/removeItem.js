import { toDoList } from './addItem.js';

export default window.removeItem = (removeItemId) => {
  const remItemArr = toDoList.filter((eachItem) => eachItem.index !== removeItemId);
  for (let i = 0; i < remItemArr.length; i += 1) {
    remItemArr[i].index = i + 1;
  }
  localStorage.setItem('localStorageTasks', JSON.stringify(remItemArr));
  window.location.reload();
};