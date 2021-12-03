let age = "37";
console.log(age);

let myName = "Giuseppe";
let mySurname = "Senettone";
let space = " ";

if (true) {
    let myName = "Marco";
    console.log(myName);
}

// console.log serve per stampare in consle quello racchiuso tra parentesi
console.log(myName + space + mySurname + " stringa");

// alert usa il S.O. ed apre un messaggio a popup
alert(myName);

// prompt apre una finestra con un campo di input
let valorePrompt = prompt("Quanti anni hai?");

console.log(valorePrompt);

// se trasformo la variabile in valore booleano
Boolean(valorePrompt);
if (valorePrompt===false) {
    alert("inserisci un valore!");
}

console.log(valorePrompt);

// utilizzo di backslash per creare un escape nella stringa
let miaVariabile = 'l\'insegnate è detta \"maestra\"';

// l'apice inverso (option+backslash) posso scrivere di tutto e posso andare pure a capo
let nuovaVariabile = `l'insegnante è detta "maestra"`;

// con gli apici o i doppi apici non posso andare a capo 
let variabileAcapo = `<div>
                        <div>
                            <p>Prova</p>
                        </div>
                      </div>`;

// sintassi per aggiungere 5 al valore della variabile
age += 5;
console.log(age);

// conversione di tipi:

let stringa1 = "15";
let stringa2 = "15";
console.log(parseInt(stringa1)+parseInt(stringa2));

let gradi = "36.5 gradi";
// con float la parte stringa la elimina
console.log(parseFloat(gradi));

let tot1 = "23";
let tot2 = "24";

// TRUE
if ( tot1 !== tot2 ) {
    console.log(tot1, tot2);
}

tot1 = "23";
tot2 = 23;

// TRUE
if ( tot1 !== tot2 ) {
    console.log(tot1, tot2);
}

// FALSE
if ( tot1 != tot2 ) {
    console.log(tot1, tot2);
} else {
    console.log("sono diversi!")
}

if ( tot2 < 24) {
    console.log("minore di 24");
} else if ( tot2 > 24) {
    console.log("maggiore di 24");
} else {
    console.log("il numero è 24");
}

if ( tot2 < 24 && parseInt(tot2) ) {
    console.log("questa è TRUE")
}

// la variabile "totale" prendere il valore del risultato della condizione:
// se "age" è maggiore di 15 prenderà il primo valore altrimenti il secondo
let totale = age > 15 ? "ignazio" : "stagnitta";

// condizione annidata
let totale2 = age > 15 ? "ignazio" : ( age < 8 ? "rossi" : "bianchi");


switch (age) {
    case 15: // if
        alert("age è 15");
        break;
    case 18: // else if
        alert("age è 18");
        break;
    default: // else
        alert("age diverso da 15 e 18");
        break;
}

