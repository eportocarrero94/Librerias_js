const element = document.getElementById(`element`)

const hammerjs = new Hammer.Manager(element, {
    recognizers: 
    [
        [   Hammer.Press, {
            enable: true,
            time: 3000
            }
        ],
        [   Hammer.Tap, {
            enable: true,
          
            }
        ]
    ]
})


/* Sobreescribir un Recognizers */
const press = hammerjs.get(`press`)

press.set({
    time: 10500
    })

console.log(press)


/* Eliminando un Recognizers */

hammerjs.remove(`press`)

console.log(hammerjs)



hammerjs.on(`tap`, evento => {
    console.log(evento)
    if(evento.pointerType === `mouse`) {
        element.innerHTML = `Click con mouse!`
    }
    else {
        element.innerHTML = `Tap con el dedo`
    }
})
