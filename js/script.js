function clicou(){
    const teste = document.querySelector('#teste')
    const ul = teste.querySelector('ul')
    
    ul.innerHTML += "<li>Item alterado</li>"
    ul.children[0].innerHTML = "Item alterado"

    console.log(ul)
    console.log(teste.children[0].children)
}