let Celsius = document.querySelector('#Celcius > input#Celsius');
let Fahrenheit = document.querySelector('#Fahrenheit > input');
let Kelvin = document.querySelector('#Kelvin > input');

function celci() {
    const ctemp = parseFloat(Celsius.value);
    const ftemp = eval((ctemp * 9 / 5) + 32);
    const ktemp = ctemp + 273.15;
    Fahrenheit.value = ftemp;
    Kelvin.value = ktemp;
}
function Fahren() {
    const ftemp = parseFloat(Fahrenheit.value);
    const ctemp = eval((ftemp - 32) * 5 / 9);
    const ktemp = eval((ftemp - 32) * 5 / 9 + 273.15);
    Celsius.value = ctemp;
    Kelvin.value = ktemp;
}
function Kelvi() {
    const ktemp = parseFloat(Kelvin.value);
    const ftemp = eval((ktemp - 273.15) * 9 / 5 + 32);
    const ctemp = ktemp - 273.15;
    Celsius.value = ctemp;
    Fahrenheit.value = ftemp;
}


Kelvin.addEventListener('input', Kelvi);
Celsius.addEventListener('input', celci);
Fahrenheit.addEventListener('input', Fahren);