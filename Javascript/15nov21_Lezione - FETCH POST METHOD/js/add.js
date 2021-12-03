import { render, API } from './utils.js'

const Add = () => {
    const container = document.querySelector('#container')

    render(container, `<div>
    <h3>Aggiungi una nova scheda</h3>
    <form id="create">
        <div class="row">
            <label for="title">Titolo:</label>
            <input type="text" id="title" name="title" />
        </div>
        <div class="row">
            <label for="poster">Poster:</label>
            <input type="text" id="poster" name="poster" />
        </div>
        <div class="row">
            <label for="year">Anno:</label>
            <input type="number" min="1900" value="2021" id="year" name="year" />
        </div>
        <div class="row">
            <label for="description">Trama:</label>
            <textarea id="description" name="description" /></textarea>
        </div>

        <button>Salva Scheda</button>
    </form>
    </div>`);

    const form = document.querySelector('#create');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const movie = {
            title: event.target.title.value,
            poster: event.target.poster.value,
            year: parseInt(event.target.year.value),
            description: event.target.description.value   
        };

        console.log(movie)

        // per fecth il secondo parametro è un oggetto
        // standard è get
        fecth(API, {
            method: "POST",
            // HEADERS (che è un oggetto) contiente informazioni per il server
            headers: {
                // sto inviando un json
                "Content-Type": "application/json"
            },
            // BODY è cosa vuoi inviare... nel nostro caso l'oggetto movie
            // lo trasformiamo in json
            body: JSON.stringify(movie)
        })
    })
}

export { Add }