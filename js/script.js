class Person{

    constructor (primeiroNome, ultimoNome){

        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;
    }

    _age = 0;

    get nomeCompleto(){
        return `${this.primeiroNome} ${this.ultimoNome}`
    }

    get age(){
        return this._age;
    }

    set age(age){
        this._age = age;
    }
}

let person1 = new Person("João", "Henrique")
let person2 = new Person("Maria", "Rosa")
let person3 = new Person("Luciano", "Pamplona")

person1.age = 22

console.log(`${person1.name} tem ${person1.age} anos.`)