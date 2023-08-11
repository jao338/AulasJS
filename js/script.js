function createPerson(name, lastName, age){

    return{
        name, lastName, age,
        getFullName() {
            return `${this.name} ${this.lastName}`
        }
    }
}

let person1 = createPerson("João", "Henrique", 90)
let person2 = createPerson("Paulo", "Muzy", 30)


console.log(`O nome do primeiro objeto é ${person1.name} e o nome do segundo objeto é ${person2.name}`)
console.log(person1.getFullName())