const API_URL = "https://my-json-server.typicode.com/eportocarrero94/Librerias_js/tasks"

/* Función para formatear fecha */ 
function unixToDate(time, format = `DD/MM/YYYY`) {
    return moment.unix(time).format(format)
}


/* Agrega animación de ingreso al formulario */
let boton = document.getElementById(`newTask`)
let formulario = document.getElementById(`formElement`)
let botonCancelar = document.getElementById(`cancelForm`)

boton.addEventListener(`click`, () => {
    formulario.classList.add(`active`)
})

botonCancelar.addEventListener(`click`, () => {
    formulario.classList.remove(`active`)
})


/* Agregar funciones Touch */
delete Hammer.defaults.cssProps.userSelect

const body = document.getElementById(`body`)
const hammerjs = new Hammer(body)
hammerjs.on("panleft panright ", ev => {
    if (ev.pointerType === `touch`) {
        if (ev.type === `panleft` && ev.distance > 100) {
            formulario.classList.add(`active`)
            }
        if (ev.type === `panright` && ev.distance > 100) {
                formulario.classList.remove(`active`)
            }
    }
})


/*  */
const sortable = new Sortable.default(document.querySelectorAll(`.task-container`), {
    draggable: `article`
})


/* Petición de una API */
axios.get(API_URL)

    .then(respuesta => {
        // console.log(respuesta)
        return fillTasks(respuesta.data)})
    .catch(error => console.log(error))
 
function fillTasks(data) {
    data.map( d=> {
        let newTask = document.createElement("article")
        newTask.classList.add(`task`)

        let taskTitle = document.createElement("h3")
        taskTitle.innerHTML = d.title
    
        // let taskState = document.createElement(`p`)
        // taskState.innerHTML = d.state

        let taskPerson = document.createElement(`p`)
        taskPerson.innerHTML=`Responsable: <span>${d.person}</span>`
    
        // let taskPerson = document.createElement(`span`)
        // personP.innerHTML=`Responsable: `
        // taskPerson.innerHTML = d.person
        // personP.appendChild(taskPerson)
        // newTask.appendChild(personP)
        
        let taskDeadline = document.createElement(`p`)
        taskDeadline.innerHTML=`Plazo: <span>${unixToDate(d.deadline)}</span>`


        newTask.appendChild(taskTitle)
        // newTask.appendChild(taskState)
        newTask.appendChild(taskPerson)
        newTask.appendChild(taskDeadline)
        
        

        let columnToDo = document.getElementById(`todoTasks`)
        let columnInProgress = document.getElementById(`inProgressTasks`)
        let columnDone = document.getElementById(`doneTasks`)

        if (d.state === "to-do"){
            columnToDo.appendChild(newTask)
        }
        if (d.state === "in-progress"){
            columnInProgress.appendChild(newTask)
        }
        if (d.state === "done"){
            columnDone.appendChild(newTask)
        }
    })
}


