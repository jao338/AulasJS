function soltou(event){
    console.log(event.code)
    console.log(event.key)
    console.log("SHIFT: " + event.shiftKey)
    console.log("CTRL: " + event.ctrlKey)
    console.log("ALT: " + event.altKey)  
    console.log("\n")
}

const input = document.querySelector('input')


input.addEventListener('keyup', soltou)

/*
    O objeto "event" possui como atributos os detalhes do evento que foi disparado.

    Com o atributo ".code" podemos recuperar exatamente qual tecla foi digitada.
    Com o atributo ".key" podemos saber qual tecla foi digitada, mas não especificamente qual delas.
    Com o atributo ".shiftKey" podemos saber se o shift foi digitado juntamente com alguma tecla.
    Com o atributo ".ctrlKey" podemos saber se o ctrl foi digitado juntamente com alguma tecla.
    Com o atributo ".altKey" podemos saber se o alt foi digitado juntamente com alguma tecla.    
*/