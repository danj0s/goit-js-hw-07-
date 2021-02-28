const categories = Array.from(document.querySelectorAll('.item'));
console.log(`В списке ${categories.length} категории`);

// перебираю масив айтемов и вытягиваю с них х2
// вытягиваю все элементы лишек одной категории и вывожу длину

const list = categories.map((lox, index) => {
  const header = lox.querySelector('h2');
  const listEl = lox.querySelectorAll('li');
  console.log(
   ` Категория:${header.textContent} \n Количество элементов: ${listEl.length},`
  );
  console.log(index);
});