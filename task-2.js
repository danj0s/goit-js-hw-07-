const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngred = document.querySelector('#ingredients');

ingredients.map(el => {
  const createLi = document.createElement('li');
  createLi.textContent = el;
  listIngred.appendChild(createLi);
});