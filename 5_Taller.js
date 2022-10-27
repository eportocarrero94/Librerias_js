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
        taskDeadline.innerHTML=`Plazo: <span>${d.deadline}</span>`


        newTask.appendChild(taskTitle)
        // newTask.appendChild(taskState)
        newTask.appendChild(taskPerson)
        newTask.appendChild(taskDeadline)
        
        

        let columnToDo = document.getElementById(`todoTask`)
        let columnInProgress = document.getElementById(`inProgressTask`)
        let columnDone = document.getElementById(`doneTask`)

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

