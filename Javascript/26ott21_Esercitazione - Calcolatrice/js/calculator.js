const calcDiv = document.querySelector('.calculator');
const calcBtn = calcDiv.querySelectorAll('a');

for (let singleBtn of calcBtn) {
    singleBtn.addEventListener('click', () => {
        switch (singleBtn.id) {
            case 'sum':
                operationChoice(sum, `${singleBtn.id}`);
                break;
        }
    })
}



const toDisplay = (htmlToInsert) => document.getElementById('display').textContent = htmlToInsert;
const toMiniDisplay = (htmlToInsert) => document.getElementById('display_mini').textContent = htmlToInsert;


const displayInput = (input) => {
    displayContent = displayContent + input;
    toDisplay(displayContent);
}

const sum = (numbers) => {
    let total = 0;
    for (let sumnum of numbers) {
        total = total + sumnum;
    }
    return total
}

const sub = (numbers) => {
    let total = numbers[0];
    for (i = 1; i < numbers.length ; i++) {
        total = total - numbers[i];
    }
    return total
}

const mult = (numbers) => {
    let total = numbers[0];
    for (i = 1; i < numbers.length ; i++) {
        total = total * numbers[i];
    }
    return total
}

const div = (numbers) => {
    let total = numbers[0];
    for (i = 1; i < numbers.length ; i++) {
        total = total / numbers[i];
    }
    return total
}

const rad = () => {
    toMiniDisplay(displayContent + ' √');
    toDisplay(Math.sqrt(displayContent));
}

const n2 = () => {
    toMiniDisplay(displayContent + ' n2');
    toDisplay(displayContent*displayContent);
}


const nx = () => {
    let total = Math.pow(numbers[0], numbers[1]);
    return total
}

function calculator() {
    if (displayContent !== '') {
        let totOperation = 0;
        miniDisplayContent = miniDisplayContent + displayContent;
        numbers.push(parseFloat(displayContent));
        totOperation = sign(numbers);
        toMiniDisplay(miniDisplayContent);
        toDisplay(totOperation);
        return totOperation;
    }
}

let operationChoice = (singFromCalc, graphSign) => {
    if (displayContent !== '') {
        let graphToDisplay;
        switch (graphSign) {
            case 'sum':
                graphToDisplay = ' + ';
                break;
            case 'sub':
                graphToDisplay = ' - ';
                break;
            case 'mult':
                graphToDisplay = ' X ';
                break;
            case 'div':
                graphToDisplay = ' / ';
                break;
            case 'nx':
                graphToDisplay = ' n ';
                break;
        }
        miniDisplayContent = miniDisplayContent + displayContent + graphToDisplay + ' ';
        toMiniDisplay(miniDisplayContent);
        numbers.push(parseFloat(displayContent));
        displayContent = '';
        toDisplay(displayContent);
        sign = singFromCalc;
    }
}

const clear = () => {
    displayContent = '';
    miniDisplayContent = '';
    sign = undefined;
    numbers = [];
    toDisplay(displayContent);
    toMiniDisplay(miniDisplayContent);
}


let numbers = [];
let sign;
let displayContent = "";
let miniDisplayContent = "";