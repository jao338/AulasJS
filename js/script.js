const defaultUser = {
    name: "",
    email: "",
    level: 1
}

const user1 = {
    ...defaultUser,
    name: "João",
    email: "shaolin_matador_de_porco123@gmail.com"
}

const adm = {
    ...defaultUser,
    name: 'A D M',
    email: "dono_da_blaze_oficial@hotmail.com.br",
    level: 2
}

console.log(`${user1.name}, ${user1.email}, ${user1.level}`)
console.log(`${adm.name}, ${adm.email}, ${adm.level}`)

/*
    O "...<objeto>" clona os atributos de um objeto para outro, sendo esse o conceito de herança na programação funcional
*/