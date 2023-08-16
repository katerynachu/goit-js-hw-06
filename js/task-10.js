function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesMainEl = document.querySelector('#boxes');
const inputNumberEl = document.querySelector('input');
const buttonCreateEl = document.querySelector('[data-create]');
const buttonDestroyEl = document.querySelector('[data-destroy]');

buttonCreateEl.addEventListener('click', () => {
    const numBoxes = parseInt(inputNumberEl.value);

  for (let i = 0; i < numBoxes; i++){
    const initialSize = 30;
    const createDiv = document.createElement('div');
    boxesMainEl.appendChild(createDiv);

    const randomColor = getRandomHexColor();
    createDiv.style.backgroundColor = randomColor;

       if (i > 0) {
      const prevElement = boxesMainEl.children[i - 1];
      const prevWidth = parseInt(prevElement.style.width);
      const prevHeight = parseInt(prevElement.style.height);
      createDiv.style.width = `${prevWidth + 10}px`;
      createDiv.style.height = `${prevHeight + 10}px`;
    } else {
      createDiv.style.width = `${initialSize}px`;
      createDiv.style.height = `${initialSize}px`;
    }

  }

})

buttonDestroyEl.addEventListener('click', () => { 
  boxesMainEl.innerHTML = '';
})