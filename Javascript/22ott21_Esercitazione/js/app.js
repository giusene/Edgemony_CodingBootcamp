const rubrica = [];

function displayPopUp() {
    document.getElementById("popup_container").className += " display_on";
}

function subscribe(nome,cognome,telefono,email){
    let input = [nome,cognome,telefono,email];
    let verNome = true;
    let verCognome = true;
    for (let elementi of rubrica) {
        for (let key in elementi){
            if (key == 'nome') {
                if (elementi['nome'] === input[0].toUpperCase()){
                    verNome = false;
                }
            }
        }
        for (let key in elementi){
            if (key == 'cognome') {
                if (elementi['cognome'] === input[1].toUpperCase()){
                    verCognome = false;
                }
            }
        }        
    }
    if (!verNome && !verCognome) {
        alert('Contatto esistente!')
    } else {
        let newUser = userCreation(input);
        addUser(newUser);
        document.getElementById("form_rubrica").reset();
        let displayRis = [];
        let singoloRis = []; 
        let indexElimina = 0;
        for (let iterazione of rubrica) {
            for (let secIter in iterazione) {
                singoloRis.push(iterazione[secIter]); 
            }
            displayRis.push(`<div class="riga_rubrica"><a href="javascript:elimina(${indexElimina});" class="button_elimina">X</a><p>` + singoloRis.join(' ') + '</p></div>');
            singoloRis = [];
            indexElimina ++
        }
        document.getElementById('lista_rubrica').innerHTML = displayRis.join('<br>');

    }
    
}


function userCreation(arrData){    
    let user = {
        nome: arrData[0].toUpperCase(),
        cognome: arrData[1].toUpperCase(),
        numero: arrData[2],
        email: arrData[3]
    }
    return user;

}


function addUser(user){
        rubrica.push(user)
}



function cerca(input) {
    let risultato = [];
    for (elemento of rubrica) {
        for (key in elemento) {
            if (key == 'nome') {
                if (elemento['nome'].toLowerCase() == input){
                    risultato.push(elemento);
                }
            }
            if (key == 'cognome') {
                if (elemento['cognome'].toLowerCase() == input){
                    risultato.push(elemento);
                }
            }
        }
    }
    if (risultato.length === 0){
        alert('nessuna corrispondenza');
    } else {
        let displayRis = [];
        let singoloRis = []; 
        for (risRicerca of risultato) {
            for (contattoCerc in risRicerca) {
                singoloRis.push(risRicerca[contattoCerc]);  
            }
            displayRis.push(singoloRis.join());
            singoloRis = [];
        }
        
        alert(`${displayRis.length} corrispondenze trovate\n\n` + displayRis.join('\n'));
        console.log(displayRis);
    }
}

function elimina(index_elimina) {
    rubrica.splice(index_elimina,1);
    let displayRis = [];
        let singoloRis = []; 
        let indexElimina = 0;
        for (let iterazione of rubrica) {
            for (let secIter in iterazione) {
                singoloRis.push(iterazione[secIter]); 
            }
            displayRis.push(`<div class="riga_rubrica"><a href="javascript:elimina(${indexElimina});" class="button_elimina">X</a><p>` + singoloRis.join(' ') + '</p></div>');
            singoloRis = [];
            indexElimina ++
        }
        document.getElementById('lista_rubrica').innerHTML = displayRis.join('<br>');
}