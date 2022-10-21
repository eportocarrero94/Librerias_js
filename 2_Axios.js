// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));



// axios.get('https://jsonplaceholder.typicode.com/posts')
//   .then(response => console.log(response))


/*
Método GET

axios.get(url [,config])
*/

const config2 = {
  headers: {
    "Autorization" : "dsadagrwgrs"
  }
}

axios.get(`https://jsonplaceholder.typicode.com/users`, config2)
  .then(respuesta => console.log(respuesta))
  .catch(error => console.error(error))
  .then( () => console.log(`PETICIÓN TERMINADA GET`))


/*
Método POST

axios.post(url [, data[, config]])
*/

const data = {
  title: "Hola Ewer"
} 

axios.post(`https://jsonplaceholder.typicode.com/posts`, data)
  .then(respuesta => console.log(respuesta))
  .catch(error => console.error(error))
  .then( () => console.log(`PETICIÓN TERMINADA POST`))


/*
Método DELETE

axios.delete(url [,config])
*/

axios.delete(`https://jsonplaceholder.typicode.com/users/3`, config2)
  .then(respuesta => console.log(respuesta))
  .catch(error => console.error(error))
  .then( () => console.log(`PETICIÓN TERMINADA DELETE`))


/*
Función ASINCRONA async
*/

async function getPosts(url){
  axios.get(url)
  try {
    const resp = await axios.get(url)
    console.log(resp)
  } catch (err) {
    console.error(err)
  }
}
getPosts(`https://jsonplaceholder.typicode.com/users`)