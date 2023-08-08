function clique(){
    const teste = document.querySelector('#teste')
    const ul = teste.querySelector('ul')

    let newButton = document.createElement('button')
    newButton.innerHTML = "Botão"

    let newUL = document.createElement('ul')
    
    for (let index = 0; index < 5; index++) {

        let newLi = document.createElement('li')
        newLi.innerHTML = "Item " + (index + 1)
        newUL.append(newLi)
    }

    ul.after(newUL)

}