const container = document.querySelectorAll(`main`)

const draggable = new Draggable.default(container, {
    draggable:"div"
})

draggable.on(`drag:start`, () => console.log(`Comienza el drag`))
draggable.on(`drag:stop`, () => console.log(`Termina el drag`))


const containers2 = document.querySelectorAll(`.container`)
const droppable = new Droppable.default(containers2, {
    draggable: '.item',
    dropzone: '.dropzone'
})

  
  droppable.on('droppable:dropped', () => console.log('droppable:dropped'));
  droppable.on('droppable:returned', () => console.log('droppable:returned'));