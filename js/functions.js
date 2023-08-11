const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

const createKnight = (name) =>{
    return{
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const createSorcerer = (name) =>{

    return{
        ...defaultCharacter,
        name, 
        life: 80,
        maxLife: 80,
        attack: 16,
        defense: 4
    }
}


const createLittleMonster = () =>{

    return{
        ...defaultCharacter,
        name: "Little Monster", 
        life: 50,
        maxLife: 50,
        attack: 5,
        defense: 6
    }
}

const createBigMonster = () =>{

    return{
        ...defaultCharacter,
        name: "Big Monster", 
        life: 120,
        maxLife: 120,
        attack: 10,
        defense: 10
    }
}

const stage = {

    fighter1: null,
    fighter2: null,
    fighter1E: null,
    fighter2E: null,

    start(fighter1, fighter2, fighter1E, fighter2E){

        this.fighter1 = fighter1,
        this.fighter2 = fighter2,
        this.fighter1E = fighter1E,
        this.fighter2E = fighter2E,

        this.fighter1E.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2)),
        
        this.fighter2E.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1))

        this.update();
    },

    update(){
        this.fighter1E.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        this.fighter2E.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;

        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;

        this.fighter1E.querySelector('.bar').style.width = `${f1Pct}%`;
        this.fighter2E.querySelector('.bar').style.width = `${f2Pct}%`;
    },
    
    doAttack(attacking, attacked){
        
        if(attacking.life <= 0 || attacked.life <= 0){
            console.log('Alguém ta morto, não pode atacar');
            return;
        }

        const attackFactor = (Math.random() * 2).toFixed(2)
        const defenseFactor = (Math.random() * 2).toFixed(2)

        const actualAttack = attacking.attack * attackFactor;
        const actualDefense = attacked.defense * defenseFactor;

        if(actualAttack > actualDefense){

            attacked.life -= (actualAttack - actualDefense)
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            console.log(`${attacking.name} causou ${(actualAttack - actualDefense).toFixed(1)} em ${attacked.name}`)

        }else{
            console.log(`${attacked.name} consegui defender`)
        }
        
        this.update();
    }
}