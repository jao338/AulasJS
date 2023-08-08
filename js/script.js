function somar(x, y){
    return x + y;
}

const subtrair = (x,y) => {
    return x - y;
}

const multiplicar = (x,y) => x * y;

console.log('A soma é feita usando a forma de declaração padrão. O resultado é igual a ' + somar(3,2));
console.log('A subtração é feita usando uma das formas de declaração arrow function. O resultado é igual a ' + subtrair(3,2));
console.log('A multiplicação é feita usando uma das formas de declaração arrow function. O resultado é igual a ' + multiplicar(3,2));