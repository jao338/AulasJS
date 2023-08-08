let x1 = document.querySelector('.btn')

let x2 = document.querySelectorAll('#teste ul li')

let x3 = document.getElementsByClassName('.btn')

let x4 = document.getElementById('teste')

let x5 = document.getElementsByTagName('h1')

let x6 = document.getElementById('btn')

function clique(){
    alert("Clicou no botão")
}

x6.addEventListener('click', clique)

