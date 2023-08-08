function clique(){

    const button = document.querySelector('button')

    button.classList.add('verde')
    button.classList.remove('verde')

    if(button.classList.contains('azul')){
        button.classList.add('verde')
        button.classList.remove('azul')
    }else{
        button.classList.add('azul')
        button.classList.remove('verde')
    }

    button.classList.toggle('vermelho')
    console.log(button.classList)
    
}

