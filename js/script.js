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

function pessoaNomeCompleto({nome, sobrenome}){
    return `${nome} ${sobrenome}`
}

let { email, instagram} = pessoa.social;

console.log(email, instagram)
console.log(pessoaNomeCompleto(pessoa));


/*

    É possível usar também
    let { nome, idade, social:{instagram:{url:instagram}}} = pessoa;

    console.log(nome, idade, instagram);

    Na linha 15, o objeto foi desconstruido nos parâmetros

*/