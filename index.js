const number = document.querySelectorAll('.number');
const operation = document.querySelectorAll('.op');
const displayCurr = document.querySelector('.display-current');
const displayOld = document.querySelector('.display-old');
const equalBtn = document.querySelector('.equal');
const cancelBtn = document.querySelector('.cancel');
const deleteBtn = document.querySelector('.delete');

let first = "";
let sign = "";
let second = "";
let shouldResetScreen = false;
let divideByZero = false;

equalBtn.addEventListener('click', evaluate);
cancelBtn.addEventListener('click', cancelButton);
deleteBtn.addEventListener('click', deleteButton);

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

function cancelButton() {
    displayOld.textContent = "";
    first = "";
    op = "";
    second = "";
    resetScreen();
}

function deleteButton() {
    displayCurr.textContent = displayCurr.textContent.slice(0, -1);
}

function setOperation(e) {
    if (first) evaluate();
    if (divideByZero) {
        divideByZero = false;
        return;
    }
    sign = e.target.value;
    first = displayCurr.textContent;
    displayOld.textContent = `${first} ${sign}`;
    shouldResetScreen = true;
}

function evaluate() {
    if (shouldResetScreen) return;
    second = displayCurr.textContent;
    if (sign === '/' && second === '0') {
        alert("Can't Divide by Zero!");
        divideByZero = true;
        return;
    }
    displayCurr.textContent = Number(Math.round(operate(+first, sign, +second) + 'e3') + 'e-3');
    displayOld.textContent = `${first} ${sign} ${second} =`;
    shouldResetScreen = true;
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
        if (second === 0) result = null;
        else result = divide(first, second);
    }
    return result;
}