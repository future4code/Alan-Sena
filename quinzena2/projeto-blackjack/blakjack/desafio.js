//1 - Imprime uma mensagem no console "Bem vindo ao jogo de Blackjack!".

console.log('Bem vindo ao jogo Blackjack')
let perguntaInicioDoJogo = confirm('Quer iniciar uma rodada?')

if(perguntaInicioDoJogo === true){
   //SORTEIO CARTA USUARIO
   let cartasDoUsuario = []
   let cartasDoComputador = []
   
   function sorteioUsuario() {
      
   for (let i = 1; i < 3; i++) {
         let primeiroSorteioUsuario = comprarCarta()
         let primeiraCartaUsuario = primeiroSorteioUsuario.texto
         let primeiroValorUsuario = primeiroSorteioUsuario.valor
         cartasDoUsuario.push(primeiraCartaUsuario, primeiroValorUsuario)
      }
      
      //Verifica se tem duas cartas 'A'
      let verificaCartaA = ((cartasDoUsuario[0].includes('A')) && (cartasDoUsuario[2].includes('A')))
      if(verificaCartaA === true){
         sorteioUsuario()
      }
      
      //soma dos valores das cartas.
      let somaValorUsuario = Number(cartasDoUsuario[1]) + Number(cartasDoUsuario[3])
      
      //impressão do resultado do sorteio, junto a soma da pontuação das cartas.
      console.log(`Usuário - Cartas: ${cartasDoUsuario[0]} ${cartasDoUsuario[2]} - Pontuação ${somaValorUsuario}`)
      
      return somaValorUsuario
   }
   let chamaSorteioUsuario = sorteioUsuario()
  
   
   //SORTEIO CARTA COMPUTADOR
   function sorteioComputador() {
      
      for (let i = 1; i < 3; i++) {
         let primeiroSorteioComputador = comprarCarta()
         let cartaComputadorTexto = primeiroSorteioComputador.texto
         let cartaComputadorValor = primeiroSorteioComputador.valor
         cartasDoComputador.push(cartaComputadorTexto, cartaComputadorValor)
      }

      let verificaCartaComputador = ((cartasDoComputador[0].includes('A')) && (cartasDoComputador[2].includes('A')))
      if(verificaCartaComputador === true){
         sorteioComputador()
      }

      let somaValorComputador = Number(cartasDoComputador[1]) + Number(cartasDoComputador[3])

      console.log(`Computador - Cartas: ${cartasDoComputador[0]} ${cartasDoComputador[2]} - Pontuação ${somaValorComputador}`)

      return somaValorComputador
   }
   let chamaSorteioComputador = sorteioComputador()
    
   
   //Quem venceu
   if(chamaSorteioUsuario > chamaSorteioComputador){
      console.log('O usuário venceu!')
   }else if(chamaSorteioComputador > chamaSorteioUsuario){
      console.log("O computador venceu!")
   }else{
      console.log("Empate!")
   }
 
}else{
   console.log("Fim de jogo!")
}
