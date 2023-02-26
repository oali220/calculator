let operator = '';
let currentVal = '';
let previousVal = '';
let result = '';

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

let clear = document.querySelector(".clear");
let decimal = document.querySelector(".decimal");
let equal = document.querySelector(".equal");

let previous = document.querySelector(".previous");
let current = document.querySelector(".current");


numbers.forEach((number) => number.addEventListener('click', function(e) {
    getValue(e.target.textContent)
    current.textContent = currentVal;
}))

operators.forEach((oper) => oper.addEventListener('click', function(e) {
    getOperator(e.target.textContent)
    previous.textContent = previousVal + ' ' + operator;
    current.textContent = currentVal;
}))

clear.addEventListener('click', function() {
    operator = '';
    currentVal = '';
    previousVal = '';
    previous.textContent = previousVal + ' ' + operator;
    current.textContent = currentVal;
})

equal.addEventListener('click', function() {
    calculate(currentVal, previousVal, operator);
    current.textContent = result;
    previous.textContent = previousVal + ' ' + operator;
})

decimal.addEventListener('click', function() {
    addDecimal();
})

function addDecimal() {
    if (!currentVal.includes('.')) {
        currentVal += '.';
    }
}

function getValue(num) {
    if(currentVal.length < 6) {
    currentVal += num;
    }
}

function getOperator(oper) {
    operator = oper;
    previousVal = currentVal;
    currentVal = '';
}

function calculate(firstVal, secondVal, oper) {
    firstVal = Number(firstVal);
    secondVal = Number(secondVal);

    if(oper == '*') {
        result = firstVal * secondVal;
    } 
    else if (oper === '/') 
    {
        result = firstVal / secondVal;
    } 
    else if (oper === '-') 
    {
        result = firstVal - secondVal;
    } 
    else if (oper === '+') 
    {
        result = firstVal + secondVal;
    }

    result = Math.round(result * 10000) / 10000;

    previousVal = '';
    currentVal = result;
    operator = '';
}

