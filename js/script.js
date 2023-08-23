let numeros = [1,2,3,4];
let novosNumeros = [...numeros, 5,6,7,8];

let info = {
    nome: 'João',
    sobreNome: 'Henrique',
    idade: 22
}

let novaInfo = {
    ...info,
    altura: 1.74,
    peso: 60
}

function adicionarInfo(info){
    let newInfo = {
        ...info, 
        status: 0
    }

    return newInfo;
}

console.log(novosNumeros)
console.log(novaInfo)
console.log(adicionarInfo({nome: 'João', sobrenome: 'Henrique'}))
/*

Os três pontos indicam todos os valors de um array.
O array 'novosNumeros' possui os elementos do array 'numeros' e também os números do 5 ao 8
O objeto novaInfo possui os elementos do obejto 'info' e também os novos valores, altura e peso.


*/