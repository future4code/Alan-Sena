//1 - Imprime uma mensagem no console "Bem vindo ao jogo de Blackjack!".

console.log('Bem vindo ao jogo Blackjack')
let perguntaInicioDoJogo = confirm('Quer iniciar uma rodada?')

if(perguntaInicioDoJogo === true){
   //SORTEIO CARTA USUARIO
   let cartasDoUsuario = []
   let cartasDoComputador = []
   let textoDasCartasUsuario = []
   let textoDasCartasComputador = []

   function sorteioUsuario() {
   //Sorteia as duas cartas do Usuario
      for (let i = 0; i < 2; i++) {
         cartasDoUsuario.push(comprarCarta())
         textoDasCartasUsuario.push(cartasDoUsuario[i].texto)
      }
      //Verifica se tem duas cartas 'A'
      let verificaCartaA = ((cartasDoUsuario[0].texto.includes('A')) && (cartasDoUsuario[1].texto.includes('A')))
         if(verificaCartaA === true){
            sorteioUsuario()
         }
      //soma dos valores das cartas.
      let somaValorUsuario = Number(cartasDoUsuario[0].valor) + Number(cartasDoUsuario[1].valor)
      //impressão do resultado do sorteio, junto a soma da pontuação das cartas.
      console.log(`Usuário - Cartas: ${cartasDoUsuario[0].texto} ${cartasDoUsuario[1].texto} - Pontuação ${somaValorUsuario}`) 
      
      return somaValorUsuario 
   }
   let chamaSorteioUsuario = sorteioUsuario()
   let resultadoDaSomaValor = chamaSorteioUsuario
   
   //SORTEIO CARTA COMPUTADOR
   function sorteioComputador() {
      //sorteia cartas
      for (let i = 0; i < 2; i++) {
         cartasDoComputador.push(comprarCarta())
         textoDasCartasComputador.push(cartasDoComputador[i].texto)
      }
      //Verifica se são duas letras 'A'
      let verificaCartaComputador = ((cartasDoComputador[0].texto.includes('A')) && (cartasDoComputador[1].texto.includes('A')))
         if(verificaCartaComputador === true){
            sorteioComputador()
         }
      //Soma o valor das duas cartas
      let somaValorComputador = Number(cartasDoComputador[0].valor) + Number(cartasDoComputador[1].valor)
      //Imprime as mensagens
      console.log(`Computador - Cartas: ${cartasDoComputador[0].texto} ${cartasDoComputador[1].texto} - Pontuação ${somaValorComputador}`)

      return somaValorComputador
   }
   let chamaSorteioComputador = sorteioComputador()
   let resultadoDaSomaValorCom = chamaSorteioComputador
    
   //Quem venceu
   if(resultadoDaSomaValor > resultadoDaSomaValorCom){
      console.log('O usuário venceu!')
   }else if(resultadoDaSomaValorCom > resultadoDaSomaValor){
      console.log("O computador venceu!")
   }else{
      console.log("Empate!")
   }

   //Confirma se o Usuário quer mais uma carta
   function sorteioAdicional(){
      let maisCartas = confirm(`Suas cartas são ${textoDasCartasUsuario}. A carta revelada do computador é ${cartasDoComputador[0].texto}.\nDeseja comprar mais uma carta?`)
         
      
         while ((resultadoDaSomaValor < 21) && (maisCartas === true)) {
            cartasDoUsuario.push(comprarCarta())
            textoDasCartasUsuario.push(cartasDoUsuario.pop().texto)
            
            resultadoDaSomaValor = resultadoDaSomaValor + cartasDoUsuario.pop().valor
           

            maisCartas = confirm(`Suas cartas são ${textoDasCartasUsuario}. A carta revelada do computador é ${cartasDoComputador[0].texto}.\nDeseja comprar mais uma carta?`)
            
            
            if(resultadoDaSomaValor === 21){
               console.log('21!!!!!')
            }else if(resultadoDaSomaValor > 21){
               console.log('Você estourou a pontuação!')
            }
         }
         
     
         while((resultadoDaSomaValorCom <= resultadoFinalUsuario.pop())){
         cartasDoComputador.push(comprarCarta())
         textoDasCartasComputador.push(cartasDoComputador.pop().valor)
         
         resultadoDaSomaValorCom = resultadoDaSomaValorCom + cartasDoComputador.pop().valor
        
         
         }
   }
   let cartaAdd = sorteioAdicional()
 } else {
   console.log("Fim de jogo!")
 }
