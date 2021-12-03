function advancedCalc(numbers) {
    const filterNumber = numbers.filter(number => typeof (number) === 'number');
    const filterSign = numbers.filter(sign => typeof (sign) === 'string');
    let totalAdvance;
    for (i = 0; i < filterSign.length; i++) {
        if (i === 0) {
            if (filterSign[i] === '+') totalAdvance = filterNumber[i] + filterNumber[i + 1]
            if (filterSign[i] === '-') totalAdvance = filterNumber[i] - filterNumber[i + 1]
            if (filterSign[i] === '*') totalAdvance = filterNumber[i] * filterNumber[i + 1]
            if (filterSign[i] === '/') totalAdvance = filterNumber[i] / filterNumber[i + 1]
            if (filterSign[i] === 'nx') totalAdvance = Math.pow(filterNumber[i], filterNumber[i + 1]);
        } else {
            if (filterSign[i] === '+') totalAdvance = totalAdvance + filterNumber[i + 1]
            if (filterSign[i] === '-') totalAdvance = totalAdvance - filterNumber[i + 1]
            if (filterSign[i] === '*') totalAdvance = totalAdvance * filterNumber[i + 1]
            if (filterSign[i] === '/') totalAdvance = totalAdvance / filterNumber[i + 1]
            if (filterSign[i] === 'nx') totalAdvance = Math.pow(totalAdvance, filterNumber[i + 1]);
        }
    }
    return totalAdvance;
}

function miniDisplayFunc(toMiniDisplay) {
    display.textContent = '0'
    miniDisplay.textContent = miniDisplay.textContent + toMiniDisplay;
}

const calculatorDiv = document.querySelector('.calculator');
const calculatorBtn = document.querySelectorAll('a');
const display = document.querySelector('.display');
const miniDisplay = document.querySelector('.display_mini');
const sound = new Audio('js/bip.mp3');
let calcArray = []
let verify = false

for (singleBtn of calculatorBtn) {
    singleBtn.addEventListener('click', (event) => {
        sound.play();
        if (event.target.id === 'rad') {
            if (display.textContent !== '0' && !verify) {
                let pot = Math.sqrt(parseFloat(display.textContent));
                miniDisplayFunc(display.textContent + ' √');
                display.textContent = pot;
                verify = true;
            }
        }
        else if (event.target.id === 'nx') {
            if (display.textContent !== '0' && !verify) {
                calcArray.push(parseFloat(display.textContent));
                calcArray.push('nx');
                miniDisplayFunc(display.textContent + ' n ');
            }
        }
        else if (event.target.id === 'n2') {
            if (display.textContent !== '0' && !verify) {
                let pot = parseFloat(display.textContent) * parseFloat(display.textContent)
                miniDisplayFunc(display.textContent + ' n2');
                display.textContent = pot;
                verify = true;
            }
        }
        else if (event.target.id === 'clear') {
            display.textContent = '0';
            miniDisplay.textContent = '';
            calcArray = [];
            verify = false;
        }
        else if (event.target.id === 'div') {
            if (display.textContent !== '0' && !verify) {
                calcArray.push(parseFloat(display.textContent));
                calcArray.push('/');
                miniDisplayFunc(display.textContent + ' / ');
            }
        }
        else if (event.target.id === 'mult') {
            if (display.textContent !== '0' && !verify) {
                calcArray.push(parseFloat(display.textContent));
                calcArray.push('*');
                miniDisplayFunc(display.textContent + ' x ');
            }
        }
        else if (event.target.id === 'sub') {
            if (display.textContent !== '0' && !verify) {
                calcArray.push(parseFloat(display.textContent));
                calcArray.push('-');
                miniDisplayFunc(display.textContent + ' - ');
            }
        }
        else if (event.target.id === 'sum') {
            if (display.textContent !== '0' && !verify) {
                calcArray.push(parseFloat(display.textContent));
                calcArray.push('+');
                miniDisplayFunc(display.textContent + ' + ');
            }
        }
        else if (event.target.id === 'tot' && !verify) {
            if (calcArray.length >= 2) {
                calcArray.push(parseFloat(display.textContent));
                miniDisplayFunc(display.textContent);
                display.textContent = advancedCalc(calcArray);
                verify = true;
            }

        }
        else if (event.target.id === 'dot') display.textContent = display.textContent + '.'
        else if (!verify) {
            if (display.textContent === '0') {
                display.textContent = '';
                display.textContent = display.textContent + event.target.id
            } else {
                display.textContent = display.textContent + event.target.id
            }

        }

    })
}



// PRIMO ESERCIZIO //

function calculator(numbers) {
    function sum() {
        let sumTotal = 0;
        for (num of numbers) sumTotal += num;
        return sumTotal;
    }

    function sub() {
        let subTotal = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            subTotal -= numbers[i];
        }
        return subTotal;
    }

    function molt() {
        let moltTotal = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            moltTotal *= numbers[i];
        }
        return moltTotal;
    }

    function div() {
        let divTotal = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            divTotal /= numbers[i];
        }
        return divTotal;
    }

    return {
        sum: sum(),
        sub: sub(),
        molt: molt(),
        div: div(),
    };
}


// SECONDO ESERCIZIO E TERZO ESERCIZIO//

function calculatorSecond(numbers) {
    const sum = () => numbers.reduce((cont, num) => cont + num)
    const sub = () => numbers.reduce((cont, num) => cont - num);
    const molt = () => numbers.reduce((cont, num) => cont * num);
    const div = () => numbers.reduce((cont, num) => cont / num);
    const pot = () => numbers.map(num => num * num);
    const rad = () => numbers.map(num => Math.sqrt(num));

    return {
        sum: sum(),
        sub: sub(),
        molt: molt(),
        div: div(),
        pot: pot(),
        rad: rad(),
    };

}


const numbersArray = [4, 16, 64]


console.log(calculator(numbersArray))
console.log(calculatorSecond(numbersArray))
