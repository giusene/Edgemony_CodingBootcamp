function primoEsercizio() {
    let titolo = "Seleziona il numero di un animale";
    let animals = ["1. Cane", "2. Gatto", "3. Topo", "4. Leone"]
    let input = prompt(titolo + '\n\n' + animals.join('\n'));
    let risposta = input <= animals.length && input >= 1 ? `Hai selezionato ${animals[input-1].slice(animals[input-1].indexOf(" ")+1)}` : input === null || input === "" ? `Fai una selezione` : `Animale non trovato`;
    alert(risposta);
}

function secondoEsercizio() {
    let str = prompt(`Inserisci 5 nomi separati da una virgola`, `Stefania,Sandro,Maria,Giacomo,Giorgia`).split(",");
    str.unshift(`${str.splice(3,1,"Marta")}`);
    str.push("Franco","Valentina");
    let arrAge = [32, 21, 47, 12, 78];
    arrAge.unshift(arrAge.splice(3,1,6)[0]);
    arrAge.push(54, 32);
    let output = [str,arrAge];
    console.log(output)
}