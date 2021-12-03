import { getDataFun } from './getdata.js'

const connectionAlert = () => {
    const isOnline = window.navigator.onLine
    const connection = document.querySelector('#connection');
    connection.textContent = isOnline ? 'online' : 'offline'
}

// window.navigator da informazioni dal browser
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('online', connectionAlert);
    window.addEventListener('offline', connectionAlert);
    
    getDataFun()
});

export const API = ' https://edgemony-backend.herokuapp.com/todos';