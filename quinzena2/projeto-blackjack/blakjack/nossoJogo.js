//1 - Imprime uma mensagem no console "Bem vindo ao jogo de Blackjack!".

console.log('Bem vindo ao jogo Blackjack')
let perguntaInicioDoJogo = confirm('Quer iniciar uma rodada?')

if(perguntaInicioDoJogo === true){
   let cartasDoUsuario = []
   let cartasDoComputador = []
   
   function sorteioUsuario() {
      for (let i = 1; i < 3; i++) {
         let primeiroSorteioUsuario = comprarCarta()
         let primeiraCartaUsuario = primeiroSorteioUsuario
         cartasDoUsuario.push(primeiraCartaUsuario)
      }
   
      let somaValorUsuario = Number(cartasDoUsuario[0].valor) + Number(cartasDoUsuario[1].valor)
     
      console.log(`Usuário - Cartas: ${cartasDoUsuario[0].texto} ${cartasDoUsuario[1].texto} - Pontuação ${somaValorUsuario}`) 
      
      return somaValorUsuario 
   }
   let chamaSorteioUsuario = sorteioUsuario()

   function sorteioComputador() {
      //sorteia cartas
      for (let i = 1; i < 3; i++) {
         let primeiroSorteioComputador = comprarCarta()
         let cartaComputador = primeiroSorteioComputador
         cartasDoComputador.push(cartaComputador)
      }
      let somaValorComputador = Number(cartasDoComputador[0].valor) + Number(cartasDoComputador[1].valor)
      console.log(`Computador - Cartas: ${cartasDoComputador[0].texto} ${cartasDoComputador[1].texto} - Pontuação ${somaValorComputador}`)

      return somaValorComputador
   }
   let chamaSorteioComputador = sorteioComputador()
    
   if(chamaSorteioUsuario > chamaSorteioComputador){
      console.log('O usuário venceu!')
   }else if(chamaSorteioComputador > chamaSorteioUsuario){
      console.log("O computador venceu!")
   }else{
      console.log('Empate!')
   }
}