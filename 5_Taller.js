const API_URL = "https://my-json-server.typicode.com/eportocarrero94/Librerias_js/tasks"


axios.get(API_URL)

    .then(respuesta => {
        console.log(respuesta)
        return fillTasks(respuesta.data)})
    .catch(error => console.log(error))

function fillTasks(data) {
    data.map( d=> {
        let newTask = document.createElement("article")

        let taskTitle = document.createElement("h3")
        taskTitle.innerHTML = d.title
        newTask.appendChild(taskTitle)

        let taskState = document.createElement(`p`)
        taskState.innerHTML = d.state
        newTask.appendChild(taskState)

        let taskPerson = document.createElement()

        let plazoP = document.createElement(`p`)
        let deadline = document.createElement(`span`)
        plazoP.innerHTML = `Plazo: `
        deadline.innerHTML = d.deadline
        plazoP.appendChild(deadline)
        newTask.appendChild(plazoP)
        
        

        let column = document.getElementById(`doneTasks`)
        column.appendChild(newTask)
    })
}

