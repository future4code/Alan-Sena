//1 - Imprime uma mensagem no console "Bem vindo ao jogo de Blackjack!".

console.log('Bem vindo ao jogo Blackjack')
let perguntaInicioDoJogo = confirm('Quer iniciar uma rodada?')

if(perguntaInicioDoJogo === true){
   //SORTEIO CARTA USUARIO
   function sorteioUsuario() {
      //sorteio da primeira carta do usuário.
      let primeiroSorteioUsuario = comprarCarta()
      let primeiraCartaUsuario = [(primeiroSorteioUsuario.texto),(primeiroSorteioUsuario.valor)]
      
      //sorteio da segunda carta do usuário.
      let segundoSorteioUsuario = comprarCarta()
      let segundaCartaUsuario = [(segundoSorteioUsuario.texto),(segundoSorteioUsuario.valor)]
      
      //soma dos valores das cartas.
      let somaValorUsuario = Number(primeiraCartaUsuario[1] + Number(segundaCartaUsuario[1]))
      
      //impressão do resultado do sorteio, junto a soma da pontuação das cartas.
      console.log(`Usuário - Cartas: ${primeiraCartaUsuario[0]} ${segundaCartaUsuario[0]} - Pontuação ${somaValorUsuario}`)
      
      //peço o retorno do resultado para comparar quem venceu.
      return somaValorUsuario
   }
   let chamaSorteioUsuario = sorteioUsuario()
   let pontuacaoUsuario = chamaSorteioUsuario
   
   //SORTEIO CARTA COMPUTADOR
   function sorteioComputador() {
      //sorteio da primeira carta computador.
      let primeiroSorteioComputador = comprarCarta()
      let primeiraCartaComputador = [(primeiroSorteioComputador.texto), (primeiroSorteioComputador.valor)]

      //sorteio segunda carta computador.
      let segundoSorteioComputador = comprarCarta()
      let segundaCartaComputador = [(segundoSorteioComputador.texto),(segundoSorteioComputador.valor)]

      //soma dos valores das cartas sorteadas.
      let somaValorComputador = Number(primeiraCartaComputador[1]) + Number(segundaCartaComputador[1])

      //impressão do resultado dos sorteios, junto a soma da pontuação obtida pelo computador.
      console.log(`Computador - Cartas: ${primeiraCartaComputador[0]} ${segundaCartaComputador[0]} - Pontuação ${somaValorComputador}`)

      //peço o retorno do resultado para comparar quem venceu.
      return somaValorComputador
   }
   let chamaSorteioComputador = sorteioComputador()
   let pontuacaoComputador = chamaSorteioComputador
   
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