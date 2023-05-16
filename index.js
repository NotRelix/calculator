const number = document.querySelectorAll('.number');
const operation = document.querySelectorAll('.op');
const displayCurr = document.querySelector('.display-current');
const displayOld = document.querySelector('.display-old');
const equal = document.querySelector('.equal');

let first = "";
let sign = "";
let second = "";

let shouldResetScreen = false;

equal.addEventListener('click', evaluate);

number.forEach(num => {
    num.addEventListener('click', displayValue);
});

operation.forEach(op => {
    op.addEventListener('click', setOperation);
});

function displayValue(e) {
    if (shouldResetScreen) resetScreen();
    displayCurr.textContent += e.target.value;
}

function resetScreen() {
    displayCurr.textContent = "";
    shouldResetScreen = false;
}

function setOperation(e) {
    first = displayCurr.textContent;
    sign = e.target.value;
    displayOld.textContent = `${first} ${sign}`;
    shouldResetScreen = true;
}

function evaluate() {
    second = displayCurr.textContent;
    displayCurr.textContent = operate(+first, sign, +second);
    displayOld.textContent = `${first} ${sign} ${second} =`;
}

function add(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    return first / second;
}

function operate(first, operator, second) {
    let result;
    if (operator === '+') {
        result = add(first, second);
    }
    else if (operator === '-') {
        result = subtract(first, second);
    }
    else if (operator === '*') {
        result = multiply(first, second);
    }
    else if (operator === '/') {
        result = divide(first, second);
    }
    return result;
}