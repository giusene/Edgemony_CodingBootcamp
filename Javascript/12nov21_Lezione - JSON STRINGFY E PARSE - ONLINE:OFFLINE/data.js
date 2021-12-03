// stringify prende un array e/o oggetti e li strasforma in una stringa
// in maniera corretta
export const saveData = (data) => {
    const str = JSON.stringify(data);
    localStorage.setItem('data', str)
}

// parse è il contrario di stringify
export const getData = () => {
    const value = localStorage.getItem('data') || '';
    return JSON.parse(value);
}