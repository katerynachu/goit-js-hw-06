const buttonDecrementEl = document.querySelector('[data-action="decrement"]');
const buttonIncrementEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;
buttonIncrementEl.addEventListener('click', function () {
    counterValue += 1;
    valueEl.textContent = counterValue;
});
buttonDecrementEl.addEventListener('click', function () {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});


// const counterValue = document.querySelector('#value');
// let currentValue = parseInt(counterValue.textContent);
// const buttonDecrementEl = document.querySelector('[data-action="decrement"]');
// const buttonIncrementEl = document.querySelector('[data-action="increment"]');
// buttonIncrementEl.addEventListener('click', function () {
//     // counterValue.innerHTML = parseInt(counterValue.innerHTML) + 1;
//     currentValue += 1;
//     counterValue.innerHTML = currentValue;
// });

// buttonDecrementEl.addEventListener('click', function () {
//     // counterValue.innerHTML = parseInt(counterValue.innerHTML) - 1;
//     currentValue -= 1;
//     counterValue.innerHTML = currentValue;
// });

