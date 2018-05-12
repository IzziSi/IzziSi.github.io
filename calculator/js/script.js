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


document.getElementById('input').value = evalResults;
