// funzione assegnata ad una variabile
const sum = function(numOne, NumTwo) {
    const sumTot = numOne + NumTwo;
    return sumTot;
}

// arrow function (il return non serve, ritorna gia il risultato della funzione)
const sum = (numOne, NumTwo) => numOne + NumTwo

// arrow function su piu di una riga si devono usare le graffe
// e bisogna assegnare il return
const sum = (numOne, NumTwo) => {
    console.log('ciao');
    return numOne + NumTwo;
}

// esempio utile
// possiamo creare una funzione con il sort(), in modo da sortare l'emelemento che gli passiamo
const sortingArray = (array) => array.sort();

const fruits = ["kiwi", "apple", "orange", "banana"];

sortingArray(fruits);


// Spread operator DA RIVEDERE!!!!!!!!!!
// sono i tre punti prima ...
// praticamente cicla tutti i valori dell'array e li lavora singolarmente

console.log(...fruits)


/// DA CASIMIRO

// FUNZIONI COMPLESSE
// function sum(numOne, numTwo) {
//   const sumTot = numOne + numTwo;
//   return sumTot;
// }

// const sum = function (numOne, numTwo) {
//   const sumTot = numOne + numTwo;
//   return sumTot;
// };

// Arrow function
// const sum = (numOne, numTwo) => numOne + numTwo;

// const sum = (numOne, numTwo) => {
//   console.log("Salve Casi");
//   return numOne + numTwo;
// };

// const sortingArray = (array) => array.sort();
// // sortingArray(fruits)

// Spread operator
// const fruits = ["kiwi", "apple", "orange", "pear"];

// function printFruits(...array) {
//   console.log(array);
// }

// printFruits(fruits);
// book.sort((a, b) => a.fname > b.fname ? 1 : -1);

