let pc = [
    'processador',
    'placa-mae',
    'memoria ram',
    'placa de video',
    'fonte',
    'coooler'
]

pc.pop();
pc.shift();
pc.push('processador')
pc.push('placa de rede')

console.log('O total de componentes: ' + pc.length)
console.log(pc[pc.length-1])

// Pop - Remove o último item do array
// Shift - Remove o primeiro item do array
// Adiciona mais um item ao array em sua última posição