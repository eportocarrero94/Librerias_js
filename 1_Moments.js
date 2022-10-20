/*
Objto new Date
* new Date(año,mes,dia, hora)
* +new Date()       : vuelve la fecha a un número representacion en marca temporal

*get()          : Devuelve alguna información del valor (fecha)
*set()          : Recibe un parámetro para modificar el valor (fecha)

*/

const hoy = new Date()
const hoyMin = new Date()/1000

// console.log(hoy.getDate())

// console.log(hoy)
// console.log(hoyMin)


/*
Moments.js
ISO 8601        : el ISO del standar para las fechas

*moment()       : Es un objeto te entrega la fecha de hoy entre otros métodos, también puede recibir un parámetro

*format()       : (dia/mes/año) da formato a la fecha

    Método Get y SET:
    *get        : recibe un string y le puedes decir lo que quieres
    *set        : recibe un string y le puedes decir lo que quieres. Pero recibe dos valores (valor que quieres que sea actualizado, valor por el que vas a reemplazar )


*moment().add()      : recibe dos parametros (cantidad que deseas aumentar, valor que sera aumentado)
*moment().subtract   : 

*/
const today = moment()
console.log(today)

const set = today.set(`day`,5)
console.log(set)

const get = today.get(`day`)
console.log(get)

const add = today.add(5,`days`)
console.log(add)

const subtract = today.subtract(5,`days`)
console.log(subtract)





