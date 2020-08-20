import './styles.css';
import apiService from './js/apiService.js';
import markup from './js/murkup.js';
import refs from './js/refs.js';

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  form.reset();
  markup.updateMarkupOnSubmit();
});

refs.btn.addEventListener('click', () => {
  markup.updateMarkupOnClick();
});
