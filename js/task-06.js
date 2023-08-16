const validationInputEl = document.querySelector('#validation-input');
const length = parseInt(validationInputEl.dataset.length);

validationInputEl.addEventListener("blur", () => {
    const value = validationInputEl.value;

    if (value.length !== length) {
        validationInputEl.classList.add('invalid');
        validationInputEl.classList.remove('valid');
    } else {
        validationInputEl.classList.add('valid');
        validationInputEl.classList.remove('invalid');
    }
});
