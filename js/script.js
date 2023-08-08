/*function square(x){
    return x * x;
}*/

function sumSquare(a,b){
    
    const square = (x) => x * x;

    return square(a) + square(b);
}

//console.log('O quadrado é ' + square(2));
console.log('A soma dos quadrados é ' + sumSquare(3,5));