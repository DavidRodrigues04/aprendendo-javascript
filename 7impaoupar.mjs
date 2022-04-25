import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


var numero= await rl.question('digite um numero')

numero= parseInt(numero,10)

console.log(numero)

if(numero %2 ==1)
{console.log('ímpar')}
else 
{console.log('par')}

await rl.close()
