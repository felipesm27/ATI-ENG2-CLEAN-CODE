import prompt from 'prompt-sync';
import Carro from "./Carro"
//Separando codigo o main vai ficar responsavel por tudo que é relacionado a execução.
let porsche: Carro = new Carro("Porsche", "Volkswagen", 2010, 10, 100);

let teclado = prompt();
let option: number = 0;
while(option != 9){
console.log('+---------Carro---------+')
console.log('|1. Acelerar             |')
console.log('|2. Velocidade Atual     |')
console.log('|3. Abastecer Carro      |')
console.log('|9. Sair                 |')
console.log('+------------------------+')
option = +teclado('Escolha uma Ação: ');

switch (option) {
  case 1:
    let recebeRetorno: number = porsche.acelerar()
    console.log(`Você ainda tem ${recebeRetorno.toFixed(0)} lts de combustivel! `)
    porsche.status()
    break;
    case 2:
    porsche.status()
    break;
    case 3:
    porsche.abastecer()
    porsche.status()
    break;

  default:
    break;
}
}
