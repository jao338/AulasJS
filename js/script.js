let cores = ['preto', 'branco', 'azul'];

for(let x = 1; x < 11; x++){

    for (let index = 1; index < 11; index++) {

        console.log(x + ' * ' + index + ' = ' +  (index * x));

    }
    
    console.log('\n');
}

for(let n = 0; n < cores.length; n++){

    console.log(cores[n]);
}

for(let i in cores){
    console.log(cores[i]);
}

for(let cor of cores){
    console.log(cor);
}