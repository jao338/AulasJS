let num = [1,2,3,4]
let nomes = ['João', 'Paulo', 'Danilo', 'Diego']

function adicionarNumeros(...numeros){

    
    let novosNumeros = [

        ...num,
        ...numeros

    ]

    return novosNumeros;

}

function adicionarNomes(nomes, ...novosNomes){


    let novoArray = [
        ...nomes,
        ...novosNomes
    ]

    return novoArray;

}

console.log(adicionarNumeros(5,6,7,8,9));
console.log(adicionarNomes(nomes, 'Wendell', 'Michel', 'Vitor', 'Ivan'));

/*

O operador'Rest' permite que você passe uma quantidade indefinida valores a uma função

*/