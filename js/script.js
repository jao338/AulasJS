let lista = ["Ovo", "Farinha", "Fermento", "Cascalho"];
let lista2 = ["Prato", "Liquidificador", "Forno"];

delete lista[1];
lista.splice(2, 1);

let res = lista.concat(lista2);

console.log(res.sort())
console.log(res.sort().reverse())
