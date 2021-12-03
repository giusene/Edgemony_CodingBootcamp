const nomi = [];
const cognomi = [];
const numeri = [];
const cartTotal = [];
const cartProdotti = [];

function add(){
    let nome = prompt('Inserisci Nome:');
    if (nome === null || nome === '' || parseInt(nome) ) {
        alert('Inserisci un nome valido')
    } else {
        let cognome = prompt('Inserisci Cognome:');
        if (cognome === null || cognome === '' || parseInt(cognome)) {
            alert('Inserisci un cognome valido')
        } else {
            let numero = prompt('Inserisci numero di telefono:');
            if (numero === null || numero === '' || isNaN(numero)){
                alert('Inserisci un numero valido')
            } else {
                nomi.push(nome.toUpperCase());
                cognomi.push(cognome.toUpperCase());
                numeri.push(numero);
            }
        }
    }
}

function find() {
    let tofind = prompt('CERCA CONTATTO\nInserisci Nome o Cognome');
    if (tofind === null || tofind === '' || parseInt(tofind) ) {
        alert('Inserisci un valore valido per la ricerca')
    } else {
        let controllo = false;
        for (let ricerca of nomi ) {
            if (ricerca === tofind.toUpperCase()) {
                let indice = nomi.indexOf(ricerca);
                alert(nomi[indice] + " " + cognomi[indice] + " " + numeri[indice]);
                controllo = true;
                break;
            } else {
                for (let ricerca of cognomi) {
                    if (ricerca === tofind.toUpperCase()) {
                        let indice = cognomi.indexOf(ricerca);
                        alert(nomi[indice] + " " + cognomi[indice] + " " + numeri[indice]);
                        controllo = true;
                        break;
                    }
                }
            }
        }
        if (controllo === false) {
            alert('Nessuna corrispondenza!')
        }
        
    }
}

function view() {
    let rubrica = []
    for ( i=0 ; i < nomi.length; i++) {
        let record = nomi[i] + " " + cognomi[i] + " " + numeri[i];
        rubrica.push(record);
    }
    alert('RUBRICA:\n\n' + rubrica.join('\n'));
}

function addToCart (prodotto,quantita) {
    let verifica = true;
    if (prodotto === null || prodotto === '' || parseInt(prodotto) || quantita === '' ) {
        alert('Inserisci il nome di un prodotto e la quantità')
    } else {
        for (let verProdotto of cartProdotti) {
            if (verProdotto === prodotto) {
                alert('Hai gia inserito questo prodotto');
                verifica = false;
                document.getElementById("form_carrello").reset();
                break;
            }        
        } 
        if (verifica) {
            cartTotal.push(quantita + " " + prodotto);
            cartProdotti.push(prodotto);
            document.getElementById("form_carrello").reset();
        }
    }
    
}

function viewCart () {
    alert(`Hai ${cartTotal.length} prodotti nel carrello` + "\n\n" + cartTotal.join("\n"))
}