/* Ejemplo con Draggable */

const container1 = document.getElementById(`main1`)

const draggable = new Draggable.default(container1, {
    draggable:"div"
})

draggable.on(`drag:start`, () => console.log(`Comienza el drag`))
draggable.on(`drag:stop`, () => console.log(`Termina el drag`))

/* Ejemplo con Droppable */

const container2 = document.querySelectorAll(`.container`)
const droppable = new Droppable.default(container2, {
    draggable: '.item',
    dropzone: '.dropzone'
})

  
  droppable.on('droppable:dropped', () => console.log('droppable:dropped'));
  droppable.on('droppable:returned', () => console.log('droppable:returned'));

/* Ejemplo con Sortable */

  const container3 = document.getElementById(`main2`)

  const sortable = new Sortable.default(container3, {
    draggable:"div"
})