import { getData, saveData } from './data.js';
import { getDataFun } from './getdata.js';
import { postDataFun } from './getdata.js'
import { API } from './index.js';

const update = (event) => {
    const id = parseInt(event.target.id)
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

const form = document.querySelector('#add_todo');
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const newTodo = {
        title: event.target.title.value,
        completed: false,
        expires: event.target.expires.value,
    }
    postDataFun(newTodo)
    form.reset()

    getDataFun()
})


