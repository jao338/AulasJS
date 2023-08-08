let lista1 = ['x1', 'x2', 'x3'];

let lista2 = ['x2', ['x1', 'x2']];

let lista3 = ['x3', lista2[1]];

console.log(lista1[0]);
console.log(lista2[1][0]);
console.log(lista3[1][0]);