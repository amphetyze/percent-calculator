const calcButton1 = document.querySelector('#calc-btn-1');
const resetButton1 = document.querySelector('#reset-btn-1');
const calcButton2 = document.querySelector('#calc-btn-2');
const resetButton2 = document.querySelector('#reset-btn-2');
const calcButton3 = document.querySelector('#calc-btn-3');
const resetButton3 = document.querySelector('#reset-btn-3');
const calcButton4 = document.querySelector('#calc-btn-4');
const resetButton4 = document.querySelector('#reset-btn-4');

const decimalList = document.querySelector('.select');
const allForms = document.querySelectorAll('.form');
const resetAllButton = document.querySelector('#reset-all-btn');

function calcPercentByNumber(number1, number2, decimalPlaces) {
    return (number2 * (number1 * 0.01)).toFixed(decimalPlaces);
}

function calcPercentFromNumbers(number1, number2, decimalPlaces) {
    return (number1 / number2 * 100).toFixed(decimalPlaces);
}

function addPercentToNumber(number1, number2, decimalPlaces) {
    return (((number2 / 100) * number1) + number2).toFixed(decimalPlaces);
}

function substractPercentFromNumber(number1, number2, decimalPlaces) {
    return (number2 - (number2 / 100 * number1)).toFixed(decimalPlaces);
}

const globalReset = () => allForms.forEach(form => form.reset());

calcButton1.addEventListener('click', () => {
    const inputPercent1 = document.querySelector('#input1-number1').value;
    const inputNumber1 = document.querySelector('#input1-number2').value;

    const result1 = document.querySelector('#result-1');

    result1.innerText = `${inputPercent1}% от числа ${inputNumber1} = ${calcPercentByNumber(inputNumber1, inputPercent1, decimalList.value)}`;
});

resetButton1.addEventListener('click', () => {
    result1.innerText = `0% от числа 0 = 0`;
})

calcButton2.addEventListener('click', () => {
    const inputPercent2 = document.querySelector('#input2-number1').value;
    const inputNumber2 = document.querySelector('#input2-number2').value;

    const result2 = document.querySelector('#result-2');

    result2.innerText = `Число ${inputPercent2} от числа ${inputNumber2} = ${calcPercentFromNumbers(inputPercent2, inputNumber2, decimalList.value)}%`;
});

resetButton2.addEventListener('click', () => {
    result2.innerText = `Число 0 от числа 0 = 0%`;
})

calcButton3.addEventListener('click', () => {
    const inputPercent3 = Number(document.querySelector('#input3-number1').value);
    const inputNumber3 = Number(document.querySelector('#input3-number2').value);

    const result3 = document.querySelector('#result-3');

    result3.innerText = `Прибавить ${inputPercent3}% к числу ${inputNumber3} = ${addPercentToNumber(inputPercent3, inputNumber3, decimalList.value)}`;
});

resetButton3.addEventListener('click', () => {
    result3.innerText = `Прибавить 0% к числу 0 = 0`;
})

calcButton4.addEventListener('click', () => {
    const inputPercent4 = document.querySelector('#input4-number1').value;
    const inputNumber4 = document.querySelector('#input4-number2').value;

    const result4 = document.querySelector('#result-4');

    result4.innerText = `Вычесть ${inputPercent4}% из числа ${inputNumber4} = ${substractPercentFromNumber(inputPercent4, inputNumber4, decimalList.value)}`;
});

resetButton4.addEventListener('click', () => {
    result4.innerText = `Вычесть 0% из числа 0 = 0 `;
});

resetAllButton.addEventListener('click', globalReset);

document.addEventListener('DOMContentLoaded', globalReset);