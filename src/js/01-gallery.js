// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const createGalleryCard = ({ preview, original, description } = {}) => {
  return `<a class="gallery__item"
   href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
`;
};
const markup = galleryItems.map(el => createGalleryCard(el)).join('');
galleryEl.insertAdjacentHTML('beforeend', markup);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});