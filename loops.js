import { output, taxoutput, factorialoutput } from 'script.js';

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