// usare trim() per rimuovere spazi all'inzio e alla fine
// lenght mi restituisce false se -1
// utilizzare replaceAll
// il return esce dal processo della funzione un po come il breack 
 
function verificaCampi(nome,cognome,telefono,email){
    let verNome = false;
    let verCognome = false;
    let verTelefono = false;
    let verEmail = false;
    if (nome.replaceAll(" ", "") === "") {
        document.getElementById("nome").className = "error";
    }  else {
        document.getElementById("nome").className = "";
        verNome = true
    }

    if (cognome.replaceAll(" ", "") === "") {
        document.getElementById("cognome").className = "error";
    }  else {
        document.getElementById("cognome").className = "";
        verCognome = true
    }

    if (telefono.replaceAll(" ", "") === "" || isNaN(telefono)) {
        document.getElementById("telefono").className = "error";
    }  else {
        document.getElementById("telefono").className = "";
        verTelefono = true
    }

    if (email.replaceAll(" ", "") === "") {
        document.getElementById("email").className = "";
        email = email.trim();
        verEmail = true;
    } else {
        if (email.indexOf('@') == -1 && email.indexOf('.') == -1) {
            document.getElementById("email").className = "error";
        } else {
            document.getElementById("email").className = "";
            verEmail = true;
        }
    }

    if (verNome && verCognome && verTelefono && verEmail) {
        subscribe(nome,cognome,telefono,email)
    }
}