function esercizio() {
    let campoInput = prompt("inserisci");
    // se campoInput restituisce true si verifica la condizione 
    if (validateInput(campoInput)) {

    }
}

function validateInput(input) {
    // qui scriviamo tutta una serie di validazioni per l'input
    // e se si verifica restituisce true
    return true
}

// con i dati primitivi li copi
// ma le variabili sono indipendenti tra loro e quindi copie
let pippo = "Pluto";
let topolino = "Minny";
topolino = pippo;
console.log(topolino);


// con gli oggetti fai diventare i nomi dell'array con la stessa referenza
// ma di fatto l'array è lo stesso
let arrUno = ['primo valore', 'secondo valore'];
let arrDue = arrUno;
let arrTre = arrDue;

arrTre.push('Terzo valore');

// stampa sempre lo stesso array
console.log(arrUno);
console.log(arrDue);
console.log(arrTre);


// OBJECT

let schedaProdotto = {
    nome: 'Maglia',
    peso: 20,
    prezzo: 30.50,
    sconto: 12.50,
    descrizione: 'descrizione dell\'oggetto',
    codice: '1234',
    disponibilita: false,
    colore: ['giallo', 'verde', 'fucsia', {rosso1: 'rosso chiaro', rosso2: 'rosso scuro'}],
    promozione: {
        dataInizio: '16/02/21',
        dataFine: '19/02/21'
    },
    // si possono usare caratteri speciali utilizzando le virgolette nella chiave
    'promo-giorn': '20%',
    // possiamo inserire all'interno anche dei metodi (funzioni)
    getColore: function(qualeColore) {
        return schedaProdotto.colore[qualeColore];
    },
    // si usa this. per abbreviare il percorso
    getColore2: function(qualeColore) {
        return this.colore[qualeColore];
    },
    getSconto: function(){
        return this.prezzo - this.sconto;
    }
}
// per indicare la chiave bisogna mettere le virgolette
console.log(schedaProdotto['nome']);

// nome dell'oggetto + nome proprietà
console.log(schedaProdotto.prezzo);

// per stampare la chiave con caratteri speciali usiamo il primo metodo
console.log(schedaProdotto['promo-giorn']);

// per stampare un valore preciso di un oggetto dentro un oggetto
console.log(schedaProdotto.promozione.dataFine);

// per stampare un valore preciso di un array
console.log(schedaProdotto.colore[1]);


console.log(schedaProdotto.colore[3].rosso1);


// per richiamare un metodo
console.log(schedaProdotto.getColore(2));

console.log(schedaProdotto.getColore2(3));


console.log(schedaProdotto.getSconto());


// iteriamo tutti gli elementi dell'oggetto
// se ciclo un oggetto mi cicla solo la chiave
for (let key in schedaProdotto) {
    console.log(key);
}

// se voglio ciclare il contenuto
for (let key in schedaProdotto) {
    console.log(schedaProdotto[key]);
}

// se voglio ciclare l'oggetto e stampare una chiave precisa
for (let key in schedaProdotto) {
    if (key === 'prezzo') {
        console.log(schedaProdotto['prezzo']);
    }
}





// per inseire una nuova propieta questa se si vogliono utilizzare caratteri speciali nella chiave
schedaProdotto['stampa-1'] = ['gatto', 'cane', 'smile']

// sintassi diversa
schedaProdotto.stampa = ['gatto', 'cane', 'smile']



