let lista = [45, 4, 9, 16, 25];
let lista2 = [];
let lista3 = [];
let lista4 = [];
let lista5 = [];

lista2 = lista.map(function (item){

    return item * 2;

});

for(let i in lista){

    lista3.push(lista[i] * 2)

}

lista4 = lista.filter(function (item){

    if(item < 20){

        return true;

    }else{

        return false;

    }

});

lista5 = lista.every(function(item){

    return (item > 3) ? true : false;
});

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);
console.log(lista5);