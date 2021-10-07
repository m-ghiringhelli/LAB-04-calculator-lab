// import functions
import { add } from './calculations.js';

import { subtract } from './calculations.js';

// reference needed DOM elements
const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-result');

console.log(addNumber1.value);
console.log(addNumber2.value);
console.log(addButton);
console.log(addAnswer);



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