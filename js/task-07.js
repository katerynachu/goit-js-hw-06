const inputSizeControlEl = document.querySelector('#font-size-control');
const textInputEl = document.querySelector('#text')

inputSizeControlEl.addEventListener('input', (event) => {

    textInputEl.style.fontSize = `${event.currentTarget.value}px`
    
})