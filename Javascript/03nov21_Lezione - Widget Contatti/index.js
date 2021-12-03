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
    render(list, data); 
});