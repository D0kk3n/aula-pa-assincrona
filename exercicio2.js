const readline = require('readline-sync');

const num =
parseInt(readline.question("digite um número: "));
console.log("Números pares:");
for (let numero = 0; numero <= num; numero ++){
    if (numero % 2 === 0){
        console.log(numero);
    }
}

console.log("Números ímpares:");
for (let numero = 0; numero <= num; numero ++){
    if (numero % 2 !== 0){
        console.log(numero);
}
}
