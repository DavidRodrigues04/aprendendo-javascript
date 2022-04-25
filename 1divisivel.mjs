import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var numero = await rl.question("digite um numero")
numero = parseInt (numero, 10)

if(numero % 10 == 0) {console.log (" numero divisivel por 10")}
else if (numero % 5 == 0) {console.log (" numero divisivel por 5")}
else if ( numero % 2 == 0) {console.log ( " numero divisivel por 2")}
else {console.log (" numero não divisivel ")}

await rl.close()