const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const arrOfItem = ingredients.map(ingredient => {
  console.log(ingredient);
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  console.log(itemEl);

  return itemEl;
});

listEl.append(...arrOfItem);
