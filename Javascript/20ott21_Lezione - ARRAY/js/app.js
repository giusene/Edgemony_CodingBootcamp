// array si puo inizializzare anche vuoto
let arr = [];

// inidice   0    1    2
let arr2 = ["1", "2", "3"];

// stampa l'indice 1 di arr2
console.log(arr2[1]);

// aggiunge elemento alla coda
arr.push("giuseppe");
    // anche piu di un elemento
    arr.push("marco", 234);

// estrae elemento dalla coda
arr.pop()
    // ovviamente se vogliamo recuperare il valore estratto lo assegniamo ad una variabile
    let estrazione = arr.pop();

// estrae elemento dalla testa
arr.shift()

// aggiunge elemento in testa
arr.unshift("edgemony");
    // anche piu di uno
    arr.unshift(123, 232, "anche numeri");

// rimuovere e sostituisce elementi ovunque
// splice(index di partenza, count, item, item....)
    // parte dall'inidice 1 e finisce 4 indici in piu
    arr.splice(1,4);
        // con un unico valore arriva fino alla fine dell array
        arr.splice(0);
            // per recuperare i dati estratti si puo assegnare ad una varabile
            let estrazione2 = arr.splice(0,1);
                // per contemporaneamente aggiungere valori li aggiunge alle posizioni stabilite
                arr.splice(1,2,"elemento", "lemento2");
                    // se vogliamo solo aggingere in un index stabilito
                    // si definisce l'index e gli si dice di non cancellare nulla col valore 0
                    let arrayVuoto = arr.splice(4,0,"aggiunta");

                    // NB: SE SI ASSEGNA L'ESTRAZIONE AD UNA VARIABILE IL RISULTATO
                    // SARA' SEMPRE UNA ARRAY ANCHE SE VUOTO

// unisce array e li mette in un nuovo valore (assegnabile a variabile)
// e non modifica quelli precendenti
let arr3 = ["altro", "array"]
let arrayConcatenati = arr.concat(arr2, arr3);

// NB: se il primo elemento fosse stata una stringa unisce tutto nella stringa stessa

arr.length // ritorna la lunghezza (il numero di elementi)
arr.indexOf("cosa cercare"); // ritorna l'indice del PRIMO elemento trovato
arr.lastIndexOf("cosa cercare"); // ritorna l'indice delL ULTIMO elemento trovato
arr.includes("cosa cercare"); // ritorna TRUE o FALSE se il criterio di ricerca ha o non ha riscontro
arr.reverse(); // inverte il contenuto dell array
arr.join("caratteri di separazione"); // converte un array in una stringa semparandoli da un carattere
