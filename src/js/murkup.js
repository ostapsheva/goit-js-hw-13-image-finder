import refs from './refs.js';
import card from '../templates/card.hbs';
import apiService from './apiService.js';
import scroll from './scroll.js';

export default {
  updateMarkup(params) {
    const markup = card(params);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
  },
  updateMarkupOnSubmit() {
    this.cleanMarkup();
    apiService.resetPage();
    this.hideBtn();
    apiService.fetchImages().then(el => {
      return this.updateMarkup(el);
    });
    this.showBtn();
  },
  updateMarkupOnClick() {
    apiService
      .fetchImages()
      .then(el => {
        return this.updateMarkup(el);
      })
      .then(() => scroll());
  },

  cleanMarkup() {
    refs.gallery.innerHTML = '';
  },
  hideBtn() {
    refs.btn.classList.add('is-hidden');
  },
  showBtn() {
    refs.btn.classList.remove('is-hidden');
  },
};
