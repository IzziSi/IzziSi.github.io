var input = [];
var operator = [];
var tempInput = '';
var tempOperator = '';
var results = '';
var evalResults = 0;



function clearedresults() {
    clear();
    document.getElementById('input').value = evalResults;
}

function inputNumber(number) {
    if (evalResults != 0) {
        clearedresults();
    }
    if (tempOperator === '') {
        tempInput += number;
    } else {
        operator.push(tempOperator);
        tempOperator = '';
        tempInput += number;
    }
    document.getElementById('input').value = tempInput;
}

function inputOperator(operator) {
    if (tempInput === '') {
        tempOperator = operator;
    } else {
        input.push(tempInput);
        tempInput = '';
        tempOperator = operator;
    }
    document.getElementById('input').value = tempOperator;
}


function calculateInputOperator() {
    if (tempInput != '') {
        input.push(tempInput);
        tempInput = '';
    }
    if (tempOperator != '') {
        operator.push(tempOperator);
        tempOperator = '';
    }
    for (var i = 0; i < input.length; i++) {
        results += parseFloat(input[i]);
        if (operator[i] != undefined) {
            results += operator[i];
        }
    }
    evalResults = eval(results);
    document.getElementById('input').value = evalResults;
}

function evaluated() {
    calculateInputOperator();
}

function clear() {
    input.length = 0;
    operator.length = 0;
    tempInput = '';
    tempOperator = '';
    results = '';
    evalResults = 0;
}

function delButton() {
    tempInput = tempInput.slice(0, -1);
    document.getElementById('input').value = tempInput;
}

document.onkeydown = function numPad(e) {
    if (e.keyCode === 48 || e.keyCode=== 96) {inputNumber(0)};
    if (e.keyCode === 49 || e.keyCode=== 97) {inputNumber(1)};
    if (e.keyCode === 50 || e.keyCode=== 98) {inputNumber(2)};
    if (e.keyCode === 51 || e.keyCode=== 99) {inputNumber(3)};
    if (e.keyCode === 52 || e.keyCode=== 100) {inputNumber(4)};
    if (e.keyCode === 53 || e.keyCode=== 101) {inputNumber(5)};
    if (e.keyCode === 54 || e.keyCode=== 102) {inputNumber(6)};
    if (e.keyCode === 55 || e.keyCode=== 103) {inputNumber(7)};
    if (e.keyCode === 56 || e.keyCode=== 104) {inputNumber(8)};
    if (e.keyCode === 57 || e.keyCode=== 105) {inputNumber(9)};
    if (e.keyCode === 8) {delButton()};
    if (e.keyCode === 107) {inputOperator('+')};
    if (e.keyCode === 106) {inputOperator('*')};
    if (e.keyCode === 13) {evaluated()};
    if (e.keyCode === 109) {inputOperator('-')};
    if (e.keyCode === 110) {inputNumber('.')};
    if (e.keyCode === 111) {inputOperator('/')};
}

document.getElementById('input').value = evalResults;
