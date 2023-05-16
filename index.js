const number = document.querySelectorAll('.number');
const operation = document.querySelectorAll('.op');
const display = document.querySelector('.display');

number.forEach(num => {
    num.addEventListener('click', displayValue);
});

function displayValue(e) {
    display.textContent += e.target.value;
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