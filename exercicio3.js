const readline = require('readline-sync');

const num =
parseInt(readline.question("digite um número: "));
console.log("Números pares:");
for (let numero = 0; numero <= num; numero ++){
        console.log(numero);
    }
}