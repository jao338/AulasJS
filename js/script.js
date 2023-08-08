function clique(){
    
    const input = document.querySelector('input')

    console.log(input.getAttribute('type'))

    if(input.hasAttribute('placeholder')){
        console.log('Tem placeholder')
    } else{
        console.log('Não tem placeholder')
    }

    input.setAttribute('placeholder', 'Digite alguma coisa')
}

function mostrarSenha(){
    const input = document.querySelector('input')
    const botao = document.querySelector('.botao')

    if(input.getAttribute('type') === ('text')){
        input.setAttribute('type', 'password');
        botao.innerText = "Mostrar senha"
    } else{
        input.setAttribute('type', 'text')
        botao.innerText = "Ocultar senha"
    }
}