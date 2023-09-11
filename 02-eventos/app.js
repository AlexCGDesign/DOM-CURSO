
const section = document.querySelector('.section');

function eventDelegation(e){
    if(e.target.matches('.button-color')){
        const getColor = e.target.getAttribute('data-color');

        e.currentTarget.style.backgroundColor = getColor;
    }
}

section.addEventListener('click', eventDelegation);