var a = "a";
let b = "b";
const c = "c";


function print(){
    
    a = "b";
    
    let b = "a";

    //c = "a";
}

print();

console.log(a + b + c);

/*
    A variável 'var' funciona em escopo global ou local e pode ser redeclarada e reatribuida. 
    A variável 'let' funciona em escopo global, local ou de bloco e pode ser reatribuida, mas não redeclarada.
    A variável 'const' funciona em escopo global, local ou de bloco e NÃO pode ser redeclarada nem reatribuia.
*/