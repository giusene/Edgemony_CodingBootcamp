/**
 * COMMENTO CHE SPIEGA IL CODICE
 */
const q = (selector) => document.querySelector(selector);

const render = (container, items) => {
    
    const elements = items.map((element, index) => {
        // metodo vecchio
        // return element.name + ', ' + element.phone + ', ' + element.email;

        // col backtip è una template string
        // e si puo andare tranquillamente a capo
        return `<li>
        <h3>${element.name}</h3>
        <p><strong>Phone: </strong><a href="tel:${element.phone}">${element.phone}</a></p>
        <p><strong>Email: </strong><a href="mailto:${element.email}">${element.email}</a></p>
        </li>`;
    });

    const content = elements.join('');

    container.innerHTML = content;
}

// AVVIAMO UN EVENTO DI SICUREZZA
// PER CONTROLLARE CHE TUTTO IL DOM SIA STATO CARICATO


document.addEventListener('DOMContentLoaded', () => {
    const form = q('form');
    const input = q('form input');
    const list = q('ul');
    const sortAZ = q('#sort-az'); 
    const sortZA = q('#sort-za'); 

    render(list, data);

    // ricerca con submit
    // si aggancia al form
    form.addEventListener('submit', (event) => {
        // evita di effettuare l'azione di default
        event.preventDefault();
        const value = input.value.toLowerCase();


        // a filter serve una callback come paramentro
        const result = data.filter((element, index) => {
            // search se trova da l'indice se non lo trova da -1
            // attenzione al case sensitive
            // lo possiamo concatenare solo se ritorna qualcosa
            return element.name.toLowerCase().search(value) > -1 
        });


        render(list, result);
    })

    // ricerca realtime
    // si aggancia ad input
    input.addEventListener('keyup', (event) => {
        const value = input.value.toLowerCase();

        const result = data.filter((element) => 
            element.name.toLowerCase().search(value) > -1 )


        render(list, result);
    });

    // ordine alfabetico
    sortAZ.addEventListener('click', (event) => {
        const result = data.sort((a, b) => (a.name > b.name) ? 1 : -1)
       
        render(list, result);
    });

    sortZA.addEventListener('click', (event) => {
        const result = data.sort((a, b) => (a.name < b.name) ? 1 : -1)
       
        render(list, result);
    });



});