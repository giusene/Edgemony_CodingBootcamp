import { render } from './render.js'
import { getData, saveData } from './data.js';

const connectionAlert = () => {
    const isOnline = window.navigator.onLine
    const connection = document.querySelector('#connection');
    connection.textContent = isOnline ? 'online' : 'offline'
}

// window.navigator da informazioni dal browser
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('online', connectionAlert);
    window.addEventListener('offline', connectionAlert);

    const API = 'https://jsonplaceholder.typicode.com/todos';
    fetch(API)
        .then(response => response.json())
        .then((data) => data.filter((item, index) => index < 20))
        .then((data) => saveData(data))
        .then(() => {
            render(getData());
        })
});


