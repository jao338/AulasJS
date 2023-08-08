function somar(n1, n2){

    let res = n1 + n2;

    return res;
}

function nomeCompleto(nome, sobrenome){
    
    return (nome + ' ' + sobrenome);
}

function idade(idade){

    if(idade >= 18){
    
        return true;
    
    }else {
    
        return false;
    
    }
}

let verificacao = idade(12);

if(verificacao){
    console.log('Você é maior de idade');
}else{
    console.log('Você é menor de idade');
}

console.log('O nome completo é ' + nomeCompleto('João', 'Henrique'));
console.log('O resultado é ' + somar(10,14));

