import { API } from './utils.js';
import { List } from './list.js';
import { Add } from './add.js';

const loadList = () => {
    fetch(API)
    .then((response)=> {
        // GESTIRE GLI ERRORI
        if (response.status === 404) {
            console.error('errore!!!');
            document.querySelector('.alert').classList.add('show')
        } else {
            return response.json()
        }
    })
    .then((data) => List(data));
}

document.addEventListener('DOMContentLoaded', loadList);

window.addEventListener('hashchange', () => {
    switch(location.hash) {
        case '#add':
            Add();
            break;
        case '':
            loadList();
            break;
    }
})