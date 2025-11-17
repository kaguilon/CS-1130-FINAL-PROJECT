import { output, taxoutput, factorialoutput } from 'script.js';

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