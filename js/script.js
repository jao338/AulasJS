let lista = [45, 4, 9, 16, 25];
let lista2 = [];
let lista3 = [
    {id: 1, nome:'Paulo', sobrenome: 'Lacerda'},
    {id: 2, nome:'Jorge', sobrenome: 'Henrique'},
    {id: 3, nome:'Fulano', sobrenome: 'Ciclano'}
];
let lista4 = [];

lista2 = lista.findIndex(function (item){

    return (item == 16) ? true : false;

});

lista4 = lista3.find(function(item){


    return (item.id == 3) ? true : false;

});

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);