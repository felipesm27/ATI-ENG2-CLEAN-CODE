# CLEAN-CODE-ENGS2
# Projeto para atividade de git
 Projeto criando para fins academicos.
 ## ��� Pré requisitos

 Node 
 Typescript

 <a href="https://nodejs.dev/">Node</a> &nbsp;
 
 ## Instalação do Projeto

<a href="https://npm.io/package/sync-prompt">sync-prompt</a> &nbsp;
<br>
npm i prompt-sync

 ## Exemplo
 #### Criação Classe 
 Foi criado uma classe e instanciado um objeto e abaixo tem um switch para manipular os atribulos do objeto do tipo Carro que é o "porsche".

 <img width="730" alt="image" src="https://user-images.githubusercontent.com/70846896/192854728-a0ef5496-2b2e-4ca3-9261-ed0c2c696d10.jpg">

 #### Separando Classe do que e responsavel pela execução do programa

 <img width="730" alt="image" src="https://user-images.githubusercontent.com/70846896/192854739-75c24072-a267-41a9-acfb-5b136bed8816.png">

 <img width="730" alt="image" src="https://user-images.githubusercontent.com/70846896/192854728-a0ef5496-2b2e-4ca3-9261-ed0c2c696d10.jpg">

#### "Codigo Poluido" Forma de como podemos fazer, mas o "main" deveria ser responsavel somente por ler dados de entrada e apresentar dados de saida. A logica de calculo é papel do projeto do carro ele que tem que dizer como o carro ira funcionar como vai manipular os atributos.
 
 <img width="730" alt="image" src="https://user-images.githubusercontent.com/70846896/192854741-534820cc-b737-4a9f-81d3-0fd5f845aad1.png">

#### Precisamos criar os metodos. E oque são metodos? são ações que o nosso objeto pode executar.
#### Definindo Metodo

 <img width="730" alt="image" src="https://user-images.githubusercontent.com/70846896/192854746-d0d8da0e-1710-4753-aafe-107d49967a79.png">

 #### Chamandos Metodos

  <img width="730" alt="image" src="https://user-images.githubusercontent.com/70846896/192854748-3e059785-0935-4b1e-8beb-d85023d2d38b.png">

 #### Passamos os metodos na classe

 <img width="730" alt="image" src="https://user-images.githubusercontent.com/70846896/192854751-1274f569-03ce-4f5e-9ab3-f381f3fb00f0.png">

  #### Melhorando mais um pouco o main e a classe ja com os metodos

  <img width="730" alt="image" src="https://user-images.githubusercontent.com/70846896/192854755-598e2241-943f-4594-91ca-5dc71d11ac75.png">
  
  <img width="730" alt="image" src="https://user-images.githubusercontent.com/70846896/192854757-3fb38f0c-4c3d-4226-8b97-16bbd327fb44.png">

  #### Ainda sim podemos começar a identificar pontos de melhorias

 #### Conclusão: Mesmo um código ruim pode funcionar mesmo se ele não for limpo, podera ocasionar muitos problemas futuros para manutenção alem de ficar dificil entender oque cada coisa esta fazendo.

 ## Executando a aplicação

 ```bash
 # development
 $ ts-node main
 ```

 ## ��� Simples Trabalho Clean-code

 <a href="https://github.com/felipesm27"><img src="https://github.com/felipesm27.png" width="45" height="45"></a> &nbsp;
