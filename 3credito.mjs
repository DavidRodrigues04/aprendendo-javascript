import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var saldo = await rl.question('digite seu saldo')
saldo = parseInt(saldo)
var j = parseInt (j)
var percentual=saldo*j==percentual
console.log



if     (saldo >=501 || saldo<=1000)  
var percentual= (3.0==j*saldo)=percentual
{console.log('30% do valor do saldo medio')}
else if(saldo>=1001 || saldo <=3000)
var percentual= (4.0==j*saldo)=percentual
 {console.log('40% do valor do saldo medio')}
else if(saldo >=3001)
var percentual= 5.0*saldo=percentual
{console.log('50% do valor do saldo medio')}
else 
{console.log('nenhum credito')}



await rl.close()