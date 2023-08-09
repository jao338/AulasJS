class Person{

    age = 0

    constructor (name){

        this.name = name;
    }

    sayHi(){
        console.log(this.name + " Diz oi")
    }
}

class Student extends Person{

    constructor (name, id){
        super(name)
        this.id = id;
    }

    sayHello(){
        super.sayHi();
    }
}

let p1 = new Student("João", 1)

p1.age = 22;

console.log(`${p1.name} tem ${p1.age} anos e possui matrícula #${p1.id}`)
p1.sayHello();

/*

    "super(name)" executa o construtor da classe "Person"
*/
