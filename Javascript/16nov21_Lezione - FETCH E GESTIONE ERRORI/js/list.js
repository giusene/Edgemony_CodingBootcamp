import { render } from "./utils.js";
import { API } from "./utils.js"
const List = (data) => {
    const elements = data.map(item => `<li>${item.title} - ${item.year} <button class="delete" id="${item.id}">x</button></li>`)
    .join('');

    const container = document.querySelector('#container');
    render(container, `<p>Elenco schede film</p>
    <ul>${elements}</ul>
    <a href="#add" id="add">Aggiungi una nuova scheda</a>`);

    const btns = [...document.querySelectorAll('.delete')];
    btns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            const id = parseInt(event.target.id);
            const filtered = data.filter( (movie) => movie.id !== id );
            //possiamo subito renderizzare List con la lista filtrata
            // dall'id che abbiamo appena eliminato
            // potremmo creare uno stato intermedio ed aspettare
            // la risposta del server 
            List(filtered);


            fetch(`${API}/${id}`, { method: 'DELETE' })
                .then(response => response.json())
                //oppure mandarlo alla risponsta del server
                .then(() => List(filtered));
        }, {once: true})
    })
}

export { List };