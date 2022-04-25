import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var numero = await rl.question('digite um numero')
numero = parseInt(numero,10)

if (numero == 1){console.log('domingo')}
else if(numero == 2){console.log('segunda-feira')}
else if (numero ==3){console.log('terça-feira')}
else if (numero ==4) {console.log('quarta-feira')}
else if (numero  ==5){console.log('quinta-feira')}
else if (numero ==6){console.log('sexta-feira')}
else if (numero ==7){console.log('sabado')}
else {console.log('nao há dias da semana')}


await rl.close()