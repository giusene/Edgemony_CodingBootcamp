function answer1(radio1, radio2) {
    if (radio1.checked) {
        document.getElementById('esito1').innerHTML = '<div class="errato">Risposta Errata!</div>';
    } else if (radio2.checked) {
        document.getElementById('esito1').innerHTML = '<div class="corretto">Risposta Corretta!</div>';
    }
}

function answer2(radio1, radio2) {
    if (radio1.checked) {
        document.getElementById('esito2').innerHTML = '<div class="corretto">Risposta Corretta!</div>';
    } else if (radio2.checked){
        document.getElementById('esito2').innerHTML = '<div class="errato">Risposta Errata!</div>';
    }
}

function answer3(radio1, radio2) {
    if (radio1.checked) {
        document.getElementById('esito3').innerHTML = '<div class="corretto">Risposta Corretta!</div>';
    } else if (radio2.checked){
        document.getElementById('esito3').innerHTML = '<div class="errato">Risposta Errata!</div>';
    }
}