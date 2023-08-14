let btn = document.querySelector('#botao')

btn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((data) =>{
        return data.json()
    })

    .then((data) => {
        alert(`.then: ${data[0].title}`);
    })

    .catch((error) => {
        alert('.catch:  Algo deu errado.');
        alert(error);
    })

    .finally(() => {
        alert(`.finally: É sempre executado, se deu certo ou não`)
    });

    alert('Clicou');
})

/*

    A função assíncrona 'fetch' retorna uma promisse. O código segue em sequencialmente, executando o alert('clicou') antes ou depois do resposta da promisse.

    A função '.catch' é executada apenas caso algum erro aconteceu ao realizar a requisição.

    A função '.finally' é executado sempre, independemente do resultado da requisição. 

*/