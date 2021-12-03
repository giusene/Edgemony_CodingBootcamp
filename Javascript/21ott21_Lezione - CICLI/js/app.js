let arrayAnnidato = ["giorgio", "maria", ["francesce", false, ["pippo", "pluto"], true]]
let estrapolazione = arrayAnnidato[2][2][0];
console.log(estrapolazione.toUpperCase());



let nomi = ['giorgio', 'francesca', 235, false, 'tre'];

// definisco variabile // durata fino a questa condizione // quanto l'aumento 
for (let nomeVariabile = 0 ; nomeVariabile < 20; nomeVariabile++) {
    console.log(nomeVariabile);
}


for (let i = 0 ; i < 20; i +=5) {
    console.log(i);
}


for (let index = 0 ; index < nomi.length; index++) {
    console.log((index+1) + ": " + nomi[index]);
}

// diversa sintassi: OF prende in automatico tutti gli elementi di nomi
// of racchiude condizione e durata e tutto
for (let nome of nomi) {
    console.log(nome);
}

// diversa sintassi: IN prende in automatico tutti gli indici di nomi
for (let indice in nomi) {

    // if senza graffe in una linea
    if ( indice !== "string" ) console.log(nomi[indice]);
    
}

// LE FUNZIONI
// definisci il nome della varabile e 
//dentro le tonde definisci i valori che ti aspetti di ricevere con dei nomi variabili
function somma(num1, num2) {
    // utilizzare return per restituire il risultato della funzione
    // il return serve se devi assegnare un valore ad una variabile esterna
    return num1+num2;
}

// quando vai a richiamare la funzione passi i valori dentro le tonde
let totale = somma(4,6);
// la var totale sarà quindi il valore dichiarata da return nella funzione
console.log(totale);


// CONSTANTI
// se usi const non puo essere piu modificato
// ma se lo definisci come array lo puoi popolare

const nomeCostante = [];
nomeCostante.push("pluto");
console.log(nomeCostante);