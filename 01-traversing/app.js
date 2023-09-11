const wrapper = document.querySelector('#wrapper');
const title = document.querySelector('.title');
const link = document.querySelector('.link.bold');
const inputNumber = document.querySelector('[type="number"]');

const img = document.querySelector('[data-identificador="img"]');
const figcaption = document.querySelector('figcaption');

img.src = "https://upload.wikimedia.org/wikipedia/commons/5/52/Spider-Man.jpg";

figcaption.textContent = img.dataset.textoMostrar;