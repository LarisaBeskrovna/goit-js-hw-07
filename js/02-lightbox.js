import { galleryItems } from './gallery-items.js';

const list = document.querySelector('.gallery');
let instance;
list.insertAdjacentHTML('beforeend', itemContauner());

function itemContauner() {
  return galleryItems
  .map(({original,preview, description}) => {
     return `<li class="gallery__item"> 
     <a class="gallery__link" href=${original}>
     <img class="gallery__image" 
     src=${preview} 
     alt="${description}"></img> </a> </li>`
  })
    .join('');}


  const lightbox = new SimpleLightbox('.gallery__link', {});
list.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  
  instance.show();
  document.addEventListener('keydown', closeModal);
}

function closeModal(event) {
  if (event.code === 'Escape') {
    instance.close();
    document.removeEventListener('keydown', closeModal);
  }
}

list.addEventListener('click', onClick);


console.log(galleryItems);

