'use strict';

const input = document.querySelector('.display-row');
let inputText = '';
let inputOperators = '';
let arrayOfNumbers = [];
let arrayOfOperators = [];
let eredmeny = 0;

document.querySelectorAll('.number, .operator-row').forEach(item => item.addEventListener('click', () => writeNumbersToDisplay(item.textContent)));

const writeNumbersToDisplay = (text) => {
    inputText = inputText + text;
    input.textContent = inputText;
    arrayOfNumbers = inputText.split('+').join(',').split('-').join(',').split('×').join(',').split('÷').join(',').split(',');
    writeOperatorToDisplay(text);
    return arrayOfNumbers;
}

const writeOperatorToDisplay = (text) => {
    if (text === '+' || text === '-' || text === '×' || text === '÷') {
        arrayOfOperators.push(text);
    }
    return arrayOfOperators;
}

document.querySelector('.equal').addEventListener('click', () => {
    for (let i = 0; i < arrayOfOperators.length; i++) {
        if (arrayOfOperators[i] === '+' && eredmeny === 0) {
            eredmeny = parseFloat(arrayOfNumbers[i]) + parseFloat(arrayOfNumbers[i + 1]);
            input.textContent = eredmeny;
        } else if (arrayOfOperators[i] === '+' && eredmeny !== 0) {
            eredmeny += parseFloat(arrayOfNumbers[i + 1]);
            input.textContent = eredmeny;
        } else if (arrayOfOperators[i] === '-' && eredmeny === 0) {
            eredmeny = parseFloat(arrayOfNumbers[i]) - parseFloat(arrayOfNumbers[i + 1]);
            input.textContent = eredmeny;
        } else if (arrayOfOperators[i] === '-' && eredmeny !== 0) {
            eredmeny -= parseFloat(arrayOfNumbers[i + 1]);
            input.textContent = eredmeny;
        } else if (arrayOfOperators[i] === '÷' && eredmeny === 0) {
            eredmeny = parseFloat(arrayOfNumbers[i]) / parseFloat(arrayOfNumbers[i + 1]);
            input.textContent = eredmeny;
        } else if (arrayOfOperators[i] === '÷' && eredmeny !== 0) {
            eredmeny /= parseFloat(arrayOfNumbers[i + 1]);
            input.textContent = eredmeny;
        } else if (arrayOfOperators[i] === '×' && eredmeny === 0) {
            eredmeny = parseFloat(arrayOfNumbers[i]) * parseFloat(arrayOfNumbers[i + 1]);
            input.textContent = eredmeny;
        } else if (arrayOfOperators[i] === '×' && eredmeny !== 0) {
            eredmeny *= parseFloat(arrayOfNumbers[i + 1]);
            input.textContent = eredmeny;
        }
        isNaNEredmeny(eredmeny);
    }
});

document.querySelector('.delete').addEventListener('click', () => {
    input.textContent = '';
    clearData();
});

const clearData = () => {
    inputText = '';
    inputOperators = '';
    arrayOfNumbers = [];
    arrayOfOperators = [];
    eredmeny = 0;
};

const isNaNEredmeny = (eredmeny) => {
    if (isNaN(eredmeny)) {
        input.textContent = 'ERROR';
    }
};
