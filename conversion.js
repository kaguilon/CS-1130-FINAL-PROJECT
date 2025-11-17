import { output, taxoutput, factorialoutput } from './script.js';

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