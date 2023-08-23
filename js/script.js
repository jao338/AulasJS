let info = [ 'João Henrique', 'João', 'Henrique', 'jao338'];

let [nomeCompleto, nome, sobrenome, instagram] = info;

console.log(nomeCompleto, nome, sobrenome, instagram);

/*

    Caso queira não queira pegar algum valor do array sem ter que criar variáveis inutilizáveis, use:

    let [ nomeCompleto, , , instagram] = info;
    O código acima define apenas duas novas variáveis ao desconstruir o array
*/