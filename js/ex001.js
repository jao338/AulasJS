const input = document.querySelector('input')
const ul = document.querySelector('ul')

function adicionar(event){

    if(event.key === 'Enter'){

        
        const li = document.createElement('li')

        li.innerHTML = input.value

        ul.appendChild(li)

        input.value = ""
    }
}

input.addEventListener('keyup', adicionar)


/*

    Uma outra solução pode ser a seguinte:
    
        ul.innerHTML += '<li>' + input.value + '</li>'
    
    Ao resolver desta maneira, o resultado será o mesmo, porém não será a melhor resolução em termos de desempenho.
    Ao fazer desta maneira, toda a lista é "apagada" e posteriormente toda a lista recriada com o novo valor. Em uma lista com 100000 linhas, encontramos um problema de desempenho

*/