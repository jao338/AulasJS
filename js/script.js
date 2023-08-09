class Person{

    constructor (name){

        this.name = name;
    }
    
    height = 0;
    steps = 0;
    age = 0;

    takeAStep(){
        this.steps++;
    }

    setAge(newAge){
        if(typeof newAge == 'number'){
            this.age = newAge;
        }
    }
}

let person1 = new Person("João")
let person2 = new Person("Maria")
let person3 = new Person("Xerox")

person1.takeAStep();
person1.setAge(22);

console.log(`${person1.name} tem ${person1.age} anos.`)
console.log(`Passos de ${person1.name}: ${person1.steps}`)