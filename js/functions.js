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