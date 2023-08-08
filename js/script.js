let fruits = ['Maça', 'Uva', 'Laranja', 'Banana']

let cars = [
    { brand: 'Fiat', year: 2022},
    { brand: 'Bmw', year: 2018},
    { brand: 'Ferrari', year: 2020}
]

cars.sort((a,b) => {

    if(a.year > b.year){

        return 1;

    } else if(a.year < b.year){

        return -1;

    } else{

        return 0;

    }
})

cars.sort((a,b) => {
    return a.year - b.year;
})

fruits.sort();
fruits.reverse();

console.log(fruits)