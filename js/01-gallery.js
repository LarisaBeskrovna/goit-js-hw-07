import { galleryItems } from './gallery-items.js';

const list = document.querySelector('.gallery');
const liEl = itemContauner(galleryItems);
list.insertAdjacentHTML('beforeend', liEl);

function itemContauner(galleryItems) {
    return galleryItems
  .map(({original,preview, description}) => {
     return `<li class="gallery__item"> 
     <a class="gallery__link" href=${original}>
     <img class="gallery__image" src=${preview} alt="${description}"></img> </a> </li>`
  })
    .join('');}



console.log(itemContauner(galleryItems));


