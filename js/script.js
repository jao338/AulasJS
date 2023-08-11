const char = createSorcerer('Ronaldinho Gaúcho');
const monster = createBigMonster();

stage.start(
    char, monster, document.querySelector('#char'), document.querySelector('#monster')
)