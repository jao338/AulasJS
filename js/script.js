let btn = document.querySelector('#botao')
let ins = document.querySelector('#inserir')

btn.addEventListener('click', async () => {

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    alert(`O retorno é : ${json[0].title}`);
    
    alert('Clicou');
})

ins.addEventListener('click', async () => {

    let response = await fetch('https://jsonplaceholder.typicode.com/posts', 
    
    {
        method: 'POST',    
        headers: {
            'Content-Type': 'application/json'           
         },

        body: JSON.stringify({
            title: 'Title',
            body: 'Body',
            userId: 2
        })
    })


    let json = await response.json();
    console.log(json);

})

/*

    A declaração 'async function' define por regra uma função assíncrona, que retorna um objeto promise. Ao usar a expressão await, define-se uma pausa na execução, esperando a resoluçaõ da promise.

*/