let nomes = ['0', '1', '2']

let personagem = {
    nome: ["Pedrinho", "Matador"],
    idade: 16,
    pais: 'Brasil',
    estado: 'São Paulo',
    cidade: 'Rio Claro',

    nacionalidade: function (){
        return `${this.pais} - ${this.estado}/${this.cidade}`
    },

    carros: [
        {modelo: 'Fiat', cor: 'Preto'},
        {modelo: 'Ferrari', cor: 'Vermelho'}
    ],
    atributos: {
        forca: 15,
        magia: 5,
        stamina: 20,
    }
}

personagem.idade = 64
personagem.atributos.magia += 5;

console.log(nomes[0]);
console.log(personagem.nome);
console.log(personagem.atributos.magia);
console.log(personagem.carros[0].cor);
console.log(personagem.nacionalidade());