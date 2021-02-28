const counterValue = document.querySelector("#value");
const minusValue = document.querySelector('button[data-action="decrement"]');
const plusValue = document.querySelector('button[data-action="increment"]');

const clickDecrementBtn = () => {
    const newValue = Number(counterValue.textContent) + 1;
    counterValue.textContent = newValue 
    return counterValue
}


const clickIncrementBtn = () => {
    const newValue = Number(counterValue.textContent) - 1;
    counterValue.textContent = newValue 
    return counterValue
}


plusValue.addEventListener('click', clickDecrementBtn )
minusValue.addEventListener('click', clickIncrementBtn )
