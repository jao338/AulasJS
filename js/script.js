let char = new Sorcerer('Ronaldinho Gáucho');
let monster = new LitleMonster();

const stage = new Stage(char,monster, document.querySelector('#char'), document.querySelector('#monster'));

stage.start();