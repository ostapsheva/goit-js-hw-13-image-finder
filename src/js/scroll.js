import refs from './refs.js';

function scroll() {
  setTimeout(() => {
    window.scrollTo({
      top: refs.gallery.clientHeight + refs.form.clientHeight,
      behavior: 'smooth',
    });
  }, 1000);
}

export default scroll;
