// import functions
import { add } from './calculations.js';
import { subtract } from './calculations.js';
import { multiply } from './calculations.js';
import { divide } from './calculations.js';

// reference needed DOM elements
const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-result');

const subNumber1 = document.getElementById('sub-number-1');
const subNumber2 = document.getElementById('sub-number-2');
const subButton = document.getElementById('sub-button');
const subAnswer = document.getElementById('sub-result');

const mltNumber1 = document.getElementById('mlt-number-1');
const mltNumber2 = document.getElementById('mlt-number-2');
const mltButton = document.getElementById('mlt-button');
const mltAnswer = document.getElementById('mlt-result');

const divNumber1 = document.getElementById('div-number-1');
const divNumber2 = document.getElementById('div-number-2');
const divButton = document.getElementById('div-button');
const divAnswer = document.getElementById('div-result');

console.log(subNumber1.value);
console.log(subNumber2.value);
console.log(subButton);
console.log(subAnswer);



// set event listeners 
addButton.addEventListener('click', () => {
    //console.log('button clicked');

    // get user input(s)
    const num1 = +addNumber1.value;
    const num2 = +addNumber2.value;

    // do any needed work with the value(s)
    const sum = add(num1, num2);
    // update DOM to reflect new value(s)
    addAnswer.textContent = sum;
});

subButton.addEventListener('click', () => {
    //console.log('button clicked');

    // get user input(s)
    const num1 = +subNumber1.value;
    const num2 = +subNumber2.value;

    // do any needed work with the value(s)
    const dif = subtract(num1, num2);
    // update DOM to reflect new value(s)
    subAnswer.textContent = dif;
});

mltButton.addEventListener('click', () => {
    //console.log('button clicked');

    // get user input(s)
    const num1 = +mltNumber1.value;
    const num2 = +mltNumber2.value;

    // do any needed work with the value(s)
    const pro = multiply(num1, num2);
    // update DOM to reflect new value(s)
    mltAnswer.textContent = pro;
});

divButton.addEventListener('click', () => {
    //console.log('button clicked');

    // get user input(s)
    const num1 = +divNumber1.value;
    const num2 = +divNumber2.value;

    // do any needed work with the value(s)
    const quo = divide(num1, num2);
    // update DOM to reflect new value(s)
    divAnswer.textContent = quo;
});