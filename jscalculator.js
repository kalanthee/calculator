
let display = "0"
let leftString = ""
let rightString = ""
let operation = ""

function buttonClick(argument) {
    if (argument === 'C') {
        display = "0"
    }
    else if (argument === '⟵') {
        display = removeLastDigit(display)
    }

    else if(argument === '+') {
        leftString = display
        operation = '+'
        display = ""
    }
    else if(argument === '-') {
        leftString = display
        operation = '-'
        display = ""
    }
    else if(argument === '÷') {
        leftString = display
        operation = '÷'
        display = ""
    }
    else if(argument === '×') {
        leftString = display
        operation = '×'
        display = ""
    }
    else if(argument === "=") {
        rightString = display
        display = calculate(leftString, rightString, operation)
    }
    else {
        display = display + argument
    }
    
    displayWithoutZeros = removeZeros(display)
    display = displayWithoutZeros
    document.getElementById("display").innerHTML = display
}

function removeZeros(argument) {
    while(argument.charAt(0) === '0') { // jezeli pierwszy znak w string jest "0"
        argument = argument.substring(1) // usun pierwszy znak w stringu
    }

    if (argument.length === 0) { // jezeli dlugosc stringa (liczba znakow w stringu) to zamien na "0"
        argument = "0"
    }
    console.log(argument.length)
    return argument
}

function calculate(leftString, rightString, operator) {
    leftNumber = parseInt(leftString) // zamien string na liczbe
    rightNumber = parseInt(rightString)
    if (operator === "+") {
        return (leftNumber + rightNumber).toString();
    }
    if (operator === "-") {
        return (leftNumber - rightNumber).toString();
    }
    if (operator === "÷") {
        return (leftNumber / rightNumber).toString();
    }
    if (operator === "×") {
        return (leftNumber * rightNumber).toString();
    }
}

function removeLastDigit(argument) {
    if (argument.length >1) {
        return argument.substring(0, argument.length - 1);
    }
    else {
        return argument = "0"
    }
}
