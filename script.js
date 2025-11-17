const output = document.getElementById('output');
const taxoutput = document.getElementById('taxoutput');
const factorialoutput = document.getElementById('factorialoutput');

//================Assignment #1===================//

function toFahrenheit() {
    let celsius = document.getElementById("input").value;
    let fahrenheit = (celsius * 9 / 5 ) + 32;
    output.innerHTML = fahrenheit.toFixed(2);
}

function toCelsius() {
    let fahrenheit = document.getElementById("input").value;
    let celsius = (fahrenheit - 32 ) * 5 / 9;
    output.innerHTML = celsius.toFixed(2);
}

function toFeet() {
    let meters = document.getElementById("input").value;
    let feet = meters * 3.28084;
    output.innerHTML = feet.toFixed(2);
}

function toMeters() {
    let feet = document.getElementById("input").value;
    let meters = feet * 0.3048;
    output.innerHTML = meters.toFixed(2);
}

//================Assignment #2===================//

function taxCalculate(){
    let taxinput = document.getElementById('taxinput').value;
    let x;
    if (taxinput <= 250000) {
        taxoutput.innerHTML = (0).toFixed(2);
    } else if (taxinput > 250000 && taxinput <= 400000) {
        x = (taxinput - 250000) * .20;
        taxoutput.innerHTML = x.toFixed(2);
    } else if (taxinput > 400000 && taxinput <= 800000) {
        x = ((taxinput - 400000) * .25) + 30000;
        taxoutput.innerHTML = x.toFixed(2);
    } else if (taxinput > 800000 && taxinput <= 2000000) {
        x = ((taxinput - 800000) * .30) + 130000;
        taxoutput.innerHTML = x.toFixed(2);
    } else if (taxinput > 2000000 && taxinput <= 8000000) {
        x = ((taxinput - 2000000) * .32) + 490000;
        taxoutput.innerHTML = x.toFixed(2);
    } else if (taxinput > 8000000) {
        x = ((taxinput - 8000000) * .35) + 2410000;
        taxoutput.innerHTML = x.toFixed(2);
    }
}

//================Assignment #3===================//

function factorial() {
    let n = document.getElementById('factorialinput').value;
    let factorial = 1;
    let i = n;
    while (i > 1) {
        factorial *= i;
        i--;
    }
    factorialoutput.innerHTML = factorial;
}

let numbers = [];

function addNumber() {
    const numInput = document.getElementById("numinput");
    const value = Number(numInput.value);
    if (!isNaN(value) && numInput.value !== "") {
        numbers.push(value);
        document.getElementById("numlist").innerHTML = numbers.join(", ");
        numInput.value = "";
    }
}

function calculateSum() {
    let i = 0;
    let sum = 0;
    if (numbers.length === 0) {
        document.getElementById("sumputput").innerHTML = "No numbers entered.";
        return;
    }
    do {
        sum += numbers[i];
        i++;
    } 
    while (i < numbers.length);
    document.getElementById("sumoutput").innerHTML = sum.toFixed(2);
}

function findAverage() {
    if (numbers.length === 0) {
        document.getElementById("aveOutput").innerHTML = "No numbers entered.";
        return;
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }   
    let average = sum / numbers.length;
    document.getElementById("averageoutput").innerHTML = average.toFixed(2);
}

