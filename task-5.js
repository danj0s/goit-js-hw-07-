const inputRef = document.querySelector('#name-input')
const labelName = document.querySelector('#name-output')

inputRef.addEventListener('input', event => {
    labelName.textContent = event.target.value;
})

