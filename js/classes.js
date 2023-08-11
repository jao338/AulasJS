class Character{

    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name){
        this.name = name;
    }

    get life(){
        return this._life;
    }

    set life(newLife){
        this._life = newLife < 0 ? 0: newLife;
    }
}

class Knight extends Character{
    constructor(name){
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class Sorcerer extends Character{
    constructor(name){
        super(name);
        this.life = 80;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;
    }
}

class LitleMonster extends Character{
    constructor(){
        super('Litle Monster')
        this.attack = 4;
        this.defense = 4;
        this.life = 40;
        this.maxLife = this.life;
    }
}

class BigMonster extends Character{
    constructor(){
        super('Big Monster')
        this.attack = 14;
        this.defense = 4;
        this.life = 120;
        this.maxLife = this.life;
    }
}

class Stage{
    constructor(fighter1, fighter2, fighter1E, fighter2E, logObj){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1E = fighter1E;
        this.fighter2E = fighter2E;
        this.log = logObj;
    }

    start(){
        this.update();

        this.fighter1E.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2E.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));
    }

    update(){

        let f1P = (this.fighter1.life / this.fighter1.maxLife) * 100;
        let f2P = (this.fighter2.life / this.fighter2.maxLife) * 100;

        this.fighter1E.querySelector('.bar').style.width = `${f1P}%`
        this.fighter2E.querySelector('.bar').style.width = `${f2P}%`

        this.fighter1E.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        this.fighter2E.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;

    }

    doAttack(attacking, attacked){

        if(attacking.life <= 0 || attacked.life <= 0){
            this.log.addMessage('Alguém foi de arrasta pra cima')
            return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2);
        let defenseFactor = (Math.random() * 2).toFixed(2);

        let actualAttack = attacking.attack * attackFactor;
        let actualDefense = attacked.defense * defenseFactor;

        if(actualAttack > actualDefense){
            
            attacked.life -= (actualAttack - actualDefense);
            this.log.addMessage(`${attacking.name} causou ${actualAttack} de dano em ${attacked.name}`)

        }else{

            this.log.addMessage(`${attacked.name} conseguiu defender!`)

        }

        this.update();
    }
}

class Log{

    list = [];

    constructor(listaE){
        this.listaE = listaE;
    }

    addMessage(msg){
        this.list.push(msg);
        this.render();
    }

    render(){

        this.listaE.innerHTML = '';

        for(let i in this.list){
            this.listaE.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}