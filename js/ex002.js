function calcularImovel(metros, quartos){

    let res;
    let m2 = 3000;

    if(quartos == 1){

        res = (metros * m2);

        return res;

    }else if(quartos == 2){
        
        m2 *= 1.2;

        res = (metros * m2);

        return res;

    }else if(quartos == 3){

        m2 *= 1.5;

        res = (metros * m2);

        return res;
    }

}

let metragem = 200;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);

console.log('O preço do imóvel é de ' + preco);
