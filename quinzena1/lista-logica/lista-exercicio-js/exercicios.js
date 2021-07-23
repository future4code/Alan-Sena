// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {

  const n1 = prompt("Qual a altura do retângulo?")
  const n2 = prompt("Qual a largura do retângulo?")

  console.log(Number(n1) * Number(n2))
}

// Exercício 2
function imprimeIdade() {

  const anoAtual = prompt("Digite o an atual.")
  const anoNasc = prompt("Digite seu ano de nascimento.")

  console.log(Number(anoAtual) - Number(anoNasc))
}

// Exercício 3
function calculaIMC() {

 const peso = prompt("Digite seu peso.")
 const altura = prompt("Digite sua altura.")

 console.log(Number(peso) / (Number(altura) * Number(altura)))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  

  let nomeUsuario = prompt("Digite o seu nome.")
  let idadeUsuario = prompt("Digite a sua idade.")
  let emailUsuario = prompt("Digite o seu e-mail.")

  console.log("Meu nome é "+ nomeUsuario+ ", tenho "+ idadeUsuario+ " anos, e o meu email é "+ emailUsuario+ ".")
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  
  let corFav = prompt("Qual a sua cor vavorita?")
  let corFav2 = prompt("Qual a sua segunda cor favorita?")
  let corFav3 = prompt("Qual a sua terceira cor favorita?")

  let coresFavoritas = [corFav , corFav2 , corFav3];
  console.log(coresFavoritas)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  

  let time = prompt("Qual  seu time favorito?")

  console.log(time.toUpperCase())

}

// Exercício 7
function calculaIngressosEspetaculo() {
  
  const custo = prompt("Qual é o custo do teatro?")
  const valorIngresso = prompt("Qual o preço do ingresso")

  let preçoDeCobertura = custo / valorIngresso

  console.log(preçoDeCobertura)
}

// Exercício 8
function checaStringsMesmoTamanho() {
 
  const string1 = prompt("Digete uma palavra aletória.")
  const string2 = prompt("Digite outra palavra aleatória.")

  const tamanho1 = string1.length
  const tamanho2 = string2.length
  
  console.log(tamanho1 == tamanho2)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {

  let palavra1 = prompt("Didite uma palavra.")
  let palavra2 = prompt("Digite outra palavra.")

  let comparacao = (palavra1 != palavra2) && (palavra1 !== palavra2)
  
  console.log(comparacao)

}

// Exercício 10
function checaRenovacaoRG() {
  
  const anoDeNascimento = prompt("Qual ano você nasceu?")
  const anoAtual = prompt("Digite o ano atual")
  const anoIdentidade = prompt("Digite o ano de emissão da sua carteira de identidade.")
  
  // Calculo da idade e tempo de emissão da identidade
  let idade = anoAtual - anoDeNascimento
  let tempoIdentidade = anoAtual - anoIdentidade
  

  let idade20 = idade <= 20
  let idade20A50 = (idade > 20) < 50
  let idadeMaior50 = idade > 50

}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
 
  const idade = prompt("Você tem mais de 180 anos?")
  const escolaridade = prompt("Você possui o ensino médio completo?")
  const disponibilidade = prompt("VocÊ possui disponibilidade exclusiva durante os horários do curso?")

  let idadeBoolean = (idade == 'sim')
  let escolaridadeBoolean = (escolaridade == 'sim')
  let disponibilidadeBoolean = (disponibilidade == 'sim')

  console.log(idadeBoolean && escolaridadeBoolean && disponibilidadeBoolean)
}