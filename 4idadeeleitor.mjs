  
import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/*4. Crie um algoritmo em que leia a idade de uma pessoa e informe a sua
classe eleitoral:
 não eleitor (abaixo de 16 anos);
 eleitor obrigatório (entre a faixa de 18 e menor de 65 anos);
 eleitor facultativo (de 16 até 18 anos e maior de 65 anos, inclusive).*/

var idade= await rl.question( 'digite um numero')
parseInt=(idade,10)

if (  idade >=18 && idade <=65){
console.log('eleitor obrigatorio')}

else if (idade >=16 && idade <18 || idade >65)

{console.log('eleitor facultativo')}

else
{ 
console.log('nao eleitor')}

await rl.close()

