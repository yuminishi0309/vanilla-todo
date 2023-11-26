const inputText = document.querySelector('#input-text');
const inputButton = document.querySelector('#input-button');
const list = document.querySelector('#list');

const addTasks = (task) => {
    const value = inputText.value
    if (!value) return
    const listItem = document.createElement('li');
    const showItem = list.appendChild(listItem);
    showItem.innerHTML = task;
};

inputButton.addEventListener('click', evt =>{
    evt.preventDefault();
    const task = inputText.value;
    addTasks(task);
    inputText.value = '';


});