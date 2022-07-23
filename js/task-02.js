const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEm = document.querySelector('#ingredients');

const list = ingredients.reduce((str, item) => str + `<li class="item">${item}</li>`, '');

ulEm.innerHTML = list ;


// const ulEl = document.querySelector('#ingredients');

// const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');

// ulEl.innerHTML = list;