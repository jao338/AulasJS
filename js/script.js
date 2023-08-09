class Person{

    height = 0;

    constructor (name, age){

        this.name = name;
        this.age = age;
    }
}

let person1 = new Person("João", 22)
let person2 = new Person("Maria", 99)
let person3 = new Person("Xerox", 30)

person1.height = 1.73;

console.log(person1.height)