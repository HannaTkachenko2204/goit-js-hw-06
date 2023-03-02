let counterValue = 0;
let step = 1;

const counterEl = document.querySelector('#counter');
const valueEl = document.querySelector('#value');

counterEl.firstElementChild.addEventListener('click', decrementButtonEl);
counterEl.lastElementChild.addEventListener('click', incrementButtonEl);

function decrementButtonEl() {
    counterValue -= step;
    valueEl.textContent = counterValue;
    console.log('-');
};

function incrementButtonEl() {
    counterValue += step;
    valueEl.textContent = counterValue;
    console.log('+');
};