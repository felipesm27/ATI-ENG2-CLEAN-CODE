//Minha Classe
//Metodo void -> significa que o metodo não tem retorno.
export default class Carro{
  constructor(
    public nome: string,
    public modelo: string,
    public ano: number,
    public velocidade: number,
    public combustivel: number
    ) {}
    status(): void {
      console.log("Carro ")
      console.log("Nome: ", this.nome);
      console.log("Modelo: ", this.modelo);
      console.log("Ano: ", this.ano);
      console.log("Velocidade: ", this.velocidade.toFixed(0));
      console.log("Combustivel: ", this.combustivel.toFixed(0));
    }

// 34:07

acelerar(): number {
  this.velocidade +=  Math.random() * 10; // incrementa potencia
  this.combustivel -=  Math.random() * 15; // decrementa combustivel
  this.acabouCombustivel();
  this.verificaVelocidadeAtual();
  return this.combustivel
 
}
 abastecer(): void {
  this.combustivel +=  Math.random() * 5; //incrementa combustivel
  this.abastecerCarro();
 }

 abastecerCarro(): void {
  if(this.combustivel > 150){
    console.log("Você está com tanque cheio aproveita para Acelerar.")
    this.combustivel = 150;
  }
}

  acabouCombustivel(): void {
    if(this.combustivel < 0 ){ // se o combustivel chgar a zero então imprimi
      console.log('Ops! Você está sem combustivel!! Abasteça o carro para seguir jogando.') //msg
      this.combustivel = 0; // seta o combustivel como 0 
    }
  }

  verificaVelocidadeAtual(): void {
    if(this.velocidade > 200){ //velocidade pode chegar a 200 se passar
      this.velocidade = 0; // invoca velocidade 0
    }
  }
}


