let btn = document.querySelector('#botao')

btn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((data) =>{
        return data.json()
    })
    .then((data) => {
        console.log(data)
    })
})

