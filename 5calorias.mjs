  
import { pseudoRandomBytes } from 'crypto';
import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var prato= await rl.question('digite o prato')

var bebida= await rl.question('digite a bebida')

if (prato==1 || prato==vegetariano) {console.log('vegetariano 180 cal ')}
else if(prato==2 || prato==peixe){console.log('peixe 230 cal')}
else if (prato==3 || prato==frango){console.log('frango 250 cal')}
else if (prato==4 || prato==carne){console.log('carne 350 cal')}
else{console.log('indefinido')}

var sobremesa= await rl.question('digite a sobremesa')

if (sobremesa==1 || sobremesa==vegetariano) {console.log('vegetariano 180 cal ')}
else if(sobremesa==2 || sobremesa==peixe){console.log('peixe 230 cal')}
else if (sobremesa==3 ||sobremesa==frango){console.log('frango 250 cal')}
else if (sobremesa==4 || sobremesa==carne){console.log('carne 350 cal')}
else{console.log('indefinido')}


