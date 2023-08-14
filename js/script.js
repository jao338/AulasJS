let btn = document.querySelector('#botao')
let ins = document.querySelector('#inserir')

btn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    
        .then((data) =>{
            console.log(`Status ${data.status}`)
            return data.json();
        })

        .then((data) => {
            alert(`.then: ${data[0].title}`);
        })

        .catch((error) => {
            alert('.catch:  Algo deu errado.');
            alert(error);
        })

        .finally(() => {
            alert(`.finally: É sempre executado, se deu certo ou não.`)
        });

    alert('Clicou');
})

ins.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts', 
    
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

    .then((response) => {
        return response.json();
    })

    .then((json) => {
        console.log(json);
    });
})

/*

    A função assíncrona 'fetch' retorna uma promisse. O código segue em sequencialmente, executando o alert('clicou') antes ou depois do resposta da promisse.

    A função '.catch' é executada apenas caso algum erro aconteceu ao realizar a requisição.

    A função '.finally' é executada sempre, independentemente do resultado da requisição. 

    O evento de clique do botão 'ins' executa uma requisição do tipo POST, especificando o tipo do conteúdo e quais dados que serão enviados, sendo passados atráves de um objeto convertido em JSON. Após isso, obtêm o retorno da requisição.

*/