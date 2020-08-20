import refs from './refs.js';

function scroll() {
  console.log('refs.gallery.clientHeight', refs.gallery.clientHeight);
  console.log('refs.form.clientHeight', refs.form.clientHeight);

  setTimeout(() => {
    window.scrollTo({
      top: refs.gallery.clientHeight,
      behavior: 'smooth',
    });
  }, 1000);
}

export default scroll;
