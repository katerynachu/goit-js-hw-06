const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  const ingredientsItemEl = document.createElement('li');

  ingredientsItemEl.innerHTML = ingredient;
  ingredientsItemEl.classList.add('item');
  ingredientsListEl.appendChild(ingredientsItemEl)
}
// ingredients.forEach((item) => {
//   const ingredientsItemEl = document.createElement('li');
//   ingredientsItemEl.innerHTML = item;
//   ingredientsItemEl.classList.add('item');
//   ingredientsListEl.appendChild(ingredientsItemEl)
// })