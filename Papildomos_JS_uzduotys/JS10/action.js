//<!--Reikia sukurti funkcionuojantį skaičiuotuvą (calculator). Privalomai turi būti skaičiai nuo 0 iki 9, sudėties, atimties, dalybos, daugybos veiksmai, mygtukas išvalantis įvesties lauką. Daugybos, dalybos, atimties ir sudėties FUNKCIJOS turi būti rašomi atskirame actions.js faile ir kviečiame pagrindiniame index.html faile. Anksčiau darytą skaičiuotuvą CSS užduotyse galite tam pritaikyti.-->

function clearOutput() {
    document.getElementById("output").innerHTML = "0";
}

function remove() {
    let value = document.getElementById("output").innerHTML;
    if (value == "0") {
        value = "";
        document.getElementById("output").innerHTML = value;
    }
}

function forDisplay(value) {
    remove();
    document.getElementById("output").innerHTML += value;
}


function add (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function substract (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide (firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function getResult(firstNumber, operator, secondNumber) {
    switch(operator) {
        case "+":
            result = add(Number(firstNumber), Number(secondNumber));
            break;
        case "-":
            result = substract(Number(firstNumber), Number(secondNumber));
            break;
        case "*":
            result = multiply(Number(firstNumber), Number(secondNumber));
            break;
        case "/":
            if( secondNumber !== 0) {
                result = divide(Number(firstNumber), Number(secondNumber));
            } else alert("Cannot divide from zero. Try again");
            break;
    }
    return result;
}

















