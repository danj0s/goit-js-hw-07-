const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const ul = document.querySelector('#gallery');
let list = ``;
images.map(el => {
  const url = el.url;
  const alt = el.alt;
  list += `<li> <img src= "${url}" alt="${alt}"/></li>`;
});
ul.insertAdjacentHTML('beforeend', list);
const imgList = document.querySelector("#gallery");
const item = imgList.querySelectorAll("li img");
imgList.style.display = "flex";
imgList.style.justifyContent = "space-between";
Array.from(item).map((el) => (el.style.width = "400px"));