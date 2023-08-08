let fruits = ['Maça', 'Uva', 'Laranja', 'Banana']

let newFruits = fruits.filter((item) => {

    if(item.length > 4){
        return true;
    } else{
        return false;
    }
})

let bigFruits = fruits.filter((item) => {

    return item.length > 4;
})

console.log(bigFruits)
console.log(newFruits)