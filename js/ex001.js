function percent(n1, n2){

    let res = ((n2 / n1) * 100);
    
    return res;
}


let x = 40;
let y = 10;

let resultado = percent(x,y);

console.log(`${resultado}% de ${x} é ${y}`);
console.log('A porcentagem entre ' + y + ' e ' + x + ' é igual a ' + resultado + '%');

