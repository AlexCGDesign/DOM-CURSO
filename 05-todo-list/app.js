const button = document.querySelector('.button');
const form = document.querySelector('.form');
const input = form.querySelector('.input');
const listContainer = document.querySelector('.list-container');

form.addEventListener('submit', handleSubmit);

message();

function message(){
    const h3 = document.createElement('h3');
    h3.classList.add('task-message');

    h3.textContent = listContainer.firstElementChild ? 'Tareas por hacer' : 'No hay tareas aún';
    
    const prevMessage = document.querySelector('.task-message');

    if(prevMessage){

        prevMessage.replaceWith(h3);
        
        return;
    }

    listContainer.before(h3);

   
}

function handleSubmit(e){
    e.preventDefault();

    const inputValue = input.value;
    

    createTask(inputValue);

    this.reset();
    message();
}

function createTask(value){
    const newTask = document.createElement("li");
    newTask.textContent = value;

    listContainer.prepend(newTask);

    addEvents(newTask);
}

function addEvents(element){
    element.addEventListener('dblclick', function(){
        // eliminar
        element.remove();
        message();
    });
}

const wrapper = document.querySelector('.wrapper');

const copiaWrapper = wrapper.cloneNode(true);+

wrapper.before(copiaWrapper);

/*

- `beforebegin` ← El HTML se inserta antes del elemento de referencia, como hermano anterior.

- `afterbegin` ← El HTML se inserta como primer hijo del elemento.

- `beforeend` ← El HTML se inserta como último hijo del elemento.

- `afterend` ← El HTML se inserta después del elemento de referencia, como hermano siguiente.

*/