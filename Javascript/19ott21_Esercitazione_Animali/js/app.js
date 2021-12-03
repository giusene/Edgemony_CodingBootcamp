    function primoEsercizio() {
    let animal = prompt(`PRIMO ESERCIZIO\n\nAnimale preferito:\n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda `);
    
    if (animal === 1) {
        alert("Chose the Dog");
    } else if (animal === 2) {
        alert("Chose the Cat");
    } else if (animal === 3) {
        alert("Chose the Goldfish");
    } else if (animal === 4) {
        alert("Chose the Monkey");
    } else if (animal === 5) {
        alert("Chose the Panda");
    } else if (animal === null || animal === "") {
        
    } else {
        alert("Animal not found");
    }

}

function secondoEsercizio() {
    let animal = prompt(`SECONDO ESERCIZIO\n\nAnimale preferito:\n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda `);
    switch (animal) {
        case 1:
            alert("Chose the Dog");
            break;
        case 2:
            alert("Chose the Cat");
            break;
        case 3:
            alert("Chose the Goldfish");
            break;
        case 4:
            alert("Chose the Monkey");
            break;
        case 5:
            alert("Chose the Panda");
            break;
        case null:
            break;
        case "":
            break;
        default:
            alert("Animal not found");
            break;
    }
}

function terzoEsercizio() {
    let animal = prompt(`TERZO ESERCIZIO\n\nAnimale preferito:\n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda `);
    animal = parseInt(animal);
    alert(animal === 1 ? "Chose the Dog" : ( animal === 2 ? "Chose the Cat" : ( animal === 3 ? "Chose the Goldfish" : ( animal === 4 ? "Chose the Monkey" : ( animal === 5 ? "Chose the Panda" : "Animal not found")))));
}