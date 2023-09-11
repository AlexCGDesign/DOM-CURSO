const button = document.querySelector('.button');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

button.addEventListener('click', function(){
    console.log(modal.classList);

    modal.classList.add('show');

    console.log(modal.classList);
});

closeModal.addEventListener('click', function(){

    modal.classList.remove('show', 'clase2');

});


