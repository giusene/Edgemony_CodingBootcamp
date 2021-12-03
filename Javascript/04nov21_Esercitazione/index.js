/**
 * COMMENTO CHE SPIEGA IL CODICE
 */
const q = (selector) => document.querySelector(selector);

const render = (container, items) => {
    
    const elements = items.map((element, index) => {
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
    const formSearch = q('#search');
    const input = q('#input-search');
    const list = q('ul');
    const sortAZ = q('#sort-az'); 
    const sortZA = q('#sort-za'); 
    const formAdd = q('#add');


    render(list, data);

    formAdd.addEventListener('submit', (event) => {
        // evita di effettuare l'azione di default
        event.preventDefault();
        const newContact = {
            // il target dell'evento submit va a prendere l'elemento stesso
            // quindi dall'attributo name andiamo a prendere il value
            name: event.target.nome.value,
            phone: event.target.phone.value,
            email: event.target.email.value
        }

        data.push(newContact);
        // poteva essere anche event.target.reset()
        formAdd.reset()
        render(list, data);
    })

    // ricerca realtime
    // si aggancia ad input
    input.addEventListener('keyup', () => {
        const value = input.value.toLowerCase();

        const result = data.filter((element) => 
            element.name.toLowerCase().search(value) > -1 )


        render(list, result);
    });

    // ordine alfabetico
    sortAZ.addEventListener('click', () => {
        const result = data.sort((a, b) => (a.name > b.name) ? 1 : -1)
       
        render(list, result);
    });

    sortZA.addEventListener('click', () => {
        const result = data.sort((a, b) => (a.name < b.name) ? 1 : -1)
       
        render(list, result);
    });

});