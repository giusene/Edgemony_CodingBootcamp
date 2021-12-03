import { getData, saveData } from './data.js';

const update = (event) => {
    const id = parseInte(event.target.id)
    const newData = getData().map((item) => {
        if (item.id === id) {
            return  { ...item, completed: !item.completed }
        } else {
            return item;
        }
    });

    saveData(newData);
    render(newData);
}

export const render = (data) => {
    const todos = document.querySelector('#todos');

    const items = data.map((item, index) => 
    `<li><label><input type="checkbox" id="${item.id}" ${item.completed ? 'checked' : '' } >${item.title}</label></li>`);
    todos.innerHTML = items.join('')

    // per ciclare una nodelist uso lo spread operator
    // e lo rimetto in un array con le quadre []
    // [...NodeList] ///
    const lis = [...todos.querySelectorAll('li input')];
    lis.forEach((item) => {
        item.addEventListener('click', (event) => {
        update(event);
        })
    })
}