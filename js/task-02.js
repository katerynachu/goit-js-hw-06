const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');
const ingredientItems = [];

for (const ingredient of ingredients) {
  const ingredientsItemEl = document.createElement('li');
  ingredientsItemEl.textContent = ingredient;
  ingredientsItemEl.classList.add('item');
  ingredientItems.push(ingredientsItemEl);
}

ingredientsListEl.append(...ingredientItems);