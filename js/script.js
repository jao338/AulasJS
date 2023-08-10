let char = new Knight('Cavaleiro');
let monster = new LitleMonster();

const stage = new Stage(char,monster, document.querySelector('#char'), document.querySelector('#monster'));

stage.start();