class Person{

    age = 0;
    static hands = 2;

    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log('Oi, eu sou o ' + this.name + " e tenho " + Person.hands + " mãos")
    }
}

let p1 = new Person('João')

p1.sayHi();
Person.hands = 3;

/*
    O método "static" faz referência a classe "Person" e não ao objeto instanciado, ou seja.
    Para referenciar quantas mãos uma pessoa tem, usamos o "Person.hands"
    Para alterar um atributo estático de uma clase, usamos "Person.hands = "
*/