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
    constructor(fighter1, fighter2, fighter1E, fighter2E){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1E = fighter1E;
        this.fighter2E = fighter2E;
    }

    start(){
        this.update();
    }

    update(){
        this.fighter1E.querySelector('.name').innerHTML = this.fighter1.name;
        this.fighter2E.querySelector('.name').innerHTML = this.fighter2.name;
    }
}