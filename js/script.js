let pessoa = {
    nome: 'João',
    sobrenome: 'Henrique',
    idade: 90,
    social: {
        instagram: 'jao338',
        email: 'joaohenriquerc123@gmail.com'
    },

    nomeCompleto: function (){
        return `${this.nome} ${this.sobrenome}`
    }
}

let {nome, sobrenome, idade} = pessoa;

console.log(nome, sobrenome, idade);
console.log(pessoa.nome, pessoa.sobrenome, pessoa.idade)

/*

    É possível definir um valor padrão para os novos valores usando o sinal de atribuição
    let {nome, sobrenome, idade = 0} = pessoa

    Também é possível definir um novo nome para os novos valores, usando os dois pontos
    let {nome:novoNome, sobrenome:novoSobrenome, idade:novoIdade}

*/ 